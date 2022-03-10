import { Component, Inject, Optional } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { PartyService } from 'app/services/party.service';

export interface IPartyClassAssoc {
  client_ref: string;
  party_ref: string;
  class_assoc_code: string;
  code_type: string;
  class_1: number;
  code_1: string;
  class_2: number;
  code_2: string[];
  applied: boolean;
  version_date: Date;
  version_no: number;
  version_user: string;
}

@Component({
  selector: 'app-party-classassoc-form',
  template: `
  <h1 mat-dialog-title>Party ClassAssoc Update</h1>
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
          <input
            matInput
            placeholder="class_assoc_code"
            required
            formControlName="class_assoc_code"
        /></mat-form-field>
        <mat-form-field>
          <input
            matInput
            placeholder="code_type"
            required
            formControlName="code_type"
        /></mat-form-field>
        <mat-form-field>
          <input
            matInput
            placeholder="class_1"
            required
            formControlName="class_1"
        /></mat-form-field>
        <mat-form-field>
          <input
            matInput
            placeholder="code_1"
            required
            formControlName="code_1"
        /></mat-form-field>
        <mat-form-field>
          <input
            matInput
            placeholder="class_2"
            required
            formControlName="class_2"
            (blur)="classUpdated($event)"
        /></mat-form-field>
        <mat-form-field>
            <mat-select placeholder="Code 2" formControlName="code_2">
              <mat-option
                *ngFor="let glossCode of glossCodes"
                [value]="glossCode.p2000Code"
              >
                {{ glossCode.codeShortDesc }}
              </mat-option>
            </mat-select>
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


export class ClassAssocFormComponent {
  formGroup: FormGroup;
  glossCodes: any;

  constructor(
    public dialogRef: MatDialogRef<ClassAssocFormComponent>,
    private fb: FormBuilder,
    private partyService: PartyService,
    // @Optional() is used to prevent error if no data is passed
    @Optional() @Inject(MAT_DIALOG_DATA) public data: IPartyClassAssoc) {
    this.createForm(data);
  }

  createForm(party: IPartyClassAssoc) {
    const currentDate = new Intl.DateTimeFormat('en');
    this.partyService
      .getGlossCodeByClass(Number(party.class_2))
      .subscribe({
        next: (value) => {
          this.glossCodes = value;
        },
        error: (err) => console.log(`ERROR ${err.message}`),
      });
    const theDate = currentDate.format();
    if (party.version_no === undefined) {
      party.version_no = 0;
    }
    const versionNo = Number(party.version_no) + 1;
    this.formGroup = this.fb.group({
      client_ref: [party.client_ref],
      party_ref: [party.party_ref],
      class_assoc_code: [party.class_assoc_code],
      code_type: [party.code_type],
      class_1: [party.class_1],
      code_1: [party.code_1],
      class_2: [party.class_2],
      code_2: [party.code_2],
      applied: [false],
      version_no: versionNo,
      version_date: theDate,
      version_user: localStorage.getItem('USER_ID')
    });
    this.formGroup.controls.party_ref.disable();
    this.formGroup.controls.code_1.disable();
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

  classUpdated(event) {
    this.partyService
      .getGlossCodeByClass(Number(event.target.value))
      .subscribe((value) => {
        this.formGroup.patchValue((this.glossCodes = value));
      });
  }

}
