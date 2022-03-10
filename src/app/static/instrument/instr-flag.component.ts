import {
  Component,
  ChangeDetectionStrategy,
  OnInit,
  Input,
} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Apollo } from 'apollo-angular';
import { PartyFlagFormComponent } from './forms/instr.flags.form.component';
import { PartyService } from '../party/party.services/party.service';
import gql from 'graphql-tag';
import { PartyRefService } from 'app/static/party/party.services/partyRef.service';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'party-flag',
  template: `
    <ng-container *ngIf="partyGql$ | async as partyGql">
      <grid
        [cols]="cols"
        [rows]="partyGql"
        (notifyOpenDialog)="onNotify($event)"
      >
      </grid>
    </ng-container>
  `,
  styles: ['.toolbar-spacer {   flex: 1 1 auto;}'],
})
export class InstrFlagComponent implements OnInit {
  constructor(
    public dialog: MatDialog,
    private partyService: PartyService,
    private apollo: Apollo
  ) {}
  @Input() outTitle = 'Party Flag';
  @Input() public partyRef: string;


  deletePartyFlag = gql`
    mutation deletePartyFlag($ref: String!) {
      deletePartyByRef(party_ref: $ref) {
        party_ref
      }
    }
  `;

  updatePartyFlag = gql`
    mutation updatePartyFlag(
      $party_ref: String!
      $party_ext_ref_type: String!
      $data: PartyExtRefInput!
    ) {
      updatePartyExtRef(
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

  loading: boolean;
  partyGql$ = this.partyService.getFlagByRef();
  cols = this.partyService.getFlagCols();

  onNotify(event) {
    this.openDialog(event);
  }

  ngOnInit() {}

  public updateData() {

    this.partyGql$ = this.partyService.getFlagByRef();
    this.cols = this.partyService.getFlagCols();
  }

  openDialog(jsonData: any) {
    console.log('Party Ext Ref', jsonData);
    const dialogRef = this.dialog.open(PartyFlagFormComponent, {
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

  create(flagData) {
    // graphql query we are calling to create party flag.
    const createPartyFlag = gql`mutation createPartyFlag($data: PartyExtRefInput!) {
                                createPartyFlag(data: $data) {
      }
    }`;

    console.log('Creating party flag:', flagData);
    this.apollo
      .mutate({
        mutation: createPartyFlag,
        variables: {
          party_ref: flagData.party_ref,
          party_ext_ref_type: flagData.party_ext_ref_type,
          data: flagData,
        },
      })
      .subscribe();
    this.updateData();
  }

  update(updateData) {
    const updatePartyFlag = gql`
    mutation updatePartyFlag(
      $party_ref: String!
      $party_ext_ref_type: String!
      $data: PartyExtRefInput!
    ) {
      updatePartyExtRef(
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
    this.apollo
      .mutate({
        mutation: updatePartyFlag,
        variables: {
          party_ref: updateData.party_ref,
          party_ext_ref_type: updateData.party_ext_ref_type,
          data: updateData,
        },
      })
      .subscribe();
    this.updateData();
  }

  delete(data) {
    this.apollo
      .mutate({
        mutation: this.deletePartyFlag,
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
