import { Component, Inject, Optional } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { PartyService } from 'app/services/party.service';

export interface IDpmPartyFlag {
  company_ref: string;
  party_ref: string;
  client_ref: string;
  component_type: string;
  party_flag_type: string;
  party_flag: string;
  description: string;
  version_no: number;
  version_date: Date;
  version_user: string;
}

@Component({
  selector: 'app-dpmparty-flag-form',
  template: `
    <div *ngIf="loading === true">
      <mat-spinner></mat-spinner>
    </div>
    <div *ngIf="loading === false">
      <h1 mat-dialog-title>Dpm Party Flag Update</h1>
      <div mat-dialog-content>
        <form [formGroup]="formGroup" #myForm="ngForm">
          <mat-form-field>
            <input
              matInput
              placeholder="Company Reference"
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
              placeholder="Flag Type"
              required
              formControlName="party_flag_type"
              (blur)="flagUpdated($event)"
          /></mat-form-field>
          <mat-form-field>
            <mat-select placeholder="Flag Code" formControlName="party_flag">
              <mat-option
                *ngFor="let dpmCode of dpmCodes"
                [value]="dpmCode.code"
              >
                {{ dpmCode.descr_en }}
              </mat-option>
            </mat-select>
          </mat-form-field>
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
          [mat-dialog-close]="data"
          [disabled]="!myForm.form.valid"
          mat-flat-button
          color="primary"
        >
          Insert
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
export class DpmPartyFlagFormComponent {
  formGroup: FormGroup;
  dpmCodes: any;
  loading = true;

  constructor(
    public dialogRef: MatDialogRef<DpmPartyFlagFormComponent>,
    private fb: FormBuilder,
    private partyService: PartyService,
    // @Optional() is used to prevent error if no data is passed
    @Optional() @Inject(MAT_DIALOG_DATA) public data: IDpmPartyFlag
  ) {
    this.createForm(data);
  }

  createForm(party: IDpmPartyFlag) {
    this.loading = false;
    this.partyService
      .getDpmCodeByClass(party.component_type,Number(party.party_flag_type))
      .subscribe({
        next: (value) => {
          this.dpmCodes = value;
        },
        error: (err) => console.log(`ERROR ${err.message}`),
      });
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
      party_flag_type: [party.party_flag_type],
      party_flag: [party.party_flag],
      description: [party.description],
      version_no: versionNo,
      version_date: theDate,
      version_user: localStorage.getItem('USER_ID'),
    });
  }

  flagUpdated(event) {
    this.partyService
      .getDpmCodeByClass('JASDEC',Number(event.target.value))
      .subscribe((value) => {
        this.formGroup.patchValue((this.dpmCodes = value));
      });
  }

  onCreate() {
    let data = this.formGroup.getRawValue();
    data.party_flag_type = Number(data.party_flag_type);
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
