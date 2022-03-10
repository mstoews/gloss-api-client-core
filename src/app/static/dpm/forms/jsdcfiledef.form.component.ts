import { Component, Inject, Optional } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

export interface IJsdcFileDef {
  client_ref: string;
  component_type: string;
  file_name: string;
  data_rec_type_len: number;
  db_code: string;
  file_desc: string;
  file_diff: string;
  file_proc_type: string;
  multi_basis_date: string;
  proc_status_check: string;
  proc_status_pos: number;
  proc_status_value: string;
  rec_len: number;
  required_file_name: string;
  transfer_type: string;
  product_group: string;
  version_no: number;
  version_date: Date;
  version_user: string;
}

@Component({
  selector: 'app-jsdcfiledef-form',
  template: `
    <h1 mat-dialog-title>Jsdcfiledef Update</h1>
    <div mat-dialog-content>
      <form [formGroup]="formGroup" #myForm="ngForm">
        <mat-form-field>
          <input matInput placeholder="file_name" formControlName="file_name" />
        </mat-form-field>
        <mat-form-field>
          <input
            matInput
            placeholder="transfer_type"
            formControlName="transfer_type"
        /></mat-form-field>
        <mat-form-field>
          <input matInput placeholder="rec_len" formControlName="rec_len" />
        </mat-form-field>
        <mat-form-field>
          <input
            matInput
            placeholder="data_rec_type_len"
            formControlName="data_rec_type_len"
        /></mat-form-field>
        <mat-form-field>
          <input matInput placeholder="file_diff" formControlName="file_diff" />
        </mat-form-field>
        <mat-form-field>
          <input
            matInput
            placeholder="proc_status_check"
            formControlName="proc_status_check"
        /></mat-form-field>
        <mat-form-field>
          <input
            matInput
            placeholder="proc_status_pos"
            formControlName="proc_status_pos"
        /></mat-form-field>
        <mat-form-field>
          <input
            matInput
            placeholder="proc_status_value"
            formControlName="proc_status_value"
        /></mat-form-field>
        <mat-form-field>
          <input
            matInput
            placeholder="file_proc_type"
            formControlName="file_proc_type"
        /></mat-form-field>
        <mat-form-field>
          <input
            matInput
            placeholder="multi_basis_date"
            formControlName="multi_basis_date"
        /></mat-form-field>
        <mat-form-field>
          <input
            matInput
            placeholder="required_file_name"
            formControlName="required_file_name"
        /></mat-form-field>
        <mat-form-field>
          <input matInput placeholder="db_code" formControlName="db_code" />
        </mat-form-field>
        <mat-form-field>
          <input matInput placeholder="file_desc" formControlName="file_desc" />
        </mat-form-field>
      </form>
    </div>
    <div mat-dialog-actions>
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
  `,
})
export class JsdcFileDefFormComponent {
  formGroup: FormGroup;
  constructor(
    public dialogRef: MatDialogRef<JsdcFileDefFormComponent>,
    private fb: FormBuilder,
    @Optional() @Inject(MAT_DIALOG_DATA) public data: IJsdcFileDef
  ) {
    this.createForm(data);
  }

  createForm(jsdcfiledef: IJsdcFileDef) {
    const currentDate = new Intl.DateTimeFormat('en');
    const theDate = currentDate.format();
    if (jsdcfiledef.version_no === undefined) {
      jsdcfiledef.version_no = 0;
    }
    const versionNo = Number(jsdcfiledef.version_no) + 1;
    this.formGroup = this.fb.group({
      client_ref: [jsdcfiledef.client_ref],
      component_type: [jsdcfiledef.component_type],
      file_name: [jsdcfiledef.file_name],
      transfer_type: [jsdcfiledef.transfer_type],
      rec_len: [jsdcfiledef.rec_len],
      data_rec_type_len: [jsdcfiledef.data_rec_type_len],
      file_diff: [jsdcfiledef.file_diff],
      proc_status_check: [jsdcfiledef.proc_status_check],
      proc_status_pos: [jsdcfiledef.proc_status_pos],
      proc_status_value: [jsdcfiledef.proc_status_value],
      file_proc_type: [jsdcfiledef.file_proc_type],
      multi_basis_date: [jsdcfiledef.multi_basis_date],
      required_file_name: [jsdcfiledef.required_file_name],
      db_code: [jsdcfiledef.db_code],
      file_desc: [jsdcfiledef.file_desc],
      product_group: [jsdcfiledef.product_group],
      version_no: versionNo,
      version_date: theDate,
      version_user: localStorage.getItem('USER_ID'),
    });
  }

  onCreate() {
    let data = this.formGroup.getRawValue();
    data.rec_len = Number(data.rec_len);
    data.data_rec_type_len = Number(data.data_rec_type_len);
    data.proc_status_pos = Number(data.proc_status_pos);
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
