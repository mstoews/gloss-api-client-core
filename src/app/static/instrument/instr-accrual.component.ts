import { Component, ChangeDetectionStrategy, OnInit, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PartyAssocFormComponent } from './forms/instr.accrual.form.component';
import { InstrRefService } from '../instrument/services/instrRef.service';
import { InstrumentService} from '../instrument/services/instrument.service';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';


@Component({
  selector: 'app-party-assoc',
  template: `
    <ng-container *ngIf="partyGql$ | async as partyGql">
      <grid
      [cols]="cols"
      [rows]="partyGql"
      (notifyOpenDialog)="onNotify($event)">
      </grid>
    </ng-container>

  `,
  styles: ['.toolbar-spacer {   flex: 1 1 auto;}']
})

export class InstrAssocComponent implements OnInit {

  constructor(public dialog: MatDialog,
              public partyService: InstrumentService,
              public apollo: Apollo,
              private instrRefService: InstrRefService) { }

  partyGql$ = this.partyService.getAssocByRef();
  public cols = this.partyService.getAssocCols();

  createParty = gql`
              mutation createPartyAssocInput($input: PartyInput!) {
              createPartyInput(data: $input) {
                  party_ref
              }
            }
            `;

  deleteParty = gql`
            mutation deletePartyAssoc($ref: String!) {
              deletePartyByRef(party_ref: $ref) {
                party_ref
              }
            }
            `;

  updateParty = gql`mutation updatePartyAssoc($party_ref: String!,$party_ext_ref_type: String!, $data: PartyExtRefInput!) {
    updatePartyExtRef(party_ref: $party_ref, party_ext_ref_type: $party_ext_ref_type, data: $data) {
      party_ref
      party_ext_ref
      party_ext_ref_type
      description
      user_def
      version_user
    }
  }
  `;

  ngOnInit() {

  }

  onNotify(event) {
    console.log('Open Dialog for Association', event);
    this.openDialog(event);
  }

  public refreshData() {
    this.partyGql$ = this.partyService.getAssocByRef();
    this.cols = this.partyService.getAssocCols();
  }

  openDialog(jsonData: any) {
    console.log('Party Ext Ref', jsonData);
    const dialogRef = this.dialog.open(PartyAssocFormComponent, {
      width: '380px',
      data: jsonData
    });

    dialogRef.afterClosed().subscribe(result => {
      switch (result.event) {
        case 'Create':
          this.create(result.data);
          this.refreshData();
          break;
        case 'Update':
          console.log('Just before update', result.data );
          this.update(result.data);
          this.refreshData();
          break;
        case 'Delete':
          this.delete(result.data);
          this.refreshData();
          break;
        case 'Cancel':
          break;
      }
    });
  }


  create(data) {
    console.log('Creating :', data);
    this.apollo.mutate({
      mutation: this.createParty,
      variables: {
        input: data
      }
    }).subscribe();
  }

  update(partyData) {
    this.apollo.mutate({
      mutation: this.updateParty,
      variables: {
        party_ref: partyData.party_ref,
        party_ext_ref_type: partyData.party_ext_ref_type,
        data: partyData
      }
    }).subscribe();
  }

  delete(data) {
    this.apollo.mutate({
      mutation: this.deleteParty,
      variables: {
        ref: data.party_ref
      }
    }).subscribe();
    console.log('deleting');
    this.refreshData();
  }

  onAdd() {
    console.log('Did add');
  }

  onDelete() {
    console.log('Did delete');
  }

  onRefresh() {
    console.log('Did refresh');
    this.refreshData();
  }
  onSend() {
    console.log('Did save');
  }

  OnDestroy() {
  }
}
