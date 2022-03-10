import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { GridComponent } from 'app/components/grid/grid.component';
import { DpmAccountFlagInput } from 'app/services/api.service';
import { SnackService } from 'app/services/snack.service';
import { DpmAccountFlagFormComponent } from 'app/static/dpm/forms/dpm.account.flag.form.component';
import { PartyService } from 'app/services/party.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-dpmaccount-flag',
  templateUrl: '../../generic-grid.html',
  providers: [GridComponent],
})
export class DpmAccountFlagComponent implements OnInit {
  constructor(
    public dialog: MatDialog,
    public snackbar: SnackService,
    public partyService: PartyService
  ) { }

  @Input() public componentType;
  partyGql$: Observable<any>;
  cols: any;

  ngOnInit() {
    this.cols = this.partyService.getDpmAccountFlagCols();
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
    this.partyGql$ = this.partyService.dpmAccountFlagByRef(this.componentType);
  }

  openDialog(jsonData: any) {
    console.log('Account Flag Data', jsonData);
    const dialogRef = this.dialog.open(DpmAccountFlagFormComponent, {
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

  create(data: DpmAccountFlagInput) {
    data.component_type = this.componentType;
    this.partyService.createdpmAccountFlag(data);
    this.updateData();
  }

  update(data: DpmAccountFlagInput) {
    this.partyService.updatedpmAccountFlag(data);
    this.updateData();
  }

  delete(data: DpmAccountFlagInput) {
    this.partyService.deletedpmAccountFlag(
      data.company_ref,
      data.party_ref,
      this.componentType,
      data.account_no,
      data.account_flag_type,
      data.account_flag
    );
    this.updateData();
  }

  public onFileUpload(filedata: any) {
    const data = JSON.parse(filedata);
    for (const element of data) {
      this.partyService.createdpmAccountFlag(element);
    }
  }
}
