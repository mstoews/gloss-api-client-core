import { Component, Inject, Optional } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

export interface IPartyRef {
  __typename: string;
  party_ref: string;
  active_ind: string;
  party_type: string;
  party_short_name: string;
  party_long_name: string;
  party_extra_long_name: string;
  version_no: string;
  version_date: Date;
  version_user: string;
}

@Component({
  selector: 'app-party-form-modal',
  template: `
  <h1 mat-dialog-title>Party Update</h1>
  <div mat-dialog-content>
  <form [formGroup]="formGroup"  class="form">
      <mat-form-field class="form-element"> <input matInput placeholder="Party Reference" formControlName="party_ref"/></mat-form-field>
      <mat-form-field class="form-element"> <input matInput placeholder="Party Type" formControlName="party_type"/></mat-form-field>
      <mat-form-field class="form-element"> <input matInput placeholder="Short Name" formControlName="party_short_name"/></mat-form-field>
      <mat-form-field class="form-element"> <input matInput placeholder="Long Name" formControlName="party_long_name"/></mat-form-field>
      <mat-form-field class="form-element"> <input matInput placeholder="Extra Long Name" formControlName="party_extra_long_name"/></mat-form-field>
      <mat-form-field class="form-element"> <input matInput placeholder="Version" formControlName="version_no"/></mat-form-field>
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


export class PartyFormModalComponent {
  formGroup: FormGroup;
  action: string;
  // tslint:disable-next-line: variable-name
  local_data: any;
  party: string;
  currentDate: Date;
  data: IPartyRef;

  constructor(
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<PartyFormModalComponent>,
    ) {
    console.log('new dialog with data ', this.data);
    this.createForm(this.data);
  }

  createForm(party: IPartyRef) {
    const currentDate = new Intl.DateTimeFormat('en');
    const theDate = currentDate.format();
    const versionNo = Number(party.version_no) + 1;
    this.formGroup = this.fb.group({
      party_ref: [party.party_ref],
      active_ind: 'A',
      party_type: [party.party_type],
      party_short_name: [party.party_short_name],
      party_long_name: [party.party_long_name],
      party_extra_long_name: [party.party_extra_long_name],
      version_no: versionNo,
      version_date: theDate,
      version_user: 'Admin'
    });
    this.formGroup.controls.party_ref.disable();
  }

  onCreate(){
    let data = this.formGroup.getRawValue();
  }

  onUpdate() {
    let data = this.formGroup.getRawValue();
  }
  onDelete() {
    let data = this.formGroup.getRawValue();
  }
  closeDialog() {
  }

}

