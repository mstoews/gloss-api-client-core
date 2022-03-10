import { Component, Input, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { Party } from 'app/services/api.service';
import { PartyService } from 'app/services/party.service';
import { PartyRefService } from 'app/services/partyRef.service';
import { SnackService } from 'app/services/snack.service';
import { PartyGroupComponent } from './party-group.component';
import { PartyRestoreComponent } from '../../party-restore';
import { PartyCloneFormComponent } from '../forms/party.clone.form';

@Component({
  selector: 'app-party',
  template: `
    <app-menubar
      (notifyParentSend)="onSend()"
      (notifyParentRefresh)="onRefresh()"
      (notifyParentAdd)="onAdd()"
      (notifyParentClone)="onClone()"
      (notifyParentBackUp)="onBackUp()"
      (notifyParentRestore)="onRestore()"
      inTitle="{{ partyType }}"
      inPartyRef="{{ partyRef }}"
    >
    </app-menubar>
    <app-party-group
      party_type="{{ partyType }}"
      component_type="{{ componentType }}"
    >
    </app-party-group>
  `,
})
export class PartyComponent {
  constructor(
    public partyService: PartyService,
    public partyRefService: PartyRefService,
    public activatedroute: ActivatedRoute,
    public snackService: SnackService,
    public dialog: MatDialog
  ) {
    this.partyRefService.partyUpdated.subscribe((party) => {
      this.party = party;
      this.partyRef = party.party_ref;
      console.log('Party is updated on saved', party.party_ref);
    });
  }

  @ViewChild(PartyGroupComponent)
  private partygroupcomponent: PartyGroupComponent;
  @Input() public partyType;
  @Input() public componentType;

  party: Party;
  partyRef: string;

  ngOnInit() {
    this.activatedroute.data.subscribe((data) => {
      this.componentType = data.componentType;
      this.partyType = data.partyType;
    });
  }

  ngAfterViewInit() {
    this.partygroupcomponent.onFirstPartyType(this.partyType);
  }

  onRefresh() {
    console.log('Refresh Party', this.party.party_ref);
    this.partygroupcomponent.refresh();
  }

  onClone() {
    console.log('Clone Party Tree', this.party.party_ref);
    this.openCloneDialog(this.party, 'Clone');
  }

  openCloneDialog(jsonData: any, title: string) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = '500px';
    dialogConfig.data = jsonData;

    const dialogRef = this.dialog.open(PartyCloneFormComponent, dialogConfig);
    dialogRef.afterClosed().subscribe((result) => {
      switch (result.event) {
        case 'Create':
          let clone$;
          if (this.componentType === 'SWIFT') {
            clone$ = this.partyService.cloneSwiftParty(
              result.data.party_ref,
              result.data.client_ref,
              result.data.new_party_ref
            );
          } else if (this.componentType === 'CLASSASSOC') {
            clone$ = this.partyService.cloneClassAssoc(
              result.data.party_ref,
              result.data.client_ref,
              result.data.new_party_ref
            );
          } else if (this.componentType === 'NETTING') {
            clone$ = this.partyService.cloneNettingData(
              result.data.party_ref,
              result.data.client_ref,
              result.data.new_party_ref
            );
          } else {
            clone$ = this.partyService.cloneParty(
              result.data.party_ref,
              result.data.client_ref,
              result.data.new_party_ref
            );
          }
          clone$.subscribe({
            next: (val) => {
              this.onRefresh();
              this.snackService.showMessage('Party has been created.');
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

  onAdd() {
    this.partygroupcomponent.addComponent();
  }

  onBackUp() {
    console.log('Back Up Clicked', this.party.party_ref);
    this.partyService.backUpPartyData(this.party.party_ref).subscribe(
      (value) => {
        this.snackService.showMessage(
          'Party ' + value.data.backUpPartyData.party_ref + ' backed'
        );
      },
      (error) => {
        this.snackService.showMessage(error.message);
      }
    );
  }

  onRestore() {
    console.log('Restore Clicked - Ref: ', this.party.party_ref);
    this.openRestoreDialog(this.party.party_ref);
  }

  openRestoreDialog(outRef: string) {
    const output: any = {
      component_type: 'GLOSS',
      party_ref: outRef,
    };

    this.dialog.open(PartyRestoreComponent, {
      width: '800px',
      data: output,
    });
  }

  onSend() {
    this.partygroupcomponent.sendComponent();
  }

  OnDestroy() { }
}
