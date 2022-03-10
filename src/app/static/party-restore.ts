import { AgGridAngular } from '@ag-grid-community/angular';
import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import { SnackService } from 'app/services/snack.service';
import { PartyService } from 'app/services/party.service';

@Component({
  selector: 'app-party-restore',
  template: `
    <div mat-dialog-content>
      <h1 mat-dialog-title>Restore Party</h1>
      <ng-container *ngIf="partyGql$ | async as partyGql">
        <ag-grid-angular
          style="width: 100%; height: 100%;"
          class="ag-theme-alpine"
          [enableRangeSelection]="true"
          [animateRows]="true"
          domLayout="autoHeight"
          [columnDefs]="cols"
          [rowData]="partyGql"
          (rowDoubleClicked)="onRowDoubleClicked($event)"
          (rowClicked)="onSelectionChanged($event)"
        >
        </ag-grid-angular>
      </ng-container>
    </div>
    <div>
      <button
        mat-button
        (click)="onRestore()"
        ng-disabled="onRowSelected()"
        mat-flat-button
        color="primary"
      >
        Restore
      </button>
      <button mat-button (click)="closeDialog()" mat-flat-button color="warn">
        Cancel
      </button>
    </div>
  `,
})
export class PartyRestoreComponent implements OnInit {
  constructor(
    public dialog: MatDialog,
    public partyService: PartyService,
    public snackService: SnackService,
    public dialogRef: MatDialogRef<PartyRestoreComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.companyRef = data.company_ref;
    this.partyRef = data.party_ref;
    this.componentType = data.component_type;
  }

  partyGql$: any;

  ngOnInit() {
    if (this.componentType === 'GLOSS') {
      this.partyGql$ = this.partyService.getGlossPartyAuditByRef(this.partyRef);
      this.cols = this.partyService.getPartyAuditCols();
    } else {
      this.partyGql$ = this.partyService.getdpmPartyAuditByRef(
        this.companyRef,
        this.partyRef,
        this.componentType
      );
      this.cols = this.partyService.getdpmPartyAuditCols();
    }
  }

  @ViewChild('agGrid') agGrid: AgGridAngular;

  eventData: any;
  companyRef = '';
  partyRef = '';
  componentType = '';
  cols;

  onRowDoubleClicked(event: any) {
    console.log('Double Click', event.data);
  }

  onSelectionChanged(event: any) {
    console.log('Selection Change', event.data);
    this.eventData = event.data;
  }

  onRestore() {
    if (this.componentType === 'GLOSS') {
      this.partyService
        .restorePartyData(this.eventData.party_ref, this.eventData.version_no)
        .subscribe(
          (value) => {
            this.snackService.showMessage(
              'Party ' + value.data.restorePartyData.party_ref + ' restored'
            );
          },
          (error) => {
            this.snackService.showMessage(error.message);
          }
        );
    } else {
      this.partyService
        .restoredpmPartyData(
          this.eventData.company_ref,
          this.eventData.party_ref,
          this.eventData.version_no,
          this.componentType
        )
        .subscribe((value) => {
          this.snackService.showMessage(
            'Party ' + value.data.restoreDpmPartyData.company_ref + ' restored'
          );
        });
    }
    this.dialogRef.close({ event: 'Restore' });
  }

  closeDialog() {
    this.dialogRef.close({ event: 'Cancel' });
  }
}
