import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PartyTemplateInput } from 'app/services/api.service';
import { PartyService } from 'app/services/party.service';
import { GridComponent } from 'app/components/grid/grid.component';
import { PartyTemplateFormComponent } from '../forms/party.template.form.component';

@Component({
  selector: 'app-party-template',
  templateUrl: '../../generic-grid.html',
  providers: [GridComponent],
})
export class PartyTemplateComponent implements OnInit {
  constructor(public dialog: MatDialog, public partyService: PartyService) { }

  cols = this.partyService.getPartyTemplateCols();
  partyGql$;

  ngOnInit() {
    this.updateData();
  }

  public onNotify(event: any) {
    this.openDialog(event);
  }

  public updateData() {
    this.partyGql$ = this.partyService.getTemplateByRef();
  }

  openDialog(jsonData: any) {
    console.log('Party Template Data', jsonData);
    const dialogRef = this.dialog.open(PartyTemplateFormComponent, {
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

  create(data: PartyTemplateInput) {
    this.partyService.createPartyTemplate(data);
    this.updateData();
  }

  update(data: PartyTemplateInput) {
    this.partyService.updatePartyTemplate(data);
    this.updateData();
  }

  delete(data: PartyTemplateInput) {
    this.partyService.deletePartyTemplate(data.party_ref);
    this.updateData();
  }

  public onFileUpload(filedata: any) {
    const data = JSON.parse(filedata);
    for (const element of data) {
      this.partyService.createPartyTemplate(element);
    }
  }
}
