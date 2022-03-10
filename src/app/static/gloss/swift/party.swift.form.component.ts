import { Component, Inject, Optional } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

export interface IPartySwift {
  party_ref: string;
  client_ref: string;
  company_name: string;
  branch_code: string;
  logical_term_id: string[];
  queue_mgr: string;
  incoming_queue: string;
  outgoing_queue: string;
  channel: string;
  host: string;
  port_number: number;
  version_no: number;
  version_date: Date;
  version_user: string;
}

@Component({
  selector: 'app-party-swift-form',
  template: `
    <h1 mat-dialog-title>Party Swift Update</h1>
    <div mat-dialog-content>
      <form [formGroup]="fg" #myForm="ngForm">
        <mat-form-field>
          <input
            matInput
            placeholder="Party Ref"
            required
            maxlength="12"
            formControlName="party_ref"
          />
        </mat-form-field>

        <mat-form-field>
          <input
            matInput
            placeholder="Bic Code"
            required
            maxlength="8"
            required
            formControlName="company_name"
          />
        </mat-form-field>

        <mat-form-field>
          <input
            matInput
            placeholder="Branch Code"
            required
            maxlength="3"
            formControlName="branch_code"
          />
        </mat-form-field>

        <mat-form-field>
          <input
            matInput
            placeholder="Terminal ID"
            formControlName="logical_term_id"
          />
        </mat-form-field>

        <mat-form-field>
          <input
            matInput
            placeholder="Queue Manager"
            required
            formControlName="queue_mgr"
          />
        </mat-form-field>

        <mat-form-field>
          <input
            matInput
            placeholder="Incoming Queue"
            required
            formControlName="incoming_queue"
          />
        </mat-form-field>

        <mat-form-field>
          <input
            matInput
            placeholder="Outgoing Queue"
            required
            formControlName="outgoing_queue"
          />
        </mat-form-field>

        <mat-form-field>
          <input
            matInput
            placeholder="Channel"
            required
            formControlName="channel"
          />
        </mat-form-field>

        <mat-form-field>
          <input matInput placeholder="Host" required formControlName="host" />
        </mat-form-field>

        <mat-form-field>
          <input
            matInput
            type="number"
            placeholder="Port Number"
            required
            formControlName="port_number"
          />
        </mat-form-field>
      </form>
    </div>

    <div mat-dialog-actions>
      <button
        mat-button
        (click)="onUpdate()"
        [disabled]="!myForm.form.valid"
        [mat-dialog-close]="data"
        mat-flat-button
        color="primary"
      >
        Update
      </button>
      <button
        mat-button
        (click)="onCreate()"
        [disabled]="!myForm.form.valid"
        [mat-dialog-close]="data"
        mat-flat-button
        color="primary"
      >
        Insert
      </button>
      <button
        mat-button
        (click)="onDelete()"
        [mat-dialog-close]="data"
        mat-flat-button
        color="primary"
      >
        Delete
      </button>
      <button mat-button (click)="closeDialog()" mat-flat-button color="warn">
        Cancel
      </button>
    </div>
  `,
})
export class PartySwiftFormComponent {
  fg: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<PartySwiftFormComponent>,
    private fb: FormBuilder,
    @Optional() @Inject(MAT_DIALOG_DATA) public data: IPartySwift
  ) {
    this.createForm(data);
  }

  createForm(party: IPartySwift) {
    const currentDate = new Intl.DateTimeFormat('en');
    const theDate = currentDate.format();
    if (party.version_no === undefined) {
      party.version_no = 0;
    }
    const versionNo = Number(party.version_no) + 1;
    this.fg = this.fb.group({
      party_ref: [party.party_ref],
      client_ref: [party.client_ref],
      company_name: [party.company_name],
      branch_code: [party.branch_code],
      logical_term_id: [party.logical_term_id],
      queue_mgr: [party.queue_mgr],
      incoming_queue: [party.incoming_queue],
      outgoing_queue: [party.outgoing_queue],
      channel: [party.channel],
      host: [party.host],
      port_number: [party.port_number],
      version_no: versionNo,
      version_date: theDate,
      version_user: localStorage.getItem('USER_ID'),
    });
  }

  onCreate() {
    let data = this.makeSwiftParty(this.fg.getRawValue());
    this.dialogRef.close({ event: 'Create', data });
  }

  onUpdate() {
    let data = this.makeSwiftParty(this.fg.getRawValue());
    this.dialogRef.close({ event: 'Update', data });
  }

  onDelete() {
    let data = this.fg.getRawValue();
    this.dialogRef.close({ event: 'Delete', data });
  }

  closeDialog() {
    this.dialogRef.close({ event: 'Cancel' });
  }

  makeSwiftParty(data: any) {
    if (typeof data.logical_term_id === 'string') {
      data.logical_term_id = data.logical_term_id.split(',');
    }
    const swiftParty = {
      party_ref: data.party_ref,
      client_ref: data.client_ref,
      company_name: data.company_name,
      branch_code: data.branch_code,
      logical_term_id: data.logical_term_id,
      queue_mgr: data.queue_mgr,
      incoming_queue: data.incoming_queue,
      outgoing_queue: data.outgoing_queue,
      channel: data.channel,
      host: data.host,
      port_number: data.port_number,
      version_no: data.version_no,
      version_date: data.version_date,
      version_user: data.version_user,
    };
    return swiftParty;
  }
}
