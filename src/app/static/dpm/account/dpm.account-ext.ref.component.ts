import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { GridComponent } from 'app/components/grid/grid.component';
import { DpmAccountExtRefInput } from 'app/services/api.service';
import { PartyService } from 'app/services/party.service';
import { SnackService } from 'app/services/snack.service';
import { Observable } from 'rxjs';
import { DpmAccountRefFormComponent } from 'app/static/dpm/forms/dpm.account.ref.form.component';

@Component({
  selector: 'app-dpmaccount-extref',
  templateUrl: '../../generic-grid.html',
  providers: [GridComponent],
})
export class DpmAccountExtRefComponent implements OnInit {
  constructor(
    public dialog: MatDialog,
    public snackbar: SnackService,
    public partyService: PartyService
  ) { }

  @Input() public componentType;
  partyGql$: Observable<any>;
  cols: any;

  ngOnInit() {
    this.cols = this.partyService.getDpmAccountExtRefCols();
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
    this.partyGql$ = this.partyService.getdpmAccountExtByRef(this.componentType);
  }

  openDialog(jsonData: any) {
    console.log('Account ExtRef Data', jsonData);
    const dialogRef = this.dialog.open(DpmAccountRefFormComponent, {
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

  create(data: DpmAccountExtRefInput) {
    data.component_type = this.componentType;
    this.partyService.createdpmAccountExtRef(data);
    this.updateData();
  }

  update(data: DpmAccountExtRefInput) {
    this.partyService.updatedpmAccountExtRef(data);
    this.updateData();
  }

  delete(data: DpmAccountExtRefInput) {
    this.partyService.deletedpmAccountExtRef(
      data.company_ref,
      data.party_ref,
      this.componentType,
      data.account_no,
      data.account_ext_ref_type
    );
    this.updateData();
  }

  public onFileUpload(filedata: any) {
    const data = JSON.parse(filedata);
    for (const element of data) {
      this.partyService.createdpmAccountExtRef(element);
    }
  }
}
