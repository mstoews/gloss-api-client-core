import { EventEmitter, Injectable } from '@angular/core';

/*  party_ref
  - This is a message bus service that retrieves and sets the party reference
  - The purpose of the service is to ensure the party tree structure is always maintained for PartyRef
  - All references to the structure are by party ref. It must be retrieved for each section of the tree structure
*/

@Injectable()
export class PartyRefService {
  partyRef: string;
  clientRef: string;
  partyType: string;

  public partyUpdated = new EventEmitter<any>();

  setParty(party) {
    this.partyRef = party.partyRef;
    this.partyType = party.partyType;
    this.clientRef = party.clientRef;
    this.partyUpdated.emit(party);
  }

  getPartyRef() {
    return this.partyRef;
  }

  getClientRef() {
    return this.partyRef;
  }

  getPartyType() {
    return this.partyType;
  }
}
