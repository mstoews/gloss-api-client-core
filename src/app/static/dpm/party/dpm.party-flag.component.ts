import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { GridComponent } from 'app/components/grid/grid.component';
import { DpmPartyFlagInput } from 'app/services/api.service';
import { SnackService } from 'app/services/snack.service';
import { DpmPartyFlagFormComponent } from 'app/static/dpm/forms/dpm.party.flag.form.component';
import { PartyService } from 'app/services/party.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-dpmparty-flag',
  templateUrl: '../../generic-grid.html',
  providers: [GridComponent],
})
export class DpmPartyFlagComponent implements OnInit {
  constructor(
    public dialog: MatDialog,
    public snackbar: SnackService,
    public partyService: PartyService
  ) { }

  @Input() public componentType;
  partyGql$: Observable<any>;
  cols: any;

  ngOnInit() {
    this.cols = this.partyService.getdpmPartyFlagCols();
    this.updateData();
  }

  public onNotify(event: any) {
    if (localStorage.getItem('jasdecenv') === null) {
      this.snackbar.showMessage(
        'Please activate the environment you would like to push/pull the static using Home Component'
      );
    } else {
      this.openDialog(event);
    }
  }

  public updateData() {
    this.partyGql$ = this.partyService.dpmPartyflagByRef(this.componentType);
  }

  openDialog(jsonData: any) {
    console.log('Party Flag Data', jsonData);
    const dialogRef = this.dialog.open(DpmPartyFlagFormComponent, {
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

  create(data: DpmPartyFlagInput) {
    data.component_type = this.componentType;
    this.partyService.createdpmPartyFlag(data);
    this.updateData();
  }

  update(data: DpmPartyFlagInput) {
    this.partyService.updatedpmPartyFlag(data);
    this.updateData();
  }

  delete(data: DpmPartyFlagInput) {
    this.partyService.deletedpmPartyFlag(
      data.company_ref,
      data.party_ref,
      this.componentType,
      data.party_flag_type,
      data.party_flag
    );
    this.updateData();
  }

  public onFileUpload(filedata: any) {
    const data = JSON.parse(filedata);
    for (const element of data) {
      this.partyService.createdpmPartyFlag(element);
    }
  }
}
