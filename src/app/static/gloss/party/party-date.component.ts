import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PartyDateInput } from 'app/services/api.service';
import { PartyService } from 'app/services/party.service';
import { GridComponent } from 'app/components/grid/grid.component';
import { PartyDateFormComponent } from '../forms/party.date.form.component';

@Component({
  selector: 'app-party-date',
  templateUrl: '../../generic-grid.html',
  providers: [GridComponent],
})
export class PartyDateComponent implements OnInit {
  constructor(public dialog: MatDialog, public partyService: PartyService) { }

  cols = this.partyService.getPartyDateCols();
  partyGql$;

  ngOnInit() {
    this.updateData();
  }

  public onNotify(event: any) {
    this.openDialog(event);
  }

  public updateData() {
    this.partyGql$ = this.partyService.getDateByRef();
  }

  openDialog(jsonData: any) {
    console.log('Party Date Data', jsonData);
    const dialogRef = this.dialog.open(PartyDateFormComponent, {
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

  create(data: PartyDateInput) {
    this.partyService.createPartyDate(data);
    this.updateData();
  }

  update(data: PartyDateInput) {
    this.partyService.updatePartyDate(data);
    this.updateData();
  }

  delete(data: PartyDateInput) {
    this.partyService.deletePartyDate(data.party_ref, data.date_type);
    this.updateData();
  }

  public onFileUpload(filedata: any) {
    const data = JSON.parse(filedata);
    for (const element of data) {
      this.partyService.createPartyDate(element);
    }
  }
}
