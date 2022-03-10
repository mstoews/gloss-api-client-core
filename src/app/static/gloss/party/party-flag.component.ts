import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PartyFlagInput } from 'app/services/api.service';
import { GridComponent } from 'app/components/grid/grid.component';
import { PartyFlagFormComponent } from '../forms/party.flags.form.component';
import { PartyService } from 'app/services/party.service';

@Component({
  selector: 'app-party-flag',
  templateUrl: '../../generic-grid.html',
  providers: [GridComponent],
})
export class PartyFlagComponent implements OnInit {
  constructor(public dialog: MatDialog, public partyService: PartyService) { }

  cols = this.partyService.getPartyFlagCols();
  partyGql$;

  ngOnInit() {
    this.updateData();
  }

  public onNotify(event: any) {
    this.openDialog(event);
  }

  public updateData() {
    this.partyGql$ = this.partyService.getFlagByRef();
  }

  openDialog(jsonData: any) {
    console.log('Party Flag Data', jsonData);
    const dialogRef = this.dialog.open(PartyFlagFormComponent, {
      width: '380px',
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

  create(data: PartyFlagInput) {
    this.partyService.createPartyFlag(data);
    this.updateData();
  }

  update(data: PartyFlagInput) {
    this.partyService.updatePartyFlag(data);
    this.updateData();
  }

  delete(data: PartyFlagInput) {
    this.partyService.deletePartyFlag(
      data.party_ref,
      data.flag_type,
      data.flag_code
    );
    this.updateData();
  }

  public onFileUpload(filedata: any) {
    const data = JSON.parse(filedata);
    for (const element of data) {
      this.partyService.createPartyFlag(element);
    }
  }
}
