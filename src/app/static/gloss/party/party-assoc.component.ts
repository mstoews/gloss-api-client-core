import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PartyAssocInput } from 'app/services/api.service';
import { GridComponent } from 'app/components/grid/grid.component';
import { PartyAssocFormComponent } from '../forms/party.assoc.form.component';
import { PartyService } from 'app/services/party.service';

@Component({
  selector: 'app-party-assoc',
  templateUrl: '../../generic-grid.html',
  providers: [GridComponent],
})
export class PartyAssocComponent implements OnInit {
  constructor(public dialog: MatDialog, public partyService: PartyService) { }

  cols = this.partyService.getPartyAssocCols();
  partyGql$;

  ngOnInit() {
    this.updateData();
  }

  public onNotify(event: any) {
    this.openDialog(event);
  }

  public updateData() {
    this.partyGql$ = this.partyService.getAssocByRef();
  }

  openDialog(jsonData: any) {
    console.log('Party Assoc Data', jsonData);
    const dialogRef = this.dialog.open(PartyAssocFormComponent, {
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

  create(data: PartyAssocInput) {
    this.partyService.createPartyAssociation(data);
    this.updateData();
  }

  update(data: PartyAssocInput) {
    this.partyService.updatePartyAssociation(data);
    this.updateData();
  }

  delete(data: PartyAssocInput) {
    this.partyService.deletePartyAssociation(data.party_ref, data.assoc_type);
    this.updateData();
  }

  public onFileUpload(filedata: any) {
    const data = JSON.parse(filedata);
    for (const element of data) {
      this.partyService.createPartyAssociation(element);
    }
  }
}
