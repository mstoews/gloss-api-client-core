import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ClassAssocInput } from 'app/services/api.service';
import { PartyService } from 'app/services/party.service';
import { GridComponent } from 'app/components/grid/grid.component';
import { ClassAssocFormComponent } from '../../forms/classassoc.form.component';

@Component({
  selector: 'app-party-classassoc',
  templateUrl: '../../../generic-grid.html',
  providers: [GridComponent],
})
export class ClassAssocGridComponent implements OnInit {
  constructor(public dialog: MatDialog, public partyService: PartyService) { }

  title = 'Party ClassAssoc';

  partyGql$;
  cols = this.partyService.getPartyClassAssocCols();

  ngOnInit() {
    this.updateData();
  }

  public onNotify(event: any) {
    this.openDialog(event);
  }

  public updateData() {
    this.partyGql$ = this.partyService.getClassAssocByRef();
  }

  openDialog(jsonData: any) {
    console.log('Party Ext Ref', jsonData);
    const dialogRef = this.dialog.open(ClassAssocFormComponent, {
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

  create(data: ClassAssocInput) {
    data.class_1 = Number(data.class_1);
    data.class_2 = Number(data.class_2);
    this.partyService.createPartyClassAssoc(data);
    this.updateData();
  }

  update(data: ClassAssocInput) {
    data.class_1 = Number(data.class_1);
    data.class_2 = Number(data.class_2);
    this.partyService.updatePartyClassAssoc(data);
    this.updateData();
  }

  delete(data: ClassAssocInput) {
    this.partyService.deletePartyClassAssoc(data.party_ref, data.class_assoc_code, data.code_type, data.class_1, data.code_1, data.class_2);
    this.updateData();
  }

  onRefresh() {
    console.log('ClassAssoc did refresh .. ');
    this.updateData();
  }

  OnDestroy() { }

  public onFileUpload(filedata: any) {
    const data = JSON.parse(filedata);
    for (const element of data) {
      this.partyService.createPartyClassAssoc(element);
    }
  }
}
