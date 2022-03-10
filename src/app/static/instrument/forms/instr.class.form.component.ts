import { Component, Inject, Optional } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Observable } from 'rxjs';


export type IPartyClass = {
  __typename?: 'PartyClassification';
  class_code: string;
  class_type: string;
  description: string;
  party_ref: string;
  user_def: string;
  version_date: string;
  version_no: string;
  version_user: string;
};


@Component({
  selector: 'app-party-classification',
  template: `
    <h1 mat-dialog-title>Classification Update</h1>
  <div mat-dialog-content>
  <form [formGroup]="formGroup"  class="form">
      <mat-form-field class="form-element"> <input matInput placeholder="Party Ref"   formControlName="party_ref"/></mat-form-field>
      <mat-form-field class="form-element"> <input matInput placeholder="Class Code"  formControlName="class_code"/></mat-form-field>
      <mat-form-field class="form-element"> <input matInput placeholder="Class Type"  formControlName="class_type"/></mat-form-field>
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
export class PartyClassificationFormComponent {
  formGroup: FormGroup;
  action: string;
  // tslint:disable-next-line: variable-name 
  local_data: any;
  party: string;
  today: Date;

  constructor(
    public dialogRef: MatDialogRef<PartyClassificationFormComponent>,
    private fb: FormBuilder,
    // @Optional() is used to prevent error if no data is passed
    @Optional() @Inject(MAT_DIALOG_DATA) public data: IPartyClass) {
    this.createForm(data);
    this.today = new Date();
  }

  createForm(party: IPartyClass) {
    const currentDate = new Intl.DateTimeFormat('en');
    const theDate = currentDate.format();
    const versionNo = Number(party.version_no) + 1;
    this.formGroup = this.fb.group({
      party_ref: [party.party_ref],
      active_ind: 'A',
      class_type: [party.class_type],
      class_code: [party.class_code],
      description: [party.description],
      user_def: [party.user_def],
      version_no: versionNo,
      version_date: this.today,
      version_user: 'ADMIN'
    });
    this.formGroup.controls.party_ref.disable();
    this.formGroup.controls.class_type.disable();
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

  closeDialog() {
    this.dialogRef.close({ event: 'Cancel' });
  }


}
