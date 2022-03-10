import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PartyAddressInput } from 'app/services/api.service';
import { PartyService } from 'app/services/party.service';
import { GridComponent } from 'app/components/grid/grid.component';
import { PartyAddressFormComponent } from '../forms/party.address.form.component';

@Component({
  selector: 'app-party-address',
  templateUrl: '../../generic-grid.html',
  providers: [GridComponent],
})
export class PartyAddressComponent implements OnInit {
  constructor(public dialog: MatDialog, public partyService: PartyService) { }

  title = 'Party Address';

  partyGql$ = this.partyService.getAddressByRef();
  cols = this.partyService.getPartyAddressCols();

  ngOnInit() { }

  public onNotify(event: any) {
    this.openDialog(event);
  }

  public updateData() {
    this.partyGql$ = this.partyService.getAddressByRef();
  }

  openDialog(jsonData: any) {
    console.log('Party Ext Ref', jsonData);
    const dialogRef = this.dialog.open(PartyAddressFormComponent, {
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

  create(data: PartyAddressInput) {
    this.partyService.createPartyAddress(data);
    this.updateData();
  }

  update(data: PartyAddressInput) {
    this.partyService.updatePartyAddress(data);
    this.updateData();
  }

  delete(data: PartyAddressInput) {
    this.partyService.deletePartyAddress(data.party_ref, data.addr_type);
    this.updateData();
  }

  onRefresh() {
    console.log('Address did refresh .. ');
    this.updateData();
  }

  OnDestroy() { }

  public onFileUpload(filedata: any) {
    const data = JSON.parse(filedata);
    for (const element of data) {
      this.partyService.createPartyAddress(element);
    }
  }
}
