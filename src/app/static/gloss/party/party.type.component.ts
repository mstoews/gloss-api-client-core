import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PartyService } from 'app/services/party.service';
import { SnackService } from 'app/services/snack.service';
import { Observable } from 'rxjs';
import { PartyFormComponent } from '../forms/party.form.component';
import { GridComponent } from 'app/components/grid/grid.component';

@Component({
  selector: 'app-party-type',
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
  providers: [GridComponent],
})
export class PartyTypeComponent {
  partyGql$: Observable<any>;

  constructor(
    public dialog: MatDialog,
    public snackService: SnackService,
    public partyService: PartyService
  ) { }

  @Input() public partyType;

  partyRef: string;
  cols = this.partyService.getPartyTypeCols();

  ngOnInit() {
    this.updateData();
  }

  onNotify(event: any) {
    this.openDialog(event);
  }

  onSelectedPartyRef(data) {
    console.log('companyType.onSelectedPartyRef:', data.party_ref);
    this.partyService.setParty(data);
  }

  updateData() {
    this.partyGql$ = this.partyService.getPartyByType(this.partyType);
  }

  create(data) {
    data.has_netting_config = 'N';
    data.has_swift_config = 'N';
    this.partyService.createParty(data).subscribe(
      (value) => {
        this.snackService.showMessage(
          'Created ' + value.data.createParty.party_ref
        );
        this.updateData();
      },
      (error) => {
        this.snackService.showMessage(error.message);
      }
    );
    this.updateData();
  }

  update(data) {
    console.log(`Update the party ${data.party_ref} ${data.party_long_name}`);
    this.partyService.updatePartyByRef(data).subscribe(
      (value) => {
        console.log('Data', value.data.updateParty);
        this.updateData();
      },
      (error) => {
        console.log(error.message);
      }
    );
  }

  delete(data) {
  this.partyService.deletePartyTree(data.party_ref).subscribe({
    next: (val) => {
      this.snackService.showMessage(
        'Party ' +
        val.data.deletePartyTree.party_ref +
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
    const dialogRef = this.dialog.open(PartyFormComponent, {
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
