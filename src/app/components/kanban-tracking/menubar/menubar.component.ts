import { StringMapWithRename } from '@angular/compiler/src/compiler_facade_interface';
import { Component, Output, EventEmitter, OnInit, Input } from '@angular/core';
import { KanbanService } from '../module/kanban.service';
import { Party } from 'app/services/api.service';

import { Observable } from 'rxjs';
import { PartyRefService } from '../../../services/partyRef.service';
import { PartyService } from '../../../services/party.service';
interface IValue {
  value: string;
  viewValue: string;
  menuDesc: string;
}

@Component({
  selector: 'app-kanban-menubar',
  templateUrl: './menubar.component.html',
  styleUrls: ['./menubar.component.scss'],
})

export class KanbanMenubarComponent implements OnInit {

  @Output() notifyParentAdd: EventEmitter<any> = new EventEmitter();
  @Output() notifyParentRefresh: EventEmitter<any> = new EventEmitter();
  @Output() notifyParentDelete: EventEmitter<any> = new EventEmitter();
  @Output() notifyParentClone: EventEmitter<any> = new EventEmitter();
  @Output() notifyMenuItemChanged: EventEmitter<any> = new EventEmitter();

  @Input() public inTitle: string;
  @Input() public inPartyRef: string;
  @Input() public selected: string;
  public partyReference$: any;
  public partyMenu$: any;
  public menuItems: IValue[];
  party: Party;

  constructor(public kanbanService: KanbanService,
              public partyService: PartyService,
              public partyRefService: PartyRefService) {
                this.partyRefService.partyUpdated.subscribe((party) => {
                  this.party = party;
                  this.inPartyRef = party.party_ref;
                  console.log('Party is updated on saved', this.inPartyRef);
                });
  }

  ngOnInit(): void {
    this.partyReference$ = this.partyService.getPartyByType('COMP');
    this.partyReference$.subscribe({
      next: (val) => {
        let count = 1;
        val.forEach((element) => {
          const item: IValue = {
            value: count.toString(),
            menuDesc: element.party_long_name,
            viewValue: element.party_ref
          };
          count++;
        });
      },
      error: err => console.log(err.message)
    });
  }

  // tslint:disable-next-line:variable-name
  onRefreshPartyRef(party_ref: string): void {
    console.log('onRefreshPartRef :', party_ref);
    this.inPartyRef = party_ref;
    this.onRefresh();
  }

  onRefresh(): void {
    this.notifyParentRefresh.emit();
  }

  onClickAdd(): void {
    console.log('Add emitter is sent');
    this.notifyParentAdd.emit();
  }

  onClickDelete(): void {
    console.log('Add emitter is sent');
    this.notifyParentDelete.emit();
  }

  onClickClone(): void {
    console.log('Add emitter is sent');
    this.notifyParentClone.emit();
  }

  onClickRefresh(): void {
    this.onRefresh();
  }
}
