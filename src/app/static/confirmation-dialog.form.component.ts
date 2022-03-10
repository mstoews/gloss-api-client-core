import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'confirmation-dialog',
  template: `
    <h1 mat-dialog-title>Are you sure you want to push?</h1>
    <div mat-dialog-actions>
      <button mat-button (click)="onConfirm()" mat-flat-button color="primary">
        Confirm
      </button>
      <button mat-button (click)="closeDialog()" mat-flat-button color="warn">
        Cancel
      </button>
    </div>
  `,
})
export class ConfirmationDialog {
  constructor(public dialogRef: MatDialogRef<ConfirmationDialog>) { }

  onConfirm() {
    this.dialogRef.close({ event: 'Confirm' });
  }

  closeDialog() {
    this.dialogRef.close({ event: 'Cancel' });
  }
}
