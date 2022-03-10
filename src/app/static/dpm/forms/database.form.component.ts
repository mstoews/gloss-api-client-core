import { Component, Inject, Optional } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

export interface IDatabase {
  client_ref: string;
  component_type: string;
  database_type: string;
  database_code: string;
  descr: string;
  sql_db_code: string;
  holiday_id_p2k: string;
  version_no: number;
  version_date: Date;
  version_user: string;
}

@Component({
  selector: 'app-database-form',
  template: `
    <h1 mat-dialog-title>Database Update</h1>
    <div mat-dialog-content>
      <form [formGroup]="formGroup" #myForm="ngForm">
        <mat-form-field>
          <input
            matInput
            placeholder="database_type"
            formControlName="database_type"
        /></mat-form-field>
        <mat-form-field>
          <input
            matInput
            placeholder="database_code"
            required
            formControlName="database_code"
        /></mat-form-field>
        <mat-form-field>
          <input matInput placeholder="Description" formControlName="descr" />
        </mat-form-field>
        <mat-form-field>
          <input
            matInput
            placeholder="sql_db_code"
            required
            formControlName="sql_db_code"
        /></mat-form-field>
        <mat-form-field>
          <input
            matInput
            placeholder="holiday_id_p2k"
            required
            formControlName="holiday_id_p2k"
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
export class DatabaseFormComponent {
  formGroup: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<DatabaseFormComponent>,
    private fb: FormBuilder,
    // @Optional() is used to prevent error if no data is passed
    @Optional() @Inject(MAT_DIALOG_DATA) public data: IDatabase
  ) {
    this.createForm(data);
  }

  createForm(database: IDatabase) {
    const currentDate = new Intl.DateTimeFormat('en');
    const theDate = currentDate.format();
    if (database.version_no === undefined) {
      database.version_no = 0;
    }
    const versionNo = Number(database.version_no) + 1;
    this.formGroup = this.fb.group({
      client_ref: [database.client_ref],
      component_type: [database.component_type],
      database_type: [database.database_type],
      database_code: [database.database_code],
      descr: [database.descr],
      sql_db_code: [database.sql_db_code],
      holiday_id_p2k: [database.holiday_id_p2k],
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
