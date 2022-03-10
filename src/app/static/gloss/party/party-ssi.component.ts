import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PartySsiInput } from 'app/services/api.service';
import { GridComponent } from 'app/components/grid/grid.component';
import { PartySsiFormComponent } from '../forms/party.ssi.form';
import { PartyService } from 'app/services/party.service';

@Component({
  selector: 'app-party-ssi',
  templateUrl: '../../generic-grid.html',
  providers: [GridComponent],
})
export class PartySsiComponent implements OnInit {
  constructor(public dialog: MatDialog, public partyService: PartyService) { }

  @Input() public partyType;
  cols = this.partyService.getPartySsiCols();
  partyGql$;

  ngOnInit() {
    this.updateData();
  }

  public onNotify(event: any) {
    this.openDialog(event);
  }

  public updateData() {
    this.partyGql$ = this.partyService.getSsiByRef();
  }

  openDialog(jsonData: any) {
    jsonData.party_type = this.partyType;
    console.log('Party Ssi Data', jsonData);
    const dialogRef = this.dialog.open(PartySsiFormComponent, {
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

  create(data: PartySsiInput) {
    this.partyService.createPartySsi(data);
    this.updateData();
  }

  update(data: PartySsiInput) {
    this.partyService.updatePartySsi(data);
    this.updateData();
  }

  delete(data: PartySsiInput) {
    this.partyService.deletePartySsi(data.party_ref, data.depot_alias);
    this.updateData();
  }

  public onFileUpload(filedata: any) {
    const data = JSON.parse(filedata);
    for (const element of data) {
      this.partyService.createPartySsi(element);
    }
  }
}
