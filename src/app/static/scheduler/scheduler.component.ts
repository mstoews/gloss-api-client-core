import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { SnackService } from 'app/services/snack.service';
import { PartyService } from 'app/services/party.service';
import { SchedulerGridComponent } from './scheduler-grid.component';

@Component({
  selector: 'app-scheduler',
  template: `
    <app-menubar
      (notifyParentSend)="onSend()"
      (notifyParentRefresh)="onRefresh()"
      (notifyParentDelete)="onDelete()"
      (notifyParentAdd)="onAdd()"
      (notifyParentClone)="onClone()"
      inTitle="{{ outTitle }}"
    >
    </app-menubar>
    <mat-tab-group #tabGroup>
      <mat-tab label="SCHEDULER">
        <ng-template matTabContent>
          <div class="container">
            <app-scheduler-grid
              component_type="{{ componentType }}"
            ></app-scheduler-grid>
          </div>
        </ng-template>
      </mat-tab>
    </mat-tab-group>
  `,
})
export class SchedulerComponent implements OnInit {
  constructor(
    public activatedroute: ActivatedRoute,
    private snackService: SnackService,
    public partyService: PartyService,
    public dialog: MatDialog
  ) { }

  outTitle = 'SCHEDULER';
  @Input() public componentType;
  @ViewChild(SchedulerGridComponent)
  private schedulerGridComponent: SchedulerGridComponent;

  ngOnInit() {
    this.activatedroute.data.subscribe((data) => {
      this.componentType = data.componentType;
    });
  }

  onRefresh() {
    this.schedulerGridComponent.onRefresh();
  }

  onSend() {
    if (this.componentType === 'GLOSS') {
      this.partyService.sendGlossSchedulerStatic();
    } else {
      this.partyService.sendDpmSchedulerStatic(this.componentType);
    }
  }

  onAdd() {
    const event = { index: 0, tab: 'MatTab' };
    this.schedulerGridComponent.onNotify(event);
  }

  onClone() {
    let clone$;
    if (this.componentType === 'GLOSS') {
      clone$ = this.partyService.cloneGlossSchedulerData('CORE');
    } else {
      clone$ = this.partyService.cloneDpmSchedulerData('CORE', this.componentType);
    }
    clone$.subscribe({
      next: (val) => {
        this.onRefresh();
        this.snackService.showMessage('Scheduler data has been cloned');
      },
      error: (err) =>
        this.snackService.showMessage(
          'The update had an error :' + err.message
        ),
    });
  }

  onDelete() {
    this.snackService.showMessage(
      'You cannot delete scheduler data using this button. Try deleting the rows individually'
    );
  }

  OnDestroy() { }
}
