import { Component, Inject, Optional } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { PartyService } from 'app/services/party.service';

export interface IDpmAccountRef {
  company_ref: string;
  party_ref: string;
  client_ref: string;
  component_type: string;
  account_no: string;
  account_type: string;
  inactive: string;
  version_no: number;
  version_date: Date;
  version_user: string;
}

@Component({
  selector: 'app-dpmaccount-form',
  template: `
    <div *ngIf="loading === true">
      <mat-spinner></mat-spinner>
    </div>
    <div *ngIf="loading === false">
      <h1 mat-dialog-title>Dpm Account Update</h1>
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
              placeholder="Account No"
              required
              formControlName="account_no"
          /></mat-form-field>
          <mat-form-field>
            <mat-select
              placeholder="Account Type"
              formControlName="account_type"
            >
              <mat-option
                *ngFor="let dpmCode of dpmCodes4300"
                [value]="dpmCode.code"
              >
                {{ dpmCode.descr_en }}
              </mat-option>
            </mat-select>
          </mat-form-field>
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
    </div>
  `,
})
export class DpmAccountFormComponent {
  formGroup: FormGroup;
  dpmCodes4300: any;
  loading = true;

  constructor(
    public dialogRef: MatDialogRef<DpmAccountFormComponent>,
    private fb: FormBuilder,
    private partyService: PartyService,
    // @Optional() is used to prevent error if no data is passed
    @Optional() @Inject(MAT_DIALOG_DATA) public data: IDpmAccountRef
  ) {
    this.partyService.getDpmCodeByClass(data.component_type,4300).subscribe({
      next: (value) => {
        this.dpmCodes4300 = value;
        this.createForm(data);
      },
      error: (err) => console.log(`ERROR ${err.message}`),
    });
  }

  createForm(account: IDpmAccountRef) {
    this.loading = false;
    const currentDate = new Intl.DateTimeFormat('en');
    const theDate = currentDate.format();
    if (account.version_no === undefined) {
      account.version_no = 0;
    }
    const versionNo = Number(account.version_no) + 1;
    this.formGroup = this.fb.group({
      company_ref: [account.company_ref],
      party_ref: [account.party_ref],
      client_ref: [account.client_ref],
      component_type: [account.component_type],
      account_no: [account.account_no],
      account_type: [account.account_type],
      inactive: [account.inactive],
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
