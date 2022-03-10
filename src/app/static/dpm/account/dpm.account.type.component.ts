import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { GridComponent } from 'app/components/grid/grid.component';
import { DpmAccountInput } from 'app/services/api.service';
import { SnackService } from 'app/services/snack.service';
import { PartyService } from 'app/services/party.service';
import { Observable } from 'rxjs';
import { DpmAccountFormComponent } from '../forms/dpm.account.form.component';

@Component({
  selector: 'app-dpmaccount-type',
  templateUrl: '../../generic-grid.html',
  providers: [GridComponent],
})
export class DpmAccountTypeComponent implements OnInit {
  constructor(
    public dialog: MatDialog,
    public snackbar: SnackService,
    public partyService: PartyService
  ) { }

  @Input() public componentType;
  partyGql$: Observable<any>;
  cols: any;

  ngOnInit() {
    this.cols = this.partyService.getDpmAccountTypeCols();
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
    this.partyGql$ = this.partyService.getdpmAccountByRef(this.componentType);
  }

  openDialog(jsonData: any) {
    console.log('Account Type Data', jsonData);
    const dialogRef = this.dialog.open(DpmAccountFormComponent, {
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

  create(data: DpmAccountInput) {
    data.component_type = this.componentType;
    this.partyService.createdpmAccount(data);
    this.updateData();
  }

  update(data: DpmAccountInput) {
    this.partyService.updateDpmAccount(data);
    this.updateData();
  }

  delete(data: DpmAccountInput) {
    this.partyService.deleteDpmAccount(
      data.company_ref,
      data.party_ref,
      this.componentType,
      data.account_no
    );
    this.updateData();
  }

  public onFileUpload(filedata: any) {
    const data = JSON.parse(filedata);
    for (const element of data) {
      this.partyService.createdpmAccount(element);
    }
  }
}
