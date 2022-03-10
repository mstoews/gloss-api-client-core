import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { DatabasesInput } from 'app/services/api.service';
import { SnackService } from 'app/services/snack.service';
import { DatabaseFormComponent } from 'app/static/dpm/forms/database.form.component';
import { PartyService } from 'app/services/party.service';
import { GridComponent } from 'app/components/grid/grid.component';

@Component({
  selector: 'app-database',
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
    <ng-container *ngIf="databaseGql$ | async as databaseGql">
      <grid
        [cols]="cols"
        [rows]="databaseGql"
        (notifyFileUpload)="onFileUpload($event)"
        (notifyOpenDialog)="onNotify($event)"
      >
      </grid>
    </ng-container>
  `,
  providers: [GridComponent],
})
export class DatabaseComponent implements OnInit {
  constructor(
    public dialog: MatDialog,
    public activatedroute: ActivatedRoute,
    private snackService: SnackService,
    public partyService: PartyService
  ) { }

  cols;
  databaseGql$;
  @Input() public componentType;
  outTitle = 'DATABASES';

  ngOnInit() {
    this.activatedroute.data.subscribe((data) => {
      this.componentType = data.componentType;
    });
    this.cols = this.partyService.getDatabasesCols();
    this.updateData();
  }

  onRefresh() {
    this.updateData();
  }

  public onNotify(event: any) {
    this.openDialog(event);
  }

  public updateData() {
    this.databaseGql$ = this.partyService.getdatabases(this.componentType);
  }

  onSend() {
    this.partyService.sendDataBasesStatic(this.componentType);
  }

  onAdd() {
    const event = { index: 0, tab: 'MatTab' };
    this.onNotify(event);
  }

  openDialog(jsonData: any) {
    const dialogRef = this.dialog.open(DatabaseFormComponent, {
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

  create(data: DatabasesInput) {
    data.component_type = this.componentType;
    this.partyService.createdatabase(data);
    this.updateData();
  }

  update(data: DatabasesInput) {
    this.partyService.updatedatabase(data);
    this.updateData();
  }

  delete(data: DatabasesInput) {
    this.partyService.deletedatabase(
      this.componentType,
      data.database_type,
      data.database_code
    );
    this.updateData();
  }

  onClone() {
    let clone$ = this.partyService.cloneDatabases('CORE', this.componentType);
    clone$.subscribe({
      next: (val) => {
        this.onRefresh();
        this.snackService.showMessage('Databases data has been cloned');
      },
      error: (err) =>
        this.snackService.showMessage(
          'The update had an error :' + err.message
        ),
    });
  }

  onDelete() {
    this.snackService.showMessage(
      'You cannot delete databases data using this button. Try deleting the rows individually'
    );
  }

  public onFileUpload(filedata: any) {
    const data = JSON.parse(filedata);
    for (const element of data) {
      this.partyService.createdatabase(element);
    }
  }
}
