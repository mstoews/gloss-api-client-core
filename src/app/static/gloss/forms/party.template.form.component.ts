import { Component, Inject, Optional } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

export interface IPartyTemplate {
  party_ref: string;
  client_ref: string;
  template_party_ref: string;
  party_short_name: string;
  party_long_name: string;
  version_no: number;
  version_date: Date;
  version_user: string;
}

@Component({
  selector: 'app-party-template-form',
  template: `
    <h1 mat-dialog-title>Party Template Update</h1>
    <div mat-dialog-content>
      <form [formGroup]="fg" #myForm="ngForm">
        <mat-form-field>
          <input
            matInput
            placeholder="Party Ref"
            required
            maxlength="12"
            formControlName="party_ref"
          />
        </mat-form-field>

        <mat-form-field>
          <input
            matInput
            placeholder="Template Company Ref"
            required
            maxlength="12"
            formControlName="template_party_ref"
          />
        </mat-form-field>

        <mat-form-field>
          <input
            matInput
            placeholder="Short Name"
            formControlName="party_short_name"
        /></mat-form-field>
        <mat-form-field>
          <input
            matInput
            placeholder="Long Name"
            formControlName="party_long_name"
        /></mat-form-field>
      </form>
    </div>

    <div mat-dialog-actions>
      <button
        mat-button
        (click)="onUpdate()"
        [disabled]="!myForm.form.valid"
        [mat-dialog-close]="data"
        mat-flat-button
        color="primary"
      >
        Update
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
export class PartyTemplateFormComponent {
  fg: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<PartyTemplateFormComponent>,
    private fb: FormBuilder,
    @Optional() @Inject(MAT_DIALOG_DATA) public data: IPartyTemplate
  ) {
    this.createForm(data);
  }

  createForm(party: IPartyTemplate) {
    const currentDate = new Intl.DateTimeFormat('en');
    const theDate = currentDate.format();
    if (party.version_no === undefined) {
      party.version_no = 0;
    }
    const versionNo = Number(party.version_no) + 1;
    this.fg = this.fb.group({
      party_ref: [party.party_ref],
      client_ref: [party.client_ref],
      template_party_ref: [party.template_party_ref],
      party_short_name: [party.party_short_name],
      party_long_name: [party.party_long_name],
      version_no: versionNo,
      version_date: theDate,
      version_user: localStorage.getItem('USER_ID'),
    });
  }

  onCreate() {
    let data = this.fg.getRawValue();
    this.dialogRef.close({ event: 'Create', data });
  }

  onUpdate() {
    let data = this.fg.getRawValue();
    this.dialogRef.close({ event: 'Update', data });
  }

  onDelete() {
    let data = this.fg.getRawValue();
    this.dialogRef.close({ event: 'Delete', data });
  }

  closeDialog() {
    this.dialogRef.close({ event: 'Cancel' });
  }
}
