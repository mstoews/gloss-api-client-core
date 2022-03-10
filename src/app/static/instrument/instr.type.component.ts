import { Component, OnInit, Input, EventEmitter, Output, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PartyFormComponent } from './forms/instr.form.dlg.component';
import { InstrumentService } from './services/instrument.service';
import { Apollo } from 'apollo-angular';
import { GridComponent } from '../../components/grid/grid.component';
import gql from 'graphql-tag';
import { InstrRefService } from 'app/static/party/party.services/partyRef.service';
import { BaseTypeComponent } from '../base/base-type.component';



@Component({
  selector: 'app-party-type',
  template: `
    <ng-container *ngIf="partyGql$ | async as partyGql">
      <grid
      [cols]="cols"
      [rows]="partyGql"
      (notifyParentAdd)="onRefresh()"
      (notifyParentSend)="onSend()"
      (notifyOpenDialog)="onNotify($event)"
      (onSelectedPartyRef)="onSelectedPartyRef($event)">
      </grid>
    </ng-container>
  `,
  styles: ['.toolbar-spacer {flex: 1 1 auto;}']
})

export class InstrTypeComponent extends BaseTypeComponent {
  constructor(dialog: MatDialog,
              partyService: PartyService,
              apollo: Apollo,
              partyRefService: PartyRefService)
    {
      super(dialog, partyService, apollo, partyRefService);
   }
  @Input() public partyType = 'COMP';
  @Input() public partyRef: string;

  partyGql$ = this.partyService.getPartyByTypeS('COMP');
  partyTree$ = this.partyService.getTreeByRef('CMP10');
  cols = this.partyService.getPartyTypeCols();

  bIsTypeSelected = this.partyService.isPartyTypeSelected;

  // tslint:disable-next-line: use-lifecycle-interface
  ngOnInit(){
    console.log('OnInit');
    this.partyGql$ = this.partyService.getPartyByTypeS(this.partyType);
  }

  public getPartyType() {
    return this.partyType;
  }

  onNotify(event: any) {
    this.openDialog(event);
  }

  onSelectedPartyRef(partyRef: string) {
    console.log('companyType.onSelectedPartyRef:', partyRef);
    this.partyService.setRef(partyRef);
  }

  public updateData() {
    this.partyService.getTreeByRef('CMP10').subscribe((data: any) => {
      console.log('data tree', data);
    });
    this.partyService.getFirstType('COMP').subscribe((data: any) => {
      this.partyService.setRef(data.party_ref);
      this.partyService.setType(data.party_type);
    });
    this.partyGql$  = this.partyService.getPartyByTypeS('COMP');
  }

  create(data){
    this.partyService.createParty(data);
    this.updateData();
  }

  update(data) {
    this.partyService.updatePartyByRef(data.party_ref, data);
    this.updateData();
  }

  delete(data) {
    this.partyService.deletePartyByRef(data.party_ref);
    this.updateData();
  }

  onRefresh() {
    this.updateData();
  }

}
