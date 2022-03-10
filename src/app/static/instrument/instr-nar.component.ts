import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PartyNarrativeFormComponent } from './forms/instr.narrative.form.component';
import { PartyService } from './company.services/party.service';

import { GridComponent } from '../../components/grid/grid.component';
import gql from 'graphql-tag';
import { Apollo } from 'apollo-angular';

@Component({
    selector: 'app-party-narr',
    template: `
    <ng-container *ngIf="partyGql$ | async as partyGql">
      <grid
      [cols]="cols"
      [rows]="partyGql"
      (notifyOpenDialog)="onNotify($event)">
      </grid>
    </ng-container>
  `,
    styles: ['.toolbar-spacer {flex: 1 1 auto;}'],
    providers: [GridComponent],
})

export class InstrNarrativeComponent {
    constructor(public dialog: MatDialog,
                public instruService: InstuService,
                private apollo: Apollo) { }

    partyGql$ = this.instruService.getNarrativeByRef();
    cols = this.instruService.getNarrativeCols();

    createPartyExtRef = gql`
              mutation createNarrativeParty($data: PartyExtRefInput!) {
              createPartyExtRef(data: $data) {
                party_ref
                party_ext_ref
                party_ext_ref_type
                }
              }`;

    deleteParty = gql`
            mutation deleteNarrative($ref: String!) {
              deleteNarrative(party_ref: $ref) {
                party_ref
              }
            }
            `;

    updateParty = gql`
    mutation updateNarrative($party_ref: String!,$party_ext_ref_type: String!, $data: PartyExtRefInput!) {
    updateNarrative(party_ref: $party_ref, party_ext_ref_type: $party_ext_ref_type, data: $data) {
      party_ref
      party_ext_ref
      party_ext_ref_type
      description
      user_def
      version_user
    }
  }
  `;
    onPartyRefChanged(event) {
        this.partyGql$ = this.partyService.getNarrativeByRef();
        this.cols = this.partyService.getNarrativeCols();
    }

    onNotify(event: any) {
        this.openDialog(event);
    }

    public updateData() {
        this.partyGql$ = this.partyService.getNarrativeByRef();
        this.cols = this.partyService.getNarrativeCols();
    }

    openDialog(jsonData: any) {
        console.log('Party Ext Ref', jsonData);
        const dialogRef = this.dialog.open(PartyNarrativeFormComponent, {
            width: '380px',
            data: jsonData
        });

        dialogRef.afterClosed().subscribe(result => {
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
        this.apollo.mutate({
            mutation: this.createPartyExtRef,
            variables: {
                party_ref: data.party_ref,
                party_ext_ref_type: data.party_ext_ref_type,
                data
            }
        }).subscribe();
        this.updateData();
    }

    update(data) {
        this.apollo.mutate({
            mutation: this.updateParty,
            variables: {
                party_ref: data.party_ref,
                party_ext_ref_type: data.party_ext_ref_type,
                data
            }
        }).subscribe();
        this.updateData();
    }

    delete(data) {
        this.apollo.mutate({
            mutation: this.deleteParty,
            variables: {
                ref: data.party_ref
            }
        }).subscribe();
        console.log('deleting');
        this.updateData();
    }


    OnDestroy() {
    }
}
