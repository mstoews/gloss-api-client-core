import { Component, Inject, Optional } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { PartyService } from 'app/services/party.service';

export interface IDpmParty {
  company_ref: string;
  party_ref: string;
  client_ref: string;
  component_type: string;
  party_type: string;
  inactive: string;
  version_date: any;
  version_no: number;
  version_user: string;
}

@Component({
  selector: 'app-dpmcompany-clone',
  template: `
    <h1 mat-dialog-title>Clone Company</h1>
    <div mat-dialog-content>
      <form [formGroup]="formGroup">
       <mat-form-field>
         <mat-select (selectionChange)="clientUpdated($event)" placeholder="Client Reference" formControlName="client_ref">
          <mat-option *ngFor="let client of clients" [value]="client">
                {{ client }}
          </mat-option>
        </mat-select>
       </mat-form-field>
      <mat-form-field>
        <mat-select placeholder="Company Reference" formControlName="company_ref">
          <mat-option *ngFor="let company of companies" [value]="company.company_ref">
                {{ company.company_ref }}
          </mat-option>
        </mat-select>
      </mat-form-field>
      <mat-form-field>
          <input
            matInput
            placeholder="company Clone Reference"
            formControlName="new_company_ref"
        /></mat-form-field>
      </form>
    </div>
    <div mat-dialog-actions>
      <button
        mat-button
        (click)="onCreate()"
        [mat-dialog-close]="data"
        mat-flat-button
        color="primary"
      >
        Clone
      </button>
      <button mat-button (click)="closeDialog()" mat-flat-button color="warn">
        Cancel
      </button>
    </div>
  `,
})
export class DpmPartyCloneFormComponent {
  formGroup: FormGroup;
  clients: string[] = ['CORE'];
  companies: IDpmParty[];
  componentType: string;

  constructor(
    private fb: FormBuilder,
    private partyService: PartyService,
    public dialogRef: MatDialogRef<DpmPartyCloneFormComponent>,
    @Optional() @Inject(MAT_DIALOG_DATA) public data: string
  ) {
    this.componentType = data;
    this.createForm();
  }

  createForm() {
    this.formGroup = this.fb.group({
      client_ref: '',
      company_ref: '',
      new_company_ref: '',
    });
  }

  onCreate() {
    let data = this.formGroup.getRawValue();
    let newcompanyRef = data.new_company_ref as string;
    if (newcompanyRef != '' && newcompanyRef.length > 0) {
      this.dialogRef.close({ event: 'Create', data });
    }
  }

  closeDialog() {
    this.dialogRef.close({ event: 'Cancel' });
  }

  clientUpdated(event) {
    this.partyService
      .getdpmPartyByType('COMP',event.value, this.componentType)
      .subscribe((value) => {
        this.formGroup.patchValue((this.companies = value));
      });
  }
}
