import { Component, Inject, Optional } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

export type IPartyFlag = {
  party_ref: string;
  client_ref: string;
  flag_type: number;
  flag_code: string;
  description: string;
  version_date: Date;
  version_no: number;
  version_user: string;
};

@Component({
  selector: 'app-party-flag-form',
  template: `
    <h1 mat-dialog-title>Flag Update</h1>
    <div mat-dialog-content>
      <form [formGroup]="formGroup" #myForm="ngForm">
        <mat-form-field>
          <input
            matInput
            placeholder="Party Ref"
            required
            maxlength="12"
            formControlName="party_ref"
        /></mat-form-field>
        <mat-form-field>
          <input
            matInput
            placeholder="Flag Type"
            required
            formControlName="flag_type"
        /></mat-form-field>
        <mat-form-field>
          <input
            matInput
            placeholder="Flag Code"
            required
            formControlName="flag_code"
        /></mat-form-field>
        <mat-form-field>
          <input
            matInput
            placeholder="Description"
            formControlName="description"
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
export class PartyFlagFormComponent {
  formGroup: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<PartyFlagFormComponent>,
    private fb: FormBuilder,
    @Optional() @Inject(MAT_DIALOG_DATA) public data: IPartyFlag
  ) {
    this.createForm(data);
  }

  createForm(party: IPartyFlag) {
    const currentDate = new Intl.DateTimeFormat('en');
    const theDate = currentDate.format();
    if (party.version_no === undefined) {
      party.version_no = 0;
    }
    const versionNo = Number(party.version_no) + 1;
    this.formGroup = this.fb.group({
      party_ref: [party.party_ref],
      client_ref: [party.client_ref],
      flag_type: [party.flag_type],
      flag_code: [party.flag_code],
      description: [party.description],
      version_no: versionNo,
      version_date: theDate,
      version_user: localStorage.getItem('USER_ID'),
    });
  }

  onCreate() {
    let data = this.formGroup.getRawValue();
    data.flag_type = Number(data.flag_type);
    this.dialogRef.close({ event: 'Create', data });
  }

  onUpdate() {
    let data = this.formGroup.getRawValue();
    data.flag_type = Number(data.flag_type);
    this.dialogRef.close({ event: 'Update', data });
  }

  onDelete() {
    let data = this.formGroup.getRawValue();
    this.dialogRef.close({ event: 'Delete', data });
  }

  closeDialog() {
    this.dialogRef.close({ event: 'Cancel' });
  }
}
