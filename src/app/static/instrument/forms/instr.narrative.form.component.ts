import { Component, Inject, Optional } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

/*
 create table party_narrative
 (
	party_ref varchar(12) not null,
	narr_type varchar(4) not null,
	narrative varchar(255),
	user_def varchar,
	description varchar(40),
	version_date date default now(),
	version_no integer default 1,
	version_user varchar(12) default USER,
	constraint party_narrative_pkey
		primary key (party_ref, narr_type)
);
alter table party_narrative owner to postgres;
*/

export interface IPartyRef {
  party_ref: string;
  narr_type: string;
  narrative: string;
  user_def: string;
  description: string;
  version_no: string;
  version_date: Date;
  version_user: string;
}

@Component({
  selector: 'app-party-from',
  template: `
  <h1 mat-dialog-title>Party Update</h1>
  <div mat-dialog-content>
  <form [formGroup]="formGroup"  class="form">
      <mat-form-field class="form-element"> <input matInput placeholder="Party Reference" formControlName="party_ref"/></mat-form-field>
      <mat-form-field class="form-element"> <input matInput placeholder="Narrative Type" formControlName="narr_type"/></mat-form-field>
      <mat-form-field class="form-element"> <input matInput placeholder="Narrative" formControlName="narrative"/></mat-form-field>
      <mat-form-field class="form-element"> <input matInput placeholder="User Defined" formControlName="user_def"/></mat-form-field>
      <mat-form-field class="form-element"> <input matInput placeholder="Description" formControlName="description"/></mat-form-field>
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


export class PartyNarrativeFormComponent {
  formGroup: FormGroup;
  action: string;
  // tslint:disable-next-line: variable-name
  local_data: any;
  party: string;
  currentDate: Date;

  constructor(
    public dialogRef: MatDialogRef<PartyNarrativeFormComponent>,
    private fb: FormBuilder,
    // @Optional() is used to prevent error if no data is passed
    @Optional() @Inject(MAT_DIALOG_DATA) public data: IPartyRef) {
    console.log('new dialog with data ', data);
    this.createForm(data);
  }

  createForm(party: IPartyRef) {
    const currentDate = new Intl.DateTimeFormat('en');
    const theDate = currentDate.format();
    const versionNo = Number(party.version_no) + 1;
    this.formGroup = this.fb.group({
      party_ref: [party.party_ref],
      active_ind: 'A',
      narr_type: [party.narr_type],
      narrative: [party.narrative],
      description: [party.description],
      version_no: versionNo,
      version_date: theDate,
      version_user: 'ADMIN'
    });
    this.formGroup.controls.party_ref.disable();
    this.formGroup.controls.narr_type.disable();
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

