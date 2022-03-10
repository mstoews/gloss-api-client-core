import { Component, Inject, Optional } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { PartyService } from 'app/services/party.service';

export interface IScheduler {
  client_ref: string;
  msg_type: number;
  event_ref: string;
  database_type: string;
  database_code: string;
  sql_db_code: string;
  bus_day: string;
  holiday_id: string;
  frequency_unit: string;
  frequency_interval: number;
  frequency_start_time: Date;
  frequency_end_time: Date;
  due_date_time: Date;
  start_by_unit: string;
  start_by_interval: number;
  end_by_interval: number;
  use_current_date: string;
  active_ind_p2k: string;
  start_by_time: Date;
  end_by_time: Date;
  batch_size: number;
  supercede: string;
  dst_region_code: string;
  version_no: number;
  version_date: Date;
  version_user: string;
}

@Component({
  selector: 'app-scheduler-form',
  template: `
    <h1 mat-dialog-title>Gloss Scheduler Update</h1>
    <div mat-dialog-content>
      <form [formGroup]="fg" #myForm="ngForm">
        <mat-form-field>
          <input
            matInput
            type="number"
            placeholder="msg_type"
            formControlName="msg_type"
        /></mat-form-field>
        <mat-form-field>
          <input matInput placeholder="event_ref" formControlName="event_ref" />
        </mat-form-field>
        <mat-form-field>
          <input
            matInput
            placeholder="database_type"
            formControlName="database_type"
          />
        </mat-form-field>
        <mat-form-field>
          <input
            matInput
            placeholder="database_code"
            formControlName="database_code"
          />
        </mat-form-field>
        <mat-form-field>
          <input
            matInput
            placeholder="sql_db_code"
            formControlName="sql_db_code"
          />
        </mat-form-field>
        <mat-form-field>
          <mat-select placeholder="bus_day" formControlName="bus_day">
            <mat-option *ngFor="let code of ynCodes" [value]="code.code_value">
              {{ code.code_desc }}
            </mat-option>
          </mat-select>
        </mat-form-field>
        <mat-form-field>
          <input
            matInput
            placeholder="holiday_id"
            formControlName="holiday_id"
          />
        </mat-form-field>
        <mat-form-field>
          <input
            matInput
            placeholder="frequency_unit"
            formControlName="frequency_unit"
        /></mat-form-field>
        <mat-form-field>
          <input
            matInput
            type="number"
            placeholder="frequency_interval"
            formControlName="frequency_interval"
        /></mat-form-field>
        <mat-form-field>
          <input
            matInput
            type="time"
            placeholder="frequency_start_time"
            formControlName="frequency_start_time"
        /></mat-form-field>
        <mat-form-field>
          <input
            matInput
            type="time"
            placeholder="frequency_end_time"
            formControlName="frequency_end_time"
        /></mat-form-field>
        <mat-form-field>
          <input
            matInput
            type="date"
            placeholder="Due Date"
            formControlName="due_date"
        /></mat-form-field>
        <mat-form-field>
          <input
            matInput
            type="time"
            placeholder="Due Date Time"
            formControlName="due_date_time"
        /></mat-form-field>
        <mat-form-field>
          <input
            matInput
            placeholder="start_by_unit"
            formControlName="start_by_unit"
          />
        </mat-form-field>
        <mat-form-field>
          <input
            matInput
            type="number"
            placeholder="start_by_interval"
            formControlName="start_by_interval"
        /></mat-form-field>
        <mat-form-field>
          <input
            matInput
            type="number"
            placeholder="end_by_interval"
            formControlName="end_by_interval"
        /></mat-form-field>
        <mat-form-field>
          <mat-select
            placeholder="use_current_date"
            formControlName="use_current_date"
          >
            <mat-option *ngFor="let code of ynCodes" [value]="code.code_value">
              {{ code.code_desc }}
            </mat-option>
          </mat-select>
        </mat-form-field>
        <mat-form-field>
          <mat-select
            placeholder="active_ind_p2k"
            formControlName="active_ind_p2k"
          >
            <mat-option
              *ngFor="let code of activeindicators"
              [value]="code.code_value"
            >
              {{ code.code_desc }}
            </mat-option>
          </mat-select>
        </mat-form-field>
        <mat-form-field>
          <input
            matInput
            type="time"
            placeholder="start_by_time"
            formControlName="start_by_time"
        /></mat-form-field>
        <mat-form-field>
          <input
            matInput
            type="time"
            placeholder="end_by_time"
            formControlName="end_by_time"
        /></mat-form-field>
        <mat-form-field>
          <input
            matInput
            type="number"
            placeholder="batch_size"
            formControlName="batch_size"
        /></mat-form-field>
        <mat-form-field>
          <mat-select placeholder="supercede" formControlName="supercede">
            <mat-option *ngFor="let code of ynCodes" [value]="code.code_value">
              {{ code.code_desc }}
            </mat-option>
          </mat-select>
        </mat-form-field>
        <mat-form-field>
          <input
            matInput
            placeholder="dst_region_code"
            formControlName="dst_region_code"
        /></mat-form-field>
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
        [disabled]="!myForm.form.valid"
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
export class GlossSchedulerFormComponent {
  fg: FormGroup;
  oldduedate: Date;
  activeindicators = [
    { code_value: 'A', code_desc: 'Active' },
    { code_value: 'I', code_desc: 'Inactive' },
  ];
  ynCodes = [
    { code_value: 'Y', code_desc: 'Yes' },
    { code_value: 'N', code_desc: 'No' },
  ];

  constructor(
    public dialogRef: MatDialogRef<GlossSchedulerFormComponent>,
    private fb: FormBuilder,
    private partyService: PartyService,
    @Optional() @Inject(MAT_DIALOG_DATA) public data: IScheduler
  ) {
    this.createForm(data);
  }

  createForm(data: IScheduler) {
    const currentDate = new Intl.DateTimeFormat('en');
    const theDate = currentDate.format();
    if (data.version_no === undefined) {
      data.version_no = 0;
    }
    if (data.due_date_time === undefined) {
      data.due_date_time = new Date();
      data.end_by_time = new Date();
      data.frequency_end_time = new Date();
      data.start_by_time = new Date();
      data.frequency_start_time = new Date();
    }
    const versionNo = Number(data.version_no) + 1;
    this.fg = this.fb.group({
      client_ref: [data.client_ref],
      active_ind_p2k: [data.active_ind_p2k],
      batch_size: [data.batch_size],
      bus_day: [data.bus_day],
      database_code: [data.database_code],
      database_type: [data.database_type],
      dst_region_code: [data.dst_region_code],
      due_date: [
        data.due_date_time
          .toString()
          .substring(0, data.due_date_time.toString().indexOf('T')),
      ],
      due_date_time: [
        data.due_date_time
          .toString()
          .substring(
            data.due_date_time.toString().indexOf('T') + 1,
            data.due_date_time.toString().indexOf('Z')
          ),
      ],
      end_by_interval: [data.end_by_interval],
      end_by_time: [
        data.end_by_time
          .toString()
          .substring(
            data.end_by_time.toString().indexOf('T') + 1,
            data.end_by_time.toString().indexOf('Z')
          ),
      ],
      event_ref: [data.event_ref],
      frequency_end_time: [
        data.frequency_end_time
          .toString()
          .substring(
            data.frequency_end_time.toString().indexOf('T') + 1,
            data.frequency_end_time.toString().indexOf('Z')
          ),
      ],
      frequency_interval: [data.frequency_interval],
      frequency_start_time: [
        data.frequency_start_time
          .toString()
          .substring(
            data.frequency_start_time.toString().indexOf('T') + 1,
            data.frequency_start_time.toString().indexOf('Z')
          ),
      ],
      frequency_unit: [data.frequency_unit],
      holiday_id: [data.holiday_id],
      msg_type: [data.msg_type],
      sql_db_code: [data.sql_db_code],
      start_by_interval: [data.start_by_interval],
      start_by_time: [
        data.start_by_time
          .toString()
          .substring(
            data.start_by_time.toString().indexOf('T') + 1,
            data.start_by_time.toString().indexOf('Z')
          ),
      ],
      start_by_unit: [data.start_by_unit],
      supercede: [data.supercede],
      use_current_date: [data.use_current_date],
      version_no: versionNo,
      version_date: theDate,
      version_user: localStorage.getItem('USER_ID'),
    });
    this.oldduedate = data.due_date_time;
  }

  onCreate() {
    let data = this.fg.getRawValue();
    data.due_date_time =
      data.due_date + 'T' + data.due_date_time.toString() + 'Z';
    data.end_by_time = '1970-01-01T' + data.end_by_time.toString() + 'Z';
    data.start_by_time = '1970-01-01T' + data.start_by_time.toString() + 'Z';
    data.frequency_end_time =
      '1970-01-01T' + data.frequency_end_time.toString() + 'Z';
    data.frequency_start_time =
      '1970-01-01T' + data.frequency_start_time.toString() + 'Z';
    delete data.due_date;
    this.dialogRef.close({ event: 'Create', data });
  }

  onUpdate() {
    let data = this.fg.getRawValue();
    data.due_date_time =
      data.due_date + 'T' + data.due_date_time.toString() + 'Z';
    data.end_by_time = '1970-01-01T' + data.end_by_time.toString() + 'Z';
    data.start_by_time = '1970-01-01T' + data.start_by_time.toString() + 'Z';
    data.frequency_end_time =
      '1970-01-01T' + data.frequency_end_time.toString() + 'Z';
    data.frequency_start_time =
      '1970-01-01T' + data.frequency_start_time.toString() + 'Z';
    delete data.due_date;
    this.partyService.updateGlossScheduler(
      data.msg_type,
      data.event_ref,
      this.oldduedate,
      data.database_code,
      data
    );
    this.dialogRef.close({ event: 'Cancel' });
  }

  onDelete() {
    let data = this.fg.getRawValue();
    data.due_date_time = this.oldduedate;
    data.end_by_time = '1970-01-01T' + data.end_by_time.toString() + 'Z';
    data.start_by_time = '1970-01-01T' + data.start_by_time.toString() + 'Z';
    data.frequency_end_time =
      '1970-01-01T' + data.frequency_end_time.toString() + 'Z';
    data.frequency_start_time =
      '1970-01-01T' + data.frequency_start_time.toString() + 'Z';
    delete data.due_date;
    this.dialogRef.close({ event: 'Delete', data });
  }

  closeDialog() {
    this.dialogRef.close({ event: 'Cancel' });
  }
}
