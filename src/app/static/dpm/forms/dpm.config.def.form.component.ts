import { Component, Inject, Optional } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

export interface IDpmConfigDef {
  client_ref: string;
  component_type: string;
  company_ref: string;
  party_ref: string;
  config_type: string;
  config_value: string;
  description: string;
  version_no: number;
  version_date: Date;
  version_user: string;
}

@Component({
  selector: 'app-dpmconfig-def-form',
  template: `
    <h1 mat-dialog-title>Dpm Config Def Update</h1>
    <div mat-dialog-content>
      <form [formGroup]="formGroup" #myForm="ngForm">
        <mat-form-field>
          <input
            matInput
            placeholder="Config Type"
            required
            formControlName="config_type"
        /></mat-form-field>
        <mat-form-field>
          <input
            matInput
            placeholder="Config Value"
            required
            formControlName="config_value"
        /></mat-form-field>
        <mat-form-field>
          <input
            matInput
            placeholder="Description"
            formControlName="description"
          />
        </mat-form-field>
      </form>
    </div>
    <div mat-dialog-actions>
      <button
        mat-button
        (click)="onUpdate()"
        [mat-dialog-close]="data"
        [disabled]="!myForm.form.valid"
        mat-flat-button
        color="primary"
      >
        Update
      </button>
      <button mat-button (click)="closeDialog()" mat-flat-button color="warn">
        Cancel
      </button>
    </div>
  `,
})
export class DpmConfigDefFormComponent {
  formGroup: FormGroup;
  dpmCodes: any;
  constructor(
    public dialogRef: MatDialogRef<DpmConfigDefFormComponent>,
    private fb: FormBuilder,
    // @Optional() is used to prevent error if no data is passed
    @Optional() @Inject(MAT_DIALOG_DATA) public data: IDpmConfigDef
  ) {
    this.createForm(data);
  }

  createForm(party: IDpmConfigDef) {
    const currentDate = new Intl.DateTimeFormat('en');
    const theDate = currentDate.format();
    if (party.version_no === undefined) {
      party.version_no = 0;
    }
    const versionNo = Number(party.version_no) + 1;
    this.formGroup = this.fb.group({
      client_ref: [party.client_ref],
      component_type: [party.component_type],
      company_ref: [party.company_ref],
      party_ref: [party.company_ref],
      config_type: [party.config_type],
      config_value: [party.config_value],
      description: [party.description],
      version_no: versionNo,
      version_date: theDate,
      version_user: localStorage.getItem('USER_ID'),
    });
  }

  onUpdate() {
    let data = this.formGroup.getRawValue();
    this.dialogRef.close({ event: 'Update', data });
  }

  closeDialog() {
    this.dialogRef.close({ event: 'Cancel' });
  }
}
