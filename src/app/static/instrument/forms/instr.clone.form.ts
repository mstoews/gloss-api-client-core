import { Component, Inject, Optional, Input } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

export interface IPartyRefClone {
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
    selector: 'app-party-clone-modal',
    template: `
  <h1 mat-dialog-title>Clone or Delete Party</h1>
  <div mat-dialog-content>
  <form [formGroup]="formGroup"  class="form">
      <mat-form-field class="form-element"> <input matInput placeholder="Party Reference" formControlName="party_ref"/></mat-form-field>
      <mat-form-field class="form-element"> <input matInput placeholder="Party Clone Reference" formControlName="new_party_ref"/></mat-form-field>
  </form>
  </div>
  <div mat-dialog-actions>
    <button mat-button (click)="onCreate()" [mat-dialog-close]="data" mat-flat-button color="primary">Clone</button>
    <button mat-button (click)="onDelete()" [mat-dialog-close]="data" mat-flat-button color="primary">Delete</button>
    <button mat-button (click)="closeDialog()" mat-flat-button color="warn">Cancel</button>
  </div>
  `,
    styleUrls: ['./forms.component.scss'],
})


export class PartyFormCloneModalComponent {
    formGroup: FormGroup;
    action: string;
    // tslint:disable-next-line: variable-name
    party: string;
    currentDate: Date;

    constructor(
        private fb: FormBuilder,
        public dialogRef: MatDialogRef<PartyFormCloneModalComponent>,
        @Optional() @Inject(MAT_DIALOG_DATA) public data: IPartyRefClone) {
        this.createForm(data);
    }

    createForm(party: IPartyRefClone) {
        const currentDate = new Intl.DateTimeFormat('en');
        const theDate = currentDate.format();
        this.formGroup = this.fb.group({
            party_ref: [party.party_ref],
            new_party_ref: '',
        });
        this.formGroup.controls.party_ref.disable();
    }

    onCreate() {
        let newPartyRef = '' as string;
        newPartyRef = data.party_type as string;
        if (newPartyRef != '' && newPartyRef.length > 0 ) {
            let data = this.formGroup.getRawValue();
            this.dialogRef.close({ event: 'Create', data });
        }
    }

    onDelete() {
        let newPartyRef = '' as string;
        newPartyRef = data.party_type as string;
        if (newPartyRef != '' && newPartyRef.length > 0 ) {
            let data = this.formGroup.getRawValue();
            this.dialogRef.close({ event: 'Delete', data });
        }
    }

    closeDialog() {
        this.dialogRef.close({event: 'Cancel'});
    }

}

