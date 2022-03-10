import { Component, Input, EventEmitter, Output } from '@angular/core';
import { ChangeDetectionStrategy } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { SSIFormComponent } from './forms/party.ssi.form';
import { map } from 'rxjs/operators';
import gql from 'graphql-tag';
import { PartyInstrByRefGQL } from '../../services/glossapi.service';
import { PartyService } from './company.services/party.service';
import { Apollo } from 'apollo-angular';

@Component({
  selector: 'app-party-instr',
  template: `
    <ng-container *ngIf="partyGql$ | async as partyGql">
      <grid [cols]="cols" [rows]="partyGql"> </grid>
    </ng-container>
  `,
  styles: ['.toolbar-spacer {   flex: 1 1 auto;}'],
})
export class InstrDateComponent {
  constructor(
    public dialog: MatDialog,
    private partyService: PartyService,
    private apollo: Apollo) {}

  partyGql$ = this.partyService.getInstByRef();
  cols = this.partyService.getInstrCols();

  createPartyInstr = gql`
    mutation createPartyInstr($data: PartyExtRefInput!) {
      createPartyExtRef(data: $data) {
        party_ref
        party_ext_ref
        party_ext_ref_type
      }
    }
  `;

  deletePartyInstr = gql`
    mutation deletePartyInstr($ref: String!) {
      deletePartyByRef(party_ref: $ref) {
        party_ref
      }
    }
  `;

  updatePartyInstr = gql`
    mutation updatePartyInstr(
      $party_ref: String!
      $party_ext_ref_type: String!
      $data: PartyExtRefInput!
    ) {
      updatePartyInst(
        party_ref: $party_ref
        party_ext_ref_type: $party_ext_ref_type
        data: $data
      ) {
        party_ref
        party_ext_ref
        party_ext_ref_type
        description
        user_def
        version_user
      }
    }
  `;

  public updateData() {
    this.partyGql$ = this.partyService.getInstByRef();
    this.cols = this.partyService.getInstrCols();
  }
  openDialog(jsonData: any) {
    console.log('Party Ext Ref', jsonData);
    const dialogRef = this.dialog.open(SSIFormComponent, {
      width: '380px',
      data: jsonData,
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('Just before update', result.data);
      switch (result.event) {
        case 'Create':
          this.create(result.data);
          this.updateData();
          break;
        case 'Update':
          this.update(result.data);
          this.updateData();
          break;
        case 'Delete':
          this.delete(result.data);
          this.updateData();
          break;
        case 'Cancel':
          break;
      }
    });
  }

  create(data) {
    console.log('Creating :', data);
    this.apollo
      .mutate({
        mutation: this.createPartyInstr,
        variables: {
          party_ref: data.party_ref,
          party_ext_ref_type: data.party_ext_ref_type,
          data,
        },
      })
      .subscribe();
    this.updateData();
  }

  update(data) {
    this.apollo
      .mutate({
        mutation: this.updatePartyInstr,
        variables: {
          party_ref: data.party_ref,
          party_ext_ref_type: data.party_ext_ref_type,
          data,
        },
      })
      .subscribe();
    this.updateData();
  }

  delete(data) {
    this.apollo
      .mutate({
        mutation: this.deletePartyInstr,
        variables: {
          ref: data.party_ref,
        },
      })
      .subscribe();
    console.log('deleting');
    this.updateData();
  }

  onAdd() {
    console.log('Did add');
  }

  onDelete() {
    console.log('Did delete');
  }

  onRefresh() {
    console.log('Did refresh');
    this.updateData();
  }
  onSend() {
    console.log('Did save');
  }
}
