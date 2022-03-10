import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { NettingInput } from 'app/services/api.service';
import { SnackService } from 'app/services/snack.service';
import { GridComponent } from 'app/components/grid/grid.component';
import { PartyService } from 'app/services/party.service';
import { NettingStepperComponent } from './netting-stepper.component';

@Component({
  selector: 'app-party-netting',
  templateUrl: '../../../generic-grid.html',
  providers: [GridComponent],
})
export class NettingGridComponent implements OnInit {
  constructor(
    public dialog: MatDialog,
    public snackbar: SnackService,
    public partyService: PartyService
  ) { }

  cols = this.partyService.getPartyNettingCols();
  partyGql$;

  ngOnInit() {
    this.updateData();
  }

  public updateData() {
    this.partyGql$ = this.partyService.getNettingByRef();
  }

  public onNotify(event: any) {
    if (localStorage.getItem('glossenv') === null) {
      this.snackbar.showMessage(
        'Please activate the environment you would like to push/pull the static using Home Component'
      );
    } else {
      this.openDialog(event);
    }
  }

  openDialog(jsonData: any) {
    const dialogRef = this.dialog.open(NettingStepperComponent, {
      width: '800px',
      data: jsonData,
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('Just before update', result.data);
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

  create(data: NettingInput) {
    this.partyService.createPartyNetting(data);
    this.onRefresh();
  }

  update(data: NettingInput) {
    this.partyService.updatePartyNetting(data);
    this.onRefresh();
  }

  delete(data: NettingInput) {
    this.partyService.deletePartyNetting(
      data.net_driver,
      data.party_ref,
      data.settle_code,
      data.transaction_type
    );
    this.onRefresh();
  }

  onRefresh() {
    this.updateData();
  }

  public onFileUpload(filedata: any) {
    const data = JSON.parse(filedata);
    for (const element of data) {
      this.partyService.createPartyNetting(element);
    }
  }
}
