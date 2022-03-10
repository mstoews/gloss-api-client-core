import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import {
  DpmSchedulerInput,
  GlossSchedulerInput
} from 'app/services/api.service';
import { GridComponent } from 'app/components/grid/grid.component';
import { PartyService } from 'app/services/party.service';
import { DpmSchedulerFormComponent } from '../dpm/forms/dpm.scheduler.form.component';
import { GlossSchedulerFormComponent } from '../gloss/forms/gloss.scheduler.form.component';

@Component({
  selector: 'app-scheduler-grid',
  templateUrl: '../generic-grid.html',
  providers: [GridComponent],
})
export class SchedulerGridComponent implements OnInit {
  constructor(public dialog: MatDialog, private partyService: PartyService) { }

  cols;
  partyGql$;
  @Input() public component_type: string;

  ngOnInit() {
    this.updateData();
  }

  public onNotify(event: any) {
    this.openDialog(event);
  }

  public updateData() {
    if (this.component_type === 'GLOSS') {
      this.partyGql$ = this.partyService.getGlossScheduler();
      this.cols = this.partyService.getGlossSchedulerCols();
    } else {
      this.partyGql$ = this.partyService.getdpmScheduler(this.component_type);
      this.cols = this.partyService.getDpmSchedulerCols();
    }
  }

  openDialog(jsonData: any) {
    if (this.component_type === 'GLOSS') {
      const dialogRef = this.dialog.open(GlossSchedulerFormComponent, {
        width: '380px',
        data: jsonData,
      });

      dialogRef.afterClosed().subscribe((result) => {
        console.log('Just before update', result.data);
        switch (result.event) {
          case 'Create':
            this.createglossScheduler(result.data);
            break;
          case 'Update':
            this.updateglossScheduler(result.data);
            break;
          case 'Delete':
            this.deleteglossScheduler(result.data);
            break;
          case 'Cancel':
            break;
        }
      });
    } else {
      const dialogRef = this.dialog.open(DpmSchedulerFormComponent, {
        width: '380px',
        data: jsonData,
      });

      dialogRef.afterClosed().subscribe((result) => {
        console.log('Just before update', result.data);
        switch (result.event) {
          case 'Create':
            this.createdpmScheduler(result.data);
            break;
          case 'Update':
            this.updatedpmScheduler(result.data);
            break;
          case 'Delete':
            this.deletedpmScheduler(result.data);
            break;
          case 'Cancel':
            break;
        }
      });
    }
  }

  createglossScheduler(data: GlossSchedulerInput) {
    this.partyService.createGlossScheduler(data);
    this.onRefresh();
  }

  updateglossScheduler(data: GlossSchedulerInput) {
    this.partyService.updateGlossScheduler(
      data.msg_type,
      data.event_ref,
      data.due_date_time,
      data.database_code,
      data
    );
    this.onRefresh();
  }

  deleteglossScheduler(data: GlossSchedulerInput) {
    this.partyService.deleteGlossScheduler(
      data.msg_type,
      data.event_ref,
      data.due_date_time,
      data.database_code
    );
    this.onRefresh();
  }

  createdpmScheduler(data: DpmSchedulerInput) {
    data.component_type = this.component_type;
    this.partyService.createdpmScheduler(data);
    this.onRefresh();
  }

  updatedpmScheduler(data: DpmSchedulerInput) {
    this.partyService.updatedpmScheduler(
      this.component_type,
      data.msg_type,
      data.event_ref,
      data.due_date_time,
      data.database_code,
      data
    );
    this.onRefresh();
  }

  deletedpmScheduler(data: DpmSchedulerInput) {
    this.partyService.deletedpmScheduler(
      this.component_type,
      data.msg_type,
      data.event_ref,
      data.due_date_time,
      data.database_code
    );
    this.onRefresh();
  }

  onRefresh() {
    this.updateData();
  }

  OnDestroy() { }

  public onFileUpload(filedata: any) {
    const data = JSON.parse(filedata);
    for (const element of data) {
      if (this.component_type === 'GLOSS') {
        this.partyService.createGlossScheduler(element);
      } else {
        this.partyService.createdpmScheduler(element);
      }
    }
  }
}
