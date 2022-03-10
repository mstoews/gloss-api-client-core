import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { KanbanService } from '../../module/kanban.service';

export interface PartyType {
  party_ref: string;
  client_ref: string;
  party_type: string;
  party_short_name: string;
  party_long_name: string;
  party_extra_long_name: string;
  version_date: string;
  version_no: number;
  version_user: string;
}

export type Query = {
  partyByType: PartyType[];
};

@Component({
  selector: 'party-list',
  templateUrl: './party.component.html',
})
export class PartyListComponent {
  kanbanList!: Observable<PartyType[]>;

  constructor(private kanbanService: KanbanService) {
    this.kanbanList = this.kanbanService.getPartyByRefAndClient('COMP', 'CORE');
  }

  logEvent(e) {
    console.log(e);
  }

  onRowDblClick(e) {
    console.log('Double clicked', e.data);
  }
}
