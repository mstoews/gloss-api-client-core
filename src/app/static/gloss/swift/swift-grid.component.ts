import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { GridComponent } from 'app/components/grid/grid.component';
import { PartySwiftInput } from 'app/services/api.service';
import { PartyService } from 'app/services/party.service';
import { PartySwiftFormComponent } from './party.swift.form.component';

@Component({
  selector: 'app-party-swift',
  templateUrl: '../../generic-grid.html',
  providers: [GridComponent],
})
export class SwiftGridComponent implements OnInit {
  constructor(public dialog: MatDialog, private partyService: PartyService) { }

  cols = this.partyService.getPartySwiftCols();
  partyGql$ = this.partyService.getSwiftByRef();

  ngOnInit() { }

  public onNotify(event: any) {
    this.openDialog(event);
  }

  public updateData() {
    this.partyService.getSwiftByRef().subscribe((data: any) => { });
    this.partyGql$ = this.partyService.getSwiftByRef();
  }

  openDialog(jsonData: any) {
    const dialogRef = this.dialog.open(PartySwiftFormComponent, {
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

  create(data: PartySwiftInput) {
    this.partyService.createPartySwift(data);
    this.onRefresh();
  }

  update(data: PartySwiftInput) {
    this.partyService.updatePartySwift(data);
    this.onRefresh();
  }

  delete(data: PartySwiftInput) {
    this.partyService.deletePartySwift(data.party_ref);
    this.onRefresh();
  }

  onRefresh() {
    this.updateData();
  }

  OnDestroy() { }

  public onFileUpload(filedata: any) {
    const data = JSON.parse(filedata);
    for (const element of data) {
      this.partyService.createPartySwift(element);
    }
  }
}
