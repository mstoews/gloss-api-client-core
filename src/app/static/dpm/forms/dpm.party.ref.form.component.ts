import { Component, Inject, Optional } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { PartyService } from 'app/services/party.service';

export interface IDpmPartyExtRef {
  company_ref: string;
  party_ref: string;
  client_ref: string;
  component_type: string;
  party_ext_ref_type: string;
  party_ext_ref: string;
  description: string;
  version_no: number;
  version_date: Date;
  version_user: string;
}

@Component({
  selector: 'app-dpmref-from',
  template: `
    <div *ngIf="loading === true">
      <mat-spinner></mat-spinner>
    </div>
    <div *ngIf="loading === false">
      <h1 mat-dialog-title>Dpm Party Reference Update</h1>
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
            <mat-select
              placeholder="Ext Ref Type"
              formControlName="party_ext_ref_type"
            >
              <mat-option
                *ngFor="let dpmCode of dpmCodes4101"
                [value]="dpmCode.code"
              >
                {{ dpmCode.descr_en }}
              </mat-option>
            </mat-select>
          </mat-form-field>
          <mat-form-field>
            <input
              matInput
              placeholder="Party Ext Ref"
              required
              formControlName="party_ext_ref"
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
export class DpmPartyRefFormComponent {
  formGroup: FormGroup;
  dpmCodes4101: any;
  loading = true;

  constructor(
    public dialogRef: MatDialogRef<DpmPartyRefFormComponent>,
    private fb: FormBuilder,
    private partyService: PartyService,
    // @Optional() is used to prevent error if no data is passed
    @Optional() @Inject(MAT_DIALOG_DATA) public data: IDpmPartyExtRef
  ) {
    this.partyService.getDpmCodeByClass(data.component_type,4101).subscribe({
      next: (value) => {
        this.dpmCodes4101 = value;
        this.createForm(data);
      },
      error: (err) => console.log(`ERROR ${err.message}`),
    });
  }

  createForm(party: IDpmPartyExtRef) {
    this.loading = false;
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
      party_ext_ref: [party.party_ext_ref],
      description: [party.description],
      party_ext_ref_type: [party.party_ext_ref_type],
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
