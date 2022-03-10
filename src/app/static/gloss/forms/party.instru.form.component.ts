import { Component, Inject, Optional } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

export interface IPartyInstr {
  party_ref: string;
  client_ref: string;
  instr_ref: string;
  instr_type: string;
  instr_ref_type: string;
  description: string;
  version_no: number;
  version_date: Date;
  version_user: string;
}

@Component({
  selector: 'app-party-instr-form',
  template: `
    <h1 mat-dialog-title>Instrument Update</h1>
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
            placeholder="Instrument Type"
            required
            formControlName="instr_type"
        /></mat-form-field>
        <mat-form-field>
          <input
            matInput
            placeholder="Instrument Ref Type"
            required
            formControlName="instr_ref_type"
        /></mat-form-field>
        <mat-form-field>
          <input
            matInput
            placeholder="Instrument Ref"
            required
            formControlName="instr_ref"
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
export class PartyInstrumentFormComponent {
  formGroup: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<PartyInstrumentFormComponent>,
    private fb: FormBuilder,
    @Optional() @Inject(MAT_DIALOG_DATA) public data: IPartyInstr
  ) {
    this.createForm(data);
  }

  createForm(pt: IPartyInstr) {
    const currentDate = new Intl.DateTimeFormat('en');
    const theDate = currentDate.format();
    if (pt.version_no === undefined) {
      pt.version_no = 0;
    }
    const versionNo = Number(pt.version_no) + 1;
    this.formGroup = this.fb.group({
      party_ref: [pt.party_ref],
      client_ref: [pt.client_ref],
      instr_type: [pt.instr_type],
      instr_ref: [pt.instr_ref],
      instr_ref_type: [pt.instr_ref_type],
      description: [pt.description],
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
