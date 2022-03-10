import { AfterViewInit, Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { DpmParty } from 'app/services/api.service';
import { PartyService } from 'app/services/party.service';
import { PartyRefService } from 'app/services/partyRef.service';
import { SnackService } from 'app/services/snack.service';
import { PartyRestoreComponent } from 'app/static/party-restore';
import { DpmPartyCloneFormComponent } from '../forms/dpmparty.clone.form';
import { DpmPartyGroupComponent } from './dpm.party-group.component';

@Component({
  selector: 'app-dpmparty',
  template: `
    <app-menubar
      (notifyParentSend)="onSend()"
      (notifyParentRefresh)="onRefresh()"
      (notifyParentAdd)="onAdd()"
      (notifyParentClone)="onClone()"
      (notifyParentBackUp)="onBackUp()"
      (notifyParentRestore)="onRestore()"
      inTitle="COMP - PARTY"
      inPartyRef="{{ companyRef }} - {{ partyRef }}"
    >
    </app-menubar>
    <app-dpmparty-group componentType="{{ componentType }}"> </app-dpmparty-group>
  `,
})
export class DpmPartyComponent implements OnInit, AfterViewInit {
  constructor(
    public partyService: PartyService,
    public partyRefService: PartyRefService,
    public activatedroute: ActivatedRoute,
    public snackService: SnackService,
    public dialog: MatDialog
  ) {
    this.partyRefService.partyUpdated.subscribe((party) => {
      this.party = party;
      this.companyRef = party.company_ref;
      this.partyRef = party.party_ref;
      console.log('Party is updated on saved', party.company_ref);
    });
  }

  @ViewChild(DpmPartyGroupComponent)
  private dpmpartygroupcomponent: DpmPartyGroupComponent;
  @Input() public componentType;

  party: DpmParty;
  companyRef: string;
  partyRef: string;

  ngOnInit() {
    this.activatedroute.data.subscribe((data) => {
      this.componentType = data.componentType;
    });
  }

  ngAfterViewInit() {
    this.dpmpartygroupcomponent.getfirstdpmPartyByClient();
  }

  onRefresh() {
    console.log('Refresh Party', this.companyRef);
    this.dpmpartygroupcomponent.refresh();
  }

  onClone() {
    console.log('Clone DpmParty Tree', this.companyRef);
    this.openCloneDialog(this.componentType);
  }

  openCloneDialog(jsonData: any) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = '500px';
    dialogConfig.data = jsonData;

    const dialogRef = this.dialog.open(DpmPartyCloneFormComponent, dialogConfig);
    dialogRef.afterClosed().subscribe((result) => {
      switch (result.event) {
        case 'Create':
          console.log(
            'Run clone function : ',
            result.data.company_ref,
            result.data.new_company_ref
          );
          this.partyService.clonedpmParty(
            result.data.company_ref,
            result.data.client_ref,
            result.data.new_company_ref,
            this.componentType
          ).subscribe({
            next: (val) => {
              this.onRefresh();
              this.snackService.showMessage('DpmParty cloned.');
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
    this.dpmpartygroupcomponent.addComponent();
  }

  onBackUp() {
    console.log('Back Up Clicked', this.companyRef);
    this.partyService
      .backupdpmPartyData(this.companyRef, this.partyRef, this.componentType)
      .subscribe((value) => {
        this.snackService.showMessage(
          'Party ' + value.data.backUpDpmPartyData.company_ref + ' backed'
        );
      });
  }

  onRestore() {
    console.log('Restore Clicked - Ref: ', this.companyRef);
    this.openRestoreDialog();
  }

  openRestoreDialog() {
    const output: any = {
      component_type: this.componentType,
      company_ref: this.companyRef,
      party_ref: this.partyRef,
    };

    this.dialog.open(PartyRestoreComponent, {
      width: '800px',
      data: output,
    });
  }

  onSend() {
    this.dpmpartygroupcomponent.sendComponent();
  }

  OnDestroy() { }
}
