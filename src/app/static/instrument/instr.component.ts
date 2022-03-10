import { Component, OnInit, Input, EventEmitter, Output, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatDialog } from '@angular/material/dialog';
import { PartyFormCloneModalComponent} from './forms/instr.clone.form';
import { SnackService } from 'app/services/snack.service';

@Component({
  selector: 'app-instrument',
  template: `
  <app-menubar
        (notifyParentSend)="onSend()"
        (notifyParentRefresh)="onRefresh()"
        (notifyParentDelete)="onDelete()"
        (notifyParentAdd)="onAdd($event)"
        (notifyParentClone)="onClone()"
        inTitle={{outTitle}} ininstrRef={{outRef}}>
  </app-menubar>
  <app-instr-form></app-instr-form>
  `,
  styles: ['.toolbar-spacer { flex: 1 1 auto; }']
})

export class InstrComponent implements OnInit {
  constructor(
    private httpClient: HttpClient,
    public instrService: instrService,
    public instrRefService: instrRefService,
    private snackService: SnackService,
    public dialog: MatDialog){
    this.instrRefService.instrRefUpdated.subscribe(
        (instrRef: string) => {
           this.outRef = instrRef;
           console.log('outRef is set to: ', this.outRef);
        }
    );
  }

  outTitle = 'instr Setup';
  outRef: string;
  @ViewChild(InstrFormComponent) private instrFormComponent: InstrFormComponent;
  currentTab = 3;

  updateGlossByinstrRef() {
    console.log('Send to GLOSS:', this.outRef);
    this.instrService.createPartyGlossXML(this.outRef);
    this.snackService.httpMessageSent(this.outRef);
  }

  openCloneDialog(jsonData: any, title: string) {
    const dialogRef = this.dialog.open(PartyFormCloneModalComponent, {
      width: '380px',
      data: jsonData
    });

    dialogRef.afterClosed().subscribe(result => {
      switch (result.event) {
        case 'Create':
          console.log('Run clone function : ', result.data.party_ref, result.data.new_party_ref );
          this.instrService.cloneParty(result.data.party_ref, result.data.new_party_ref);
          this.onRefresh();
          break;
       case 'Delete':
            console.log('Run clone function : ', result.data.party_ref);
            this.instrService.deletePartyByRef(result.data.party_ref);
            this.onRefresh();
            break;
       case 'Cancel':
          break;
      }
    });
  }


  ngOnInit(){
      // this.outRef = this.instrService.getinstrRef();
  }

  onDelete(){
    const currentRef = this.instrRefService.getinstrRef();
    console.log('Clone Ref: ', currentRef);
    this.instrService.getPartyByRef(currentRef).subscribe((data: any) => {
       console.log('Delete Party Tree', data);
       this.openCloneDialog(data, 'Delete');
    });
  }

  onClone(){
    const currentRef = this.instrRefService.getinstrRef();
    console.log('Clone Ref: ', currentRef);
    this.instrService.getPartyByRef(currentRef).subscribe((data: any) => {
       console.log('Clone data', data);
       this.openCloneDialog(data, 'Clone');
    });

  }

  onRefresh()
  {
    console.log('Refreshing  ... ');
    this.instrFormComponent.updatePartyTypeComponent();
  }

  onSend() {
    console.log('Sent HTTP GET to GLOSS for :', this.outRef);
    this.updateGlossByinstrRef();
  }

  onAdd(event) {
  }

  OnDestroy() {
    this.instrRefService.instrRefUpdated.unsubscribe();
  }

}
