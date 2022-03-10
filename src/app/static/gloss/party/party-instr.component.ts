import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PartyInstrInput } from 'app/services/api.service';
import { PartyService } from 'app/services/party.service';
import { GridComponent } from 'app/components/grid/grid.component';
import { PartyInstrumentFormComponent } from '../forms/party.instru.form.component';

@Component({
  selector: 'app-party-instr',
  templateUrl: '../../generic-grid.html',
  providers: [GridComponent],
})
export class PartyInstrComponent implements OnInit {
  constructor(public dialog: MatDialog, public partyService: PartyService) { }

  cols = this.partyService.getPartyInstrCols();
  partyGql$;

  ngOnInit() {
    this.updateData();
  }

  public onNotify(event: any) {
    this.openDialog(event);
  }

  public updateData() {
    this.partyGql$ = this.partyService.getInstrByRef();
  }

  openDialog(jsonData: any) {
    console.log('Party Instr Data', jsonData);
    const dialogRef = this.dialog.open(PartyInstrumentFormComponent, {
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

  create(data: PartyInstrInput) {
    this.partyService.createPartyInstr(data);
    this.updateData();
  }

  update(data: PartyInstrInput) {
    this.partyService.updatePartyInstr(data);
    this.updateData();
  }

  delete(data: PartyInstrInput) {
    this.partyService.deletePartyInstr(
      data.party_ref,
      data.instr_type,
      data.instr_ref_type,
      data.instr_ref
    );
    this.updateData();
  }

  public onFileUpload(filedata: any) {
    const data = JSON.parse(filedata);
    for (const element of data) {
      this.partyService.createPartyInstr(element);
    }
  }
}
