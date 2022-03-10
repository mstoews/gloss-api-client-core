import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PartyClassInput } from 'app/services/api.service';
import { GridComponent } from 'app/components/grid/grid.component';
import { PartyClassificationFormComponent } from '../forms/party.class.form.component';
import { PartyService } from 'app/services/party.service';

@Component({
  selector: 'app-classifications',
  templateUrl: '../../generic-grid.html',
  providers: [GridComponent],
})
export class PartyClassificationsComponent implements OnInit {
  constructor(public dialog: MatDialog, public partyService: PartyService) { }

  cols = this.partyService.getClassCols();
  partyGql$;

  ngOnInit() {
    this.updateData();
  }

  public onNotify(event: any) {
    this.openDialog(event);
  }

  public updateData() {
    this.partyGql$ = this.partyService.getClassByRef();
  }

  openDialog(jsonData: any) {
    console.log('Party Classification Data', jsonData);
    const dialogRef = this.dialog.open(PartyClassificationFormComponent, {
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

  create(data: PartyClassInput) {
    this.partyService.createPartyClassification(data);
    this.updateData();
  }

  update(data: PartyClassInput) {
    this.partyService.updatePartyClassification(data);
    this.updateData();
  }

  delete(data: PartyClassInput) {
    this.partyService.deletePartyClassification(
      data.party_ref,
      data.class_type
    );
    this.updateData();
  }

  public onFileUpload(filedata: any) {
    const data = JSON.parse(filedata);
    for (const element of data) {
      this.partyService.createPartyClassification(element);
    }
  }
}
