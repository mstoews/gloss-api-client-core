import { Component, Inject, Optional } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

export interface IPartyAddress {
  client_ref: string;
  party_ref: string;
  addr_type: string;
  contact_name: string;
  contact_title: string;
  addr_line1: string;
  addr_line2: string;
  addr_line3: string;
  addr_line4: string;
  addr_line5: string;
  addr_line6: string;
  post_code: string;
  int_dial_code: string;
  phone_no: string;
  fax_no: string;
  email: string;
  version_no: number;
  version_date: Date;
  version_user: string;
}

@Component({
  selector: 'app-address-form',
  template: `
    <h1 mat-dialog-title>Party Address Update</h1>
    <div mat-dialog-content>
      <form [formGroup]="formGroup" #myForm="ngForm">
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
            placeholder="Address Type"
            required
            formControlName="addr_type"
        /></mat-form-field>
        <mat-form-field>
          <input
            matInput
            placeholder="Contact Name"
            formControlName="contact_name"
        /></mat-form-field>
        <mat-form-field>
          <input
            matInput
            placeholder="Contact Title"
            formControlName="contact_title"
        /></mat-form-field>
        <mat-form-field>
          <input matInput placeholder="Address 1" formControlName="addr_line1"
        /></mat-form-field>
        <mat-form-field>
          <input matInput placeholder="Address 2" formControlName="addr_line2"
        /></mat-form-field>
        <mat-form-field>
          <input matInput placeholder="Address 3" formControlName="addr_line3"
        /></mat-form-field>
        <mat-form-field>
          <input matInput placeholder="Address 4" formControlName="addr_line4"
        /></mat-form-field>
        <mat-form-field>
          <input matInput placeholder="Address 5" formControlName="addr_line5"
        /></mat-form-field>
        <mat-form-field>
          <input matInput placeholder="Address 6" formControlName="addr_line6"
        /></mat-form-field>
        <mat-form-field>
          <input matInput placeholder="Postal Code" formControlName="post_code"
        /></mat-form-field>
        <mat-form-field>
          <input
            matInput
            placeholder="International Dial Code"
            formControlName="int_dial_code"
        /></mat-form-field>
        <mat-form-field>
          <input
            matInput
            placeholder="Contact Number."
            formControlName="phone_no"
        /></mat-form-field>
        <mat-form-field>
          <input matInput placeholder="Fax Number" formControlName="fax_no"
        /></mat-form-field>
        <mat-form-field>
          <input matInput placeholder="Email" formControlName="email"
        /></mat-form-field>
      </form>
    </div>
    <div mat-dialog-actions>
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
      <button mat-button (click)="closeDialog()" mat-flat-button color="warn">
        Cancel
      </button>
    </div>
  `,
})
export class PartyAddressFormComponent {
  formGroup: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<PartyAddressFormComponent>,
    private fb: FormBuilder,
    @Optional() @Inject(MAT_DIALOG_DATA) public data: IPartyAddress
  ) {
    this.createForm(data);
  }
  createForm(pa: IPartyAddress) {
    const currentDate = new Intl.DateTimeFormat('en');
    const theDate = currentDate.format();
    if (pa.version_no === undefined) {
      pa.version_no = 0;
    }
    const versionNo = Number(pa.version_no) + 1;
    this.formGroup = this.fb.group({
      party_ref: pa.party_ref,
      client_ref: pa.client_ref,
      addr_type: pa.addr_type,
      contact_name: pa.contact_name,
      contact_title: pa.contact_title,
      addr_line1: pa.addr_line1,
      addr_line2: pa.addr_line2,
      addr_line3: pa.addr_line3,
      addr_line4: pa.addr_line4,
      addr_line5: pa.addr_line5,
      addr_line6: pa.addr_line6,
      post_code: pa.post_code,
      int_dial_code: pa.int_dial_code,
      phone_no: pa.phone_no,
      fax_no: pa.fax_no,
      email: pa.email,
      version_no: versionNo,
      version_date: theDate,
      version_user: localStorage.getItem('USER_ID'),
    });
  }

  onCreate() {
    let data = this.formGroup.getRawValue();
    console.log('Create Swift with:', data);
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
