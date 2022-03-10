import { Component, Input, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { GridComponent } from 'app/components/grid/grid.component';
import { JsdcFileDefInput } from 'app/services/api.service';
import { SnackService } from 'app/services/snack.service';
import { JsdcFileDefFormComponent } from 'app/static/dpm/forms/jsdcfiledef.form.component';
import { PartyService } from 'app/services/party.service';
import { FilesCloneFormComponent } from './forms/files.clone.form.component';

@Component({
  selector: 'app-jsdcfiledef',
  template: `
    <app-menubar
      (notifyParentSend)="onSend()"
      (notifyParentRefresh)="onRefresh()"
      (notifyParentDelete)="onDelete()"
      (notifyParentAdd)="onAdd()"
      (notifyParentClone)="onClone()"
      inTitle="{{ outTitle }}"
    >
    </app-menubar>
    <ng-container *ngIf="jsdcfiledefGql$ | async as jsdcfiledefGql">
      <grid
        [cols]="cols"
        [rows]="jsdcfiledefGql"
        (notifyFileUpload)="onFileUpload($event)"
        (notifyOpenDialog)="onNotify($event)"
      >
      </grid>
    </ng-container>
  `,
  providers: [GridComponent],
})
export class JsdcFileDefComponent implements OnInit {
  constructor(
    public dialog: MatDialog,
    public activatedroute: ActivatedRoute,
    private snackService: SnackService,
    public partyService: PartyService
  ) { }

  @Input() public componentType;

  outTitle = 'FILES';
  jsdcfiledefGql$;
  cols;

  ngOnInit() {
    this.activatedroute.data.subscribe((data) => {
      this.componentType = data.componentType;
    });
    this.cols = this.partyService.getjsdcfiledefCols();
    this.updateData();
  }

  onRefresh() {
    this.updateData();
  }

  public onNotify(event: any) {
    this.openDialog(event);
  }

  public updateData() {
    this.jsdcfiledefGql$ = this.partyService.getjsdcfiledef(this.componentType);
  }

  onSend() {
    this.partyService.sendJsdcFileDefStatic(this.componentType, localStorage.getItem('jasdecenv'));
  }

  onAdd() {
    const event = { index: 0, tab: 'MatTab' };
    this.onNotify(event);
  }

  openDialog(jsonData: any) {
    const dialogRef = this.dialog.open(JsdcFileDefFormComponent, {
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

  create(data: JsdcFileDefInput) {
    data.component_type = this.componentType;
    this.partyService.createjsdcfiledef(data);
    this.updateData();
  }

  update(data: JsdcFileDefInput) {
    this.partyService.updatejsdcfiledef(data);
    this.updateData();
  }

  delete(data: JsdcFileDefInput) {
    this.partyService.deletejsdcfiledef(this.componentType, data.file_name);
    this.updateData();
  }

  onClone() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = '500px';

    const dialogRef = this.dialog.open(
      FilesCloneFormComponent,
      dialogConfig
    );
    dialogRef.afterClosed().subscribe((result) => {
      console.log(result);
      switch (result.event) {
        case 'Clone':
          let clone$ = this.partyService.cloneJsdcFileDef('CORE', result.data.product_group, this.componentType);
          clone$.subscribe({
            next: (val) => {
              this.onRefresh();
              this.snackService.showMessage('JsdcFileDef data has been cloned');
            },
            error: (err) =>
              this.snackService.showMessage(
                'The update had an error :' + err.message
              ),
          });
          break;
        case 'Cancel':
          break;
      }
    });
  }

  onDelete() {
    this.snackService.showMessage(
      'You cannot delete jsdcfiledef data using this button. Try deleting the rows individually'
    );
  }

  public onFileUpload(filedata: any) {
    const data = JSON.parse(filedata);
    for (const element of data) {
      this.partyService.createjsdcfiledef(element);
    }
  }
}
