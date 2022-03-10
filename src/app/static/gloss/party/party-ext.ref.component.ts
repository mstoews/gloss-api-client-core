import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PartyExtRefInput } from 'app/services/api.service';
import { PartyService } from 'app/services/party.service';
import { GridComponent } from 'app/components/grid/grid.component';
import { PartyRefFormComponent } from '../forms/party.ref.form.component';

@Component({
  selector: 'app-party-extref',
  templateUrl: '../../generic-grid.html',
  providers: [GridComponent],
})
export class PartyExtRefComponent implements OnInit {
  constructor(public dialog: MatDialog, public partyService: PartyService) { }

  cols = this.partyService.getPartyExtRefCols();
  partyGql$;

  ngOnInit() {
    this.updateData();
  }

  public onNotify(event: any) {
    this.openDialog(event);
  }

  public updateData() {
    this.partyGql$ = this.partyService.getExtByRef();
  }

  openDialog(jsonData: any) {
    console.log('Party ExtRef Data', jsonData);
    const dialogRef = this.dialog.open(PartyRefFormComponent, {
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

  create(data: PartyExtRefInput) {
    this.partyService.createPartyExtRef(data);
    this.updateData();
  }

  update(data: PartyExtRefInput) {
    this.partyService.updatePartyExtRef(data);
    this.updateData();
  }

  delete(data: PartyExtRefInput) {
    this.partyService.deletePartyExtRef(
      data.party_ref,
      data.party_ext_ref_type
    );
    this.updateData();
  }

  public onFileUpload(filedata: any) {
    const data = JSON.parse(filedata);
    for (const element of data) {
      this.partyService.createPartyExtRef(element);
    }
  }
}
