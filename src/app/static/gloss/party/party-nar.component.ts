import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { GridComponent } from 'app/components/grid/grid.component';
import { PartyNarrativeInput } from 'app/services/api.service';
import { PartyService } from 'app/services/party.service';
import { PartyNarrativeFormComponent } from '../forms/party.narrative.form.component';

@Component({
  selector: 'app-party-narr',
  templateUrl: '../../generic-grid.html',
  providers: [GridComponent],
})
export class PartyNarrativeComponent implements OnInit {
  constructor(public dialog: MatDialog, public partyService: PartyService) { }

  cols = this.partyService.getPartyNarrativeCols();
  partyGql$;

  ngOnInit() {
    this.updateData();
  }

  public onNotify(event: any) {
    this.openDialog(event);
  }

  public updateData() {
    this.partyGql$ = this.partyService.getNarrativeByRef();
  }

  openDialog(jsonData: any) {
    console.log('Party Narrative Data', jsonData);
    const dialogRef = this.dialog.open(PartyNarrativeFormComponent, {
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

  create(data: PartyNarrativeInput) {
    this.partyService.createPartyNarrative(data);
    this.updateData();
  }

  update(data: PartyNarrativeInput) {
    this.partyService.updatePartyNarrative(data);
    this.updateData();
  }

  delete(data: PartyNarrativeInput) {
    this.partyService.deletePartyNarrative(data.party_ref, data.narr_type);
    this.updateData();
  }

  public onFileUpload(filedata: any) {
    const data = JSON.parse(filedata);
    for (const element of data) {
      this.partyService.createPartyNarrative(element);
    }
  }
}
