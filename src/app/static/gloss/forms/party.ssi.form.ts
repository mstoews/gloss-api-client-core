import { Component, Inject, Optional } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

export interface IPartySSI {
  party_ref: string;
  client_ref: string;
  account_name: string;
  account_no: string;
  active_ind: string;
  comms_service: string;
  dacc_ref: string;
  depo_ref: string;
  depot_alias: string;
  depot_descr: string;
  depot_type: string;
  ccy: string;
  description: string;
  version_no: number;
  version_date: Date;
  version_user: string;
  party_type: string;
}

@Component({
  selector: 'app-ssi-form',
  template: `
    <h1 mat-dialog-title>Party SSI Update</h1>
    <div mat-dialog-content>
      <form [formGroup]="formGroup" #myForm="ngForm">
        <mat-form-field>
          <input
            matInput
            placeholder="Party Reference"
            required
            maxlength="12"
            formControlName="party_ref"
        /></mat-form-field>
        <mat-form-field>
          <input matInput placeholder="Account" formControlName="account_name"
        /></mat-form-field>
        <mat-form-field>
          <input matInput placeholder="Account" formControlName="account_no"
        /></mat-form-field>
        <mat-form-field>
          <input matInput placeholder="Active" formControlName="active_ind"
        /></mat-form-field>
        <mat-form-field>
          <input
            matInput
            placeholder="Comms Service"
            formControlName="comms_service"
        /></mat-form-field>
        <mat-form-field>
          <input matInput placeholder="DaccRef" formControlName="dacc_ref"
        /></mat-form-field>
        <mat-form-field>
          <input matInput placeholder="Depo Ref" formControlName="depo_ref"
        /></mat-form-field>
        <mat-form-field>
          <input
            matInput
            placeholder="Depot Alias"
            required
            formControlName="depot_alias"
        /></mat-form-field>
        <mat-form-field>
          <input
            matInput
            placeholder="Depot Descr"
            formControlName="depot_descr"
        /></mat-form-field>
        <mat-form-field>
          <input matInput placeholder="Depot Type" formControlName="depot_type"
        /></mat-form-field>
        <mat-form-field>
          <input matInput placeholder="Ccy" formControlName="ccy"
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
export class PartySsiFormComponent {
  formGroup: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<PartySsiFormComponent>,
    private fb: FormBuilder,
    @Optional() @Inject(MAT_DIALOG_DATA) public data: IPartySSI
  ) {
    this.createForm(data);
  }

  createForm(ssi: IPartySSI) {
    const currentDate = new Intl.DateTimeFormat('en');
    const theDate = currentDate.format();
    if (ssi.version_no === undefined) {
      ssi.version_no = 0;
    }
    if (ssi.party_type === 'SECP') {
      this.formGroup.controls.dacc_ref.disable();
    }
    delete ssi.party_type;
    this.formGroup = this.fb.group({
      party_ref: [ssi.party_ref],
      client_ref: [ssi.client_ref],
      account_name: [ssi.account_name],
      account_no: [ssi.account_no],
      active_ind: [ssi.active_ind],
      comms_service: [ssi.comms_service],
      dacc_ref: [ssi.dacc_ref],
      depo_ref: [ssi.depo_ref],
      depot_alias: [ssi.depot_alias],
      depot_descr: [ssi.depot_descr],
      depot_type: [ssi.depot_type],
      ccy: [ssi.ccy],
      description: [ssi.description],
      version_no: [ssi.version_no],
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
