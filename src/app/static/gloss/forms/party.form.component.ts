import { Component, Inject, Optional } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

export interface IPartyRef {
  party_ref: string;
  client_ref: string;
  active_ind: string;
  party_type: string;
  party_short_name: string;
  party_long_name: string;
  party_extra_long_name: string;
  has_swift_config: string;
  has_netting_config: string;
  version_no: number;
  version_date: Date;
  version_user: string;
}

@Component({
  selector: 'app-party-form',
  template: `
    <h1 mat-dialog-title>Party Update</h1>
    <div mat-dialog-content>
      <form [formGroup]="formGroup">
        <mat-form-field>
          <input
            matInput
            placeholder="Party Reference"
            formControlName="party_ref"
        /></mat-form-field>
        <mat-form-field>
          <input matInput placeholder="Party Type" formControlName="party_type"
        /></mat-form-field>
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
        <mat-form-field>
          <input
            matInput
            placeholder="Extra Long Name"
            formControlName="party_extra_long_name"
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
        (click)="onDelete()"
        [mat-dialog-close]="data"
        mat-flat-button
        color="primary"
      >
        Delete
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
      <button mat-button (click)="closeDialog()" mat-flat-button color="warn">
        Cancel
      </button>
    </div>
  `,
})
export class PartyFormComponent {
  formGroup: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<PartyFormComponent>,
    private fb: FormBuilder,
    @Optional() @Inject(MAT_DIALOG_DATA) public data: IPartyRef
  ) {
    this.createForm(data);
  }

  createForm(party: IPartyRef) {
    const currentDate = new Intl.DateTimeFormat('en');
    const theDate = currentDate.format();
    if (party.version_no === undefined) {
      party.version_no = 0;
    }
    const versionNo = Number(party.version_no) + 1;
    this.formGroup = this.fb.group({
      party_ref: [party.party_ref],
      client_ref: [party.client_ref],
      active_ind: 'A',
      party_type: [party.party_type],
      party_short_name: [party.party_short_name],
      party_long_name: [party.party_long_name],
      party_extra_long_name: [party.party_extra_long_name],
      has_swift_config: [party.has_swift_config],
      has_netting_config: [party.has_netting_config],
      version_no: versionNo,
      version_date: theDate,
      version_user: localStorage.getItem('USER_ID'),
    });
    // this.formGroup.controls.party_ref.disable();
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
