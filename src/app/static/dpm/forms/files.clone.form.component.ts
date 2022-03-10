import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-files-clone',
  template: `
    <h1 mat-dialog-title>Clone or Delete Party</h1>
    <div mat-dialog-content>
      <form [formGroup]="formGroup">
        <mat-form-field>
          <mat-label>Product Group</mat-label>
          <mat-select formControlName="product_group">
            <mat-option value="EQ">EQUITY</mat-option>
            <mat-option value="CB">CB</mat-option>
            <mat-option value="GB">Ippan Sai</mat-option>
          </mat-select>
        </mat-form-field>
      </form>
    </div>
    <div mat-dialog-actions>
      <button mat-button (click)="onCreate()" mat-flat-button color="primary">
        Create
      </button>
      <button mat-button (click)="closeDialog()" mat-flat-button color="warn">
        Cancel
      </button>
    </div>
  `,
})
export class FilesCloneFormComponent {
  formGroup: FormGroup;

  constructor(
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<FilesCloneFormComponent>
  ) {
    this.createForm();
  }

  createForm() {
    this.formGroup = this.fb.group({
      product_group: '',
    });
  }

  onCreate() {
    let data = this.formGroup.getRawValue();
    this.dialogRef.close({ event: 'Clone', data });
  }

  closeDialog() {
    this.dialogRef.close({ event: 'Cancel' });
  }
}
