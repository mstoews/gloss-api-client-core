import { Component, Inject, Optional } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder, FormGroup} from '@angular/forms';

export interface IPartyExtRef {
      __typename: string;
      party_ref: string;
      party_ext_ref: string;
      description: string;
      party_ext_ref_type: string;
      user_def: string;
      version_no: number;
      version_date: Date;
      version_user: string;
}


@Component({
  selector: 'app-ref-from',
  template: `
  <h1 mat-dialog-title>Party Reference Update</h1>
  <div mat-dialog-content>
  <form [formGroup]="formGroup"  class="form">
      <mat-form-field class="form-element"> <input matInput placeholder="Party Reference" formControlName="party_ref"/></mat-form-field>
      <mat-form-field class="form-element"> <input matInput placeholder="Party Ext Ref" formControlName="party_ext_ref"/></mat-form-field>
      <mat-form-field class="form-element"> <input matInput placeholder="Description" formControlName="description"/></mat-form-field>
      <mat-form-field class="form-element"> <input matInput placeholder="Ext Ref Type" formControlName="party_ext_ref_type"/></mat-form-field>
      <mat-form-field class="form-element"> <input matInput placeholder="User Defined" formControlName="user_def"/></mat-form-field>
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


export class PartyRefFormComponent {
  formGroup: FormGroup;
  action: string;
  // tslint:disable-next-line: variable-name
  local_data: any;
  party: string;
  currentDate: Date;

  constructor(
    public dialogRef: MatDialogRef<PartyRefFormComponent>,
    private fb: FormBuilder,
    // @Optional() is used to prevent error if no data is passed
    @Optional() @Inject(MAT_DIALOG_DATA) public data: IPartyExtRef) {
    this.createForm(data);
  }

/*      party_ref: string;
      party_ext_ref: string;
      description: string;
      party_ext_ref_type: string;
      user_def: string;
      version_no: number;
 */

  createForm(party: IPartyExtRef) {
    const currentDate = new Intl.DateTimeFormat('en');
    const theDate = currentDate.format();
    const versionNo = Number(party.version_no) + 1;
    this.formGroup = this.fb.group({
      party_ref: [party.party_ref],
      party_ext_ref: [party.party_ext_ref],
      description: [party.description],
      party_ext_ref_type: [party.party_ext_ref_type],
      user_def: [party.user_def],
      version_no: versionNo,
      version_date: theDate,
      version_user: 'ADMIN'
    });
    this.formGroup.controls.party_ref.disable();
  }

  onCreate(){
    let data = this.formGroup.getRawValue();
    console.log('Create PartyExtRef with:', data);
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

