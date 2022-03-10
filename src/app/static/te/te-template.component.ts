import { Component, OnInit } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { GridComponent } from 'app/components/grid/grid.component';
import { TeTemplateInput } from "app/services/api.service";
import { PartyService } from "app/services/party.service";
import { TeTemplateFormComponent } from "./te-template-form";

@Component({
  selector: 'app-te-template',
  template: `
    <app-menubar
      (notifyParentAdd)="onAdd()"
      (notifyParentRefresh)="onRefresh()"
      inTitle="{{ outTitle }}"
    >
    </app-menubar>
    <ng-container *ngIf="partyGql$ | async as partyGql">
      <grid
        [cols]="cols"
        [rows]="partyGql"
        (notifyOpenDialog)="onNotify($event)"
      >
      </grid>
    </ng-container>
  `,
  providers: [GridComponent],
})
export class TETemplateComponent implements OnInit {
  constructor(public dialog: MatDialog, public partyService: PartyService) { }

  cols = this.partyService.getTeTemplateCols();
  partyGql$;
  outTitle = 'TE TEMPLATES';

  ngOnInit() {
    this.updateData();
  }

  public onNotify(event: any) {
    this.openDialog(event);
  }

  public updateData() {
    this.partyGql$ = this.partyService.getTeTemplates();
  }

  openDialog(jsonData: any) {
    console.log('TE Template Data', jsonData);
    const dialogRef = this.dialog.open(TeTemplateFormComponent, {
      width: '380px',
      data: jsonData,
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('Just before update', result.data);
      switch (result.event) {
        case 'Create':
          this.create(result.data);
          break;
        case 'Export':
          this.export(result.data);
          break;
        case 'Delete':
          this.delete(result.data);
          break;
        case 'Cancel':
          break;
      }
    });
  }

  onAdd() {
    const event = { index: 0, tab: 'MatTab' };
    this.onNotify(event);
  }

  onRefresh() {
    this.updateData();
  }

  create(data: TeTemplateInput) {
    this.partyService.createTeTemplate(data);
    this.updateData();
  }

  export(data: TeTemplateInput) {
    this.exportTETemplate(data);
  }

  delete(data: TeTemplateInput) {
    this.partyService.deleteTeTemplate(data.component_type, data.template_type);
    this.updateData();
  }

  exportTETemplate(data: TeTemplateInput) {
    const blob = new Blob([data.template_data], { type: 'text/xml' });
    const anchor = document.createElement('a');
    anchor.download = data.template_type + '.xml';
    anchor.href = (window.webkitURL || window.URL).createObjectURL(blob);
    anchor.click();
  }

}
