import { Component, Inject, Optional } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { SnackService } from 'app/services/snack.service';

export interface ITETemplate {
  component_type: string;
  template_type: string;
  template_data: string;
  version_no: number;
  version_date: Date;
  version_user: string;
}

@Component({
  selector: 'app-te-template-form',
  template: `
    <h1 mat-dialog-title>Narrative Update</h1>
    <div mat-dialog-content>
      <form [formGroup]="formGroup" #myForm="ngForm">
        <mat-form-field>
          <input
            matInput
            placeholder="component_type"
            required
            formControlName="component_type"/></mat-form-field>
        <mat-form-field>
            <input matInput placeholder="template data" formControlName="template_data"/>
        </mat-form-field>
      </form>
    </div>
    <div mat-dialog-actions>
      <button
        mat-button
        (click)="onExport()"
        [disabled]="!myForm.form.valid"
        [mat-dialog-close]="data"
        mat-flat-button
        color="primary"
      >
       Export
      </button>
      <button
        mat-button
        (click)="onCreate()"
        [disabled]="!myForm.form.valid"
        [mat-dialog-close]="data"
        mat-flat-button
        color="primary"
      >
        Insert
      </button>
      <button
        mat-button
        (click)="onDelete()"
        [disabled]="!myForm.form.valid"
        [mat-dialog-close]="data"
        mat-flat-button
        color="primary"
      >
        Delete
      </button>
      <button mat-button (click)="closeDialog()" mat-flat-button color="warn">
        Cancel
      </button>
    </div>
  `,
})
export class TeTemplateFormComponent {
  formGroup: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<TeTemplateFormComponent>,
    private fb: FormBuilder,
    private snackService: SnackService,
    @Optional() @Inject(MAT_DIALOG_DATA) public data: ITETemplate
  ) {
    this.createForm(data);
  }

  createForm(party: ITETemplate) {
    const currentDate = new Intl.DateTimeFormat('en');
    const theDate = currentDate.format();
    if (party.version_no === undefined) {
      party.version_no = 0;
    }
    const versionNo = Number(party.version_no) + 1;
    this.formGroup = this.fb.group({
      component_type: [party.component_type],
      template_type: [party.template_type],
      template_data: [party.template_data],
      version_no: versionNo,
      version_date: theDate,
      version_user: localStorage.getItem('USER_ID'),
    });
  }

  onCreate() {
    let data = this.formGroup.getRawValue();
    try {
      const parser = new DOMParser();
      const xmlDoc = parser.parseFromString(data.template_data, "text/xml");
      data.template_type = xmlDoc.getElementsByTagName("name")[0].childNodes[0].nodeValue;
      this.dialogRef.close({ event: 'Create', data });
    }
    catch (error) {
      this.snackService.showMessage('Invalid XML');
    }
  }

  onExport() {
    let data = this.formGroup.getRawValue();
    this.dialogRef.close({ event: 'Export', data });
  }

  onDelete() {
    let data = this.formGroup.getRawValue();
    this.dialogRef.close({ event: 'Delete', data });
  }

  closeDialog() {
    this.dialogRef.close({ event: 'Cancel' });
  }

}
