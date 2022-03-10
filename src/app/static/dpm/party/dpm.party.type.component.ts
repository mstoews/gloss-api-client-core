import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { SnackService } from 'app/services/snack.service';
import { DpmPartyFormComponent } from 'app/static/dpm/forms/dpm.party.form.component';
import { PartyService } from 'app/services/party.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-dpmparty-type',
  template: `
    <ng-container *ngIf="partyGql$ | async as partyGql">
      <grid
        [cols]="cols"
        [rows]="partyGql"
        (notifyOpenDialog)="onNotify($event)"
        (onSelectedPartyRef)="onSelectedPartyRef($event)"
      >
      </grid>
    </ng-container>
  `,
})
export class DpmPartyTypeComponent {
  constructor(
    public dialog: MatDialog,
    public partyService: PartyService,
    public snackService: SnackService
  ) { }

  @Input() public componentType;
  partyGql$: Observable<any>;
  cols: any;

  ngOnInit() {
    this.updateData();
    this.cols = this.partyService.getdpmPartyTypeCols();
  }

  onNotify(event: any) {
    this.openDialog(event);
  }

  onSelectedPartyRef(data) {
    this.partyService.setParty(data);
  }

  updateData() {
    this.partyGql$ = this.partyService.getdpmPartyByClient(this.componentType);
  }

  create(data) {
    data.component_type = this.componentType;
    this.partyService.createdpmParty(data).subscribe(
      (value) => {
        this.snackService.showMessage(
          'Created ' + value.data.createdpmParty.company_ref
        );
        this.updateData();
      },
      (error) => {
        this.snackService.showMessage(error.message);
      }
    );
  }

  update(data) {
    this.partyService.updatedpmPartyByRef(data).subscribe(
      (value) => {
        this.snackService.showMessage('Updated ' + value.data.updatedpmParty);
        this.updateData();
      },
      (error) => {
        this.snackService.showMessage(error.message);
      }
    );
  }

  delete(data) {
    this.partyService
    .deletedpmPartyTree(
      data.company_ref,
      data.party_ref,
      this.componentType
    )
    .subscribe({
      next: (val) => {
        this.snackService.showMessage(
          'DpmParty ' +
          val.data.deletedpmPartyTree.party_ref +
          ' has been deleted.'
        );
      },
      error: (err) =>
        this.snackService.showMessage(
          'Delete had an error :' + err.message
        ),
    });
  }

  openDialog(jsonData: any) {
    const dialogRef = this.dialog.open(DpmPartyFormComponent, {
      width: '380px',
      data: jsonData,
    });
    dialogRef.afterClosed().subscribe((result) => {
      switch (result.event) {
        case 'Create':
          this.create(result.data);
          break;
        case 'Update':
          this.update(result.data);
          break;
        case 'Delete':
            this.delete(result.data);
            break;
        case 'Cancel':
          break;
      }
    });
  }
}
