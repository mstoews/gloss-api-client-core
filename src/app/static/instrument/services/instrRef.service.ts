import { Injectable, EventEmitter } from '@angular/core';

@Injectable()
export class InstrRefService {
  instrRef: string;
  instrType: string;

  public instrRefUpdated = new EventEmitter<string>();
  public instrTypeUpdated = new EventEmitter<string>();

  getPartyRef() {
    return this.instrRef;
  }

  setInstrRef(instrRef: string){
    this.instrRef = instrRef;
    this.instrRefUpdated.emit(instrRef);
  }

  setInstrType(instrType: string)
  {
    this.instrType = instrType;
    this.instrTypeUpdated.emit(instrType);
  }

  getInstrType() {
    return this.instrType;
  }

}
