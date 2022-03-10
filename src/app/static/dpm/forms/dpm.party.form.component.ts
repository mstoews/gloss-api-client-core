import { Component, Inject, Optional } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

export interface IDpmPartyRef {
  company_ref: string;
  party_ref: string;
  client_ref: string;
  component_type: string;
  party_type: string;
  inactive: string;
  version_no: number;
  version_date: Date;
  version_user: string;
}

@Component({
  selector: 'app-dpmparty-form',
  template: `
    <h1 mat-dialog-title>Dpm Party Update</h1>
    <div mat-dialog-content>
      <form [formGroup]="formGroup" #myForm="ngForm">
        <mat-form-field>
          <input
            matInput
            placeholder="Company Reference"
            required
            formControlName="company_ref"
        /></mat-form-field>
        <mat-form-field>
          <input
            matInput
            placeholder="Party Ref"
            required
            formControlName="party_ref"
        /></mat-form-field>
        <mat-form-field>
          <input
            matInput
            placeholder="Party Type"
            required
            formControlName="party_type"
        /></mat-form-field>
        <mat-form-field>
          <input
            matInput
            placeholder="Inactive"
            required
            formControlName="inactive"
        /></mat-form-field>
      </form>
    </div>
    <div mat-dialog-actions>
      <button
        mat-button
        (click)="onCreate()"
        [mat-dialog-close]="data"
        [disabled]="!myForm.form.valid"
        mat-flat-button
        color="primary"
      >
        Insert
      </button>
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
      <button
        mat-button
        (click)="onDelete()"
        [mat-dialog-close]="data"
        [disabled]="!myForm.form.valid"
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
export class DpmPartyFormComponent {
  formGroup: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<DpmPartyFormComponent>,
    private fb: FormBuilder,
    // @Optional() is used to prevent error if no data is passed
    @Optional() @Inject(MAT_DIALOG_DATA) public data: IDpmPartyRef
  ) {
    this.createForm(data);
  }

  createForm(party: IDpmPartyRef) {
    const currentDate = new Intl.DateTimeFormat('en');
    const theDate = currentDate.format();
    if (party.version_no === undefined) {
      party.version_no = 0;
    }
    const versionNo = Number(party.version_no) + 1;
    this.formGroup = this.fb.group({
      company_ref: [party.company_ref],
      party_ref: [party.party_ref],
      client_ref: [party.client_ref],
      component_type: [party.component_type],
      party_type: [party.party_type],
      inactive: [party.inactive],
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
