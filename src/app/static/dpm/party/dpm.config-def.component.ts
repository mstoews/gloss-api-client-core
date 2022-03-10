import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { GridComponent } from 'app/components/grid/grid.component';
import { DpmConfigDefInput } from 'app/services/api.service';
import { PartyService } from 'app/services/party.service';
import { SnackService } from 'app/services/snack.service';
import { DpmConfigDefFormComponent } from 'app/static/dpm/forms/dpm.config.def.form.component';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-dpmconfig-def',
  templateUrl: '../../generic-grid.html',
  providers: [GridComponent],
})
export class DpmConfigDefComponent implements OnInit {
  constructor(
    public dialog: MatDialog,
    public snackbar: SnackService,
    public partyService: PartyService
  ) { }

  @Input() public componentType;
  partyGql$: Observable<any>;
  cols: any;

  ngOnInit() {
    this.cols = this.partyService.getDpmConfigDefCols();
    this.updateData();
  }

  public onNotify(event: any) {
    this.openDialog(event);
  }

  public updateData() {
    this.partyGql$ = this.partyService.dpmConfigDefByRef(this.componentType);
  }

  openDialog(jsonData: any) {
    const dialogRef = this.dialog.open(DpmConfigDefFormComponent, {
      width: '380px',
      data: jsonData,
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('Just before update', result.data);
      switch (result.event) {
        case 'Update':
          this.update(result.data);
          break;
        case 'Cancel':
          break;
      }
    });
  }

  update(data: DpmConfigDefInput) {
    this.partyService.updatedpmConfigDef(data);
    this.updateData();
  }

  public onFileUpload(filedata: any) {
    const data = JSON.parse(filedata);
    for (const element of data) {
      this.partyService.createdpmConfigDef(element);
    }
  }
}
