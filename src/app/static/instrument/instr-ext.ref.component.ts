import { Component, ChangeDetectionStrategy, OnInit, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PartyRefFormComponent } from './forms/instr.ref.form.component';
import { InstrumentService} from './services/instrument.service';
import { InstrRefService} from './services/instrRef.service';
import { GridComponent } from '../../components/grid/grid.component';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';

@Component({
  selector: 'app-party-ref',
  template: `
    <ng-container *ngIf="partyGql$ | async as partyGql">
      <grid
      [cols]="cols"
      [rows]="partyGql"
      (onPartyRefChanged)="onPartyRefChanged($event)"
      (notifyOpenDialog)="onNotify($event)">
      </grid>
    </ng-container>
  `,
  styles: ['.toolbar-spacer {flex: 1 1 auto;}'],
  providers: [GridComponent],
})

export class InstrRefComponent implements OnInit {
  constructor(
    public dialog: MatDialog,
    public instrService: InstrumentService,
    public apollo: Apollo,
    public instrRefService: InstrRefService) {
      instrRefService.instrTypeUpdated.subscribe(
        (partyRef: string) => {
          this.inRef = partyRef;
          console.log('partyRef value is updated on saved', partyRef);
       });
    }

  createPartyExtRef = gql`
              mutation createPartyExtRef($data: PartyExtRefInput!) {
              createPartyExtRef(data: $data) {
                party_ref
                party_ext_ref
                party_ext_ref_type
                }
              }`;

  deleteExtRefParty = gql`
            mutation deleteExtRefParty($ref: String!) {
              deletePartyByRef(party_ref: $ref) {
                party_ref
              }
            }
            `;

  @Input() public inRef: string;
  title = 'Client Component';
  partyGql$ = this.instrService.getExtByRef();
  cols = this.instrService.getExtCols();

  ngOnInit() {

  }

  public onNotify(event: any) {
    this.openDialog(event);
  }

  public onPartyRefChanged(event: any) {
  }

  public refreshData() {
    this.partyGql$ = this.instrService.getExtByRef();
  }

openDialog(jsonData: any) {
    console.log('Party Ext Ref', jsonData);
    const dialogRef = this.dialog.open(PartyRefFormComponent, {
      width: '380px',
      data: jsonData
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('Just before update', result.data );
      switch (result.event) {
        case 'Create':
          this.create(result.data);
          break;
        case 'Update':
          this.instrService.updatePartyExtRef(result.data.party_ref, result.data.party_ext_ref_type, result.data);
          break;
        case 'Delete':
          this.delete(result.data);
          break;
        case 'Cancel':
          break;
      }
      this.refreshData();
    });
  }

create(extRefData) {
    console.log('Creating :', extRefData);
    this.apollo.mutate({
      mutation: this.createPartyExtRef,
      variables: {
        party_ref: extRefData.party_ref,
        party_ext_ref_type: extRefData.party_ext_ref_type,
        data: extRefData
      }
    }).subscribe();
    this.refreshData();
  }


delete(extRefData) {
    this.apollo.mutate({
      mutation: this.deleteExtRefParty,
      variables: {
        ref: extRefData.party_ref
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
