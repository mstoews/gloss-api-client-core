import {
  Component,
  ChangeDetectionStrategy,
  OnInit,
  Input,
} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PartyClassificationFormComponent } from './forms/instr.class.form.component';
import { map } from 'rxjs/operators';
import * as glossApi from '../../services/glossapi.service';
import { InstrumentService } from './services/instrRef.service';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';

@Component({
  selector: 'app-instr-classifications',
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
export class InstrClassificationsComponent {
  constructor(
    public dialog: MatDialog,
    public instrService: InstrService,
    public apollo: Apollo
  ) { }

  title = 'Instrument Classification';
  partyRef = '';

  createInstrument = gql`
    mutation createAssocPartyInput($input: PartyInput!) {
      createAssocPartyInput(data: $input) {
        party_ref
      }
    }
  `;

  DeleteInstrumentClassification = gql`
    mutation deletePartyAssoc($ref: String!) {
      deletePartyAssoc(party_ref: $ref) {
        party_ref
      }
    }
  `;

  updateAssocParty = gql`
    mutation updatePartyAssoc($party_ref: String!, $input: PartyInput!) {
      updatePartyAssoc(party_ref: $party_ref, data: $input) {
        party_ref
      }
    }
  `;

  loading: boolean;
  partyGql$ = this.instruService.getClassByyRef();

  public cols = [
    { headerName: 'Party Ref', field: 'party_ref' },
    { headerName: 'Class Code', field: 'class_code' },
    { headerName: 'Class Type', field: 'class_type' },
    { headerName: 'Description', field: 'description' },
    { headerName: 'User Defined', field: 'user_def' },
    { headerName: 'Version', field: 'version_no' },
  ];

  public updateData() {
    // this.partyGql$ = this.partyService.getClassByyRef();
  }

  onNotify(event) {
    this.openDialog(event);
  }

  // tslint:disable-next-line: use-lifecycle-interface
  ngOnInit() {
    console.log('OnInit');
  }

  openDialog(jsonData: any) {
    const dialogRef = this.dialog.open(PartyClassificationFormComponent, {
      width: '380px',
      data: jsonData,
    });
    dialogRef.afterClosed().subscribe((result) => {
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

    create(data) {
     this.updateData();
    }

    update(data)
    {
      this.updateData();
    }

    delete(data){
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
