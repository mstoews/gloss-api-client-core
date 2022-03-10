import { Component, Inject, Optional } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

export interface IPartyDate {
  client_ref: string;
  party_ref: string;
  date_type: string;
  date: string;
  time: string;
  version_no: number;
  version_date: Date;
  version_user: string;
}

@Component({
  selector: 'app-date-form',
  template: `
    <h1 mat-dialog-title>Party Date Update</h1>
    <div mat-dialog-content>
      <form [formGroup]="formGroup">
        <mat-form-field>
          <input
            matInput
            placeholder="Party Reference"
            required
            formControlName="party_ref"
        /></mat-form-field>
        <mat-form-field>
          <input
            matInput
            placeholder="Type"
            required
            formControlName="date_type"
        /></mat-form-field>
        <mat-form-field>
          <input
            matInput
            type="date"
            placeholder="Date"
            required
            formControlName="date"
        /></mat-form-field>
        <mat-form-field>
          <input matInput placeholder="Time" required formControlName="time"
        /></mat-form-field>
      </form>
    </div>
    <div mat-dialog-actions>
      <button
        mat-button
        (click)="onUpdate()"
        [mat-dialog-close]="data"
        mat-flat-button
        color="primary"
      >
        Update
      </button>
      <button
        mat-button
        (click)="onCreate()"
        [mat-dialog-close]="data"
        mat-flat-button
        color="primary"
      >
        Insert
      </button>
      <button
        mat-button
        (click)="onDelete()"
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
export class PartyDateFormComponent {
  formGroup: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<PartyDateFormComponent>,
    private fb: FormBuilder,
    @Optional() @Inject(MAT_DIALOG_DATA) public data: IPartyDate
  ) {
    this.createForm(data);
  }
  createForm(pd: IPartyDate) {
    const currentDate = new Intl.DateTimeFormat('en');
    const theDate = currentDate.format();
    if (pd.version_no === undefined) {
      pd.version_no = 0;
    }
    const versionNo = Number(pd.version_no) + 1;
    this.formGroup = this.fb.group({
      party_ref: [pd.party_ref],
      client_ref: [pd.client_ref],
      date_type: [pd.date_type],
      date: [pd.date],
      time: [pd.time],
      version_no: versionNo,
      version_date: theDate,
      version_user: localStorage.getItem('USER_ID'),
    });
  }

  onCreate() {
    let data = this.formGroup.getRawValue();
    this.dialogRef.close({ event: 'Create', data });
  }

  onUpdate() {
    let data = this.formGroup.getRawValue();
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
