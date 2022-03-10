import { Component, Inject, Optional } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';


export type IPartyFlag = {
  __typename?: 'PartyFlag';
  party_ref: string,
  flag_type: string,
  flag_code: string,
  user_def: string,
  description: string,
  version_date: Date,
  version_no: number,
  version_user: string,
};


@Component({
  selector: 'app-party-classification',
  template: `
    <h1 mat-dialog-title>Classification Update</h1>
  <div mat-dialog-content>
  <form [formGroup]="formGroup"  class="form">
      <mat-form-field class="form-element"> <input matInput placeholder="Party Ref"   formControlName="party_ref"/></mat-form-field>
      <mat-form-field class="form-element"> <input matInput placeholder="Flag Type"  formControlName="flag_type"/></mat-form-field>
      <mat-form-field class="form-element"> <input matInput placeholder="Flag Code"  formControlName="flag_code"/></mat-form-field>
      <mat-form-field class="form-element"> <input matInput placeholder="Description" formControlName="description"/></mat-form-field>
      <mat-form-field class="form-element"> <input matInput placeholder="User Defined"formControlName="user_def"/></mat-form-field>
      <mat-form-field class="form-element"> <input matInput placeholder="Version"     formControlName="version_no"/></mat-form-field>
  </form>
  </div>
  <div mat-dialog-actions>
    <button mat-button (click)="onUpdate()" [mat-dialog-close]="data" mat-flat-button color="primary">Update</button>
    <button mat-button (click)="onCreate()" [mat-dialog-close]="data" mat-flat-button color="primary">Insert</button>
    <button mat-button (click)="onDelete()" [mat-dialog-close]="data" mat-flat-button color="primary">Delete</button>
    <button mat-button (click)="closeDialog()" mat-flat-button color="warn">Cancel</button>
  </div>
  `,
   styleUrls: ['./forms.component.scss'],
})
export class PartyFlagFormComponent {
  formGroup: FormGroup;
  action: string;
  party: string;

  constructor(
    public dialogRef: MatDialogRef<PartyFlagFormComponent>,
    private fb: FormBuilder,
    // @Optional() is used to prevent error if no data is passed
    @Optional() @Inject(MAT_DIALOG_DATA) public data: IPartyFlag) {
    this.createForm(data);
  }

  createForm(party: IPartyFlag) {
    const currentDate = new Intl.DateTimeFormat('en');
    const theDate = currentDate.format();
    const versionNo = Number(party.version_no) + 1;
    this.formGroup = this.fb.group({
      party_ref: [party.party_ref],
      flag_type: [party.flag_type],
      flag_code: [party.flag_code],
      description: [party.description],
      active_ind: 'A',
      version_no: versionNo,
      version_date: theDate,
      version_user: 'ADMIN'
    });
    this.formGroup.controls.party_ref.disable();
    this.formGroup.controls.flag_type.disable();
  }

  onCreate(){
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

  closeDialog(){
    this.dialogRef.close({event: 'Cancel'});
  }

}
