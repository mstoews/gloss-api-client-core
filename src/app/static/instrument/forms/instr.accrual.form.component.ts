import { Component, Inject, Optional } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from 'app/services/auth.service';

/*
create table party_assoc
(
	party_ref varchar(12) not null,
	assoc_type varchar(4) not null,
	assoc_party_ref varchar(12),
	user_def varchar(1),
	description  varchar(40),
	version_date date,
	version_no integer,
	version_user varchar(12),
	constraint party_assoc_pkey
		primary key (party_ref, assoc_type)
);
alter table party_assoc owner to postgres;
*/

export interface IPartyAssoc {
  __typename: string;
  party_ref: string;
  assoc_type: string;
  assoc_party_ref: string;
  user_def: string;
  description: string;
  version_no: string;
  version_date: Date;
  version_user: string;
}

@Component({
  selector: 'app-party-from',
  template: `
  <h1 mat-dialog-title>Association Update</h1>
  <div mat-dialog-content>
  <form [formGroup]="formGroup"  class="form">
      <mat-form-field class="form-element"> <input readonly="true" matInput placeholder="Party Reference (read only)" formControlName="party_ref"/></mat-form-field>
      <mat-form-field class="form-element"> <input matInput placeholder="Associate Type" formControlName="assoc_type"/></mat-form-field>
      <mat-form-field class="form-element"> <input matInput placeholder="Associate Type" formControlName="assoc_party_ref"/></mat-form-field>
      <mat-form-field class="form-element"> <input matInput placeholder="Description" formControlName="description"/></mat-form-field>
      <mat-form-field class="form-element"> <input readonly="true" matInput placeholder="User Defined (read only)" formControlName="user_def"/></mat-form-field>
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


export class PartyAssocFormComponent {
  formGroup: FormGroup;
  action: string;
  // tslint:disable-next-line: variable-name
  local_data: any;
  party: string;
  currentDate: Date;
  labelPosition: 'N' | 'Y' = 'N';

  constructor(
    public dialogRef: MatDialogRef<PartyAssocFormComponent>,
    private fb: FormBuilder,
    private afAuth: AuthService,
    // @Optional() is used to prevent error if no data is passed
    @Optional() @Inject(MAT_DIALOG_DATA) public data: IPartyAssoc) {
    console.log('new dialog with data ', data);
    this.createForm(data);
  }

  createForm(party: IPartyAssoc) {
    const currentDate = new Intl.DateTimeFormat('en');
    const theDate = currentDate.format();
    const versionNo = Number(party.version_no) + 1;
    this.formGroup = this.fb.group({
      party_ref: [party.party_ref],
      active_ind: 'A',
      assoc_type: [party.assoc_type],
      assoc_party_ref: [party.assoc_party_ref],
      user_def: [party.user_def],
      description: [party.description],
      version_no: versionNo,
      version_date: theDate,
      version_user: 'ADMIN'
    });
    this.formGroup.controls.party_ref.disable();
    this.formGroup.controls.assoc_type.disable();

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

