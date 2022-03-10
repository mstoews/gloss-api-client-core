import { EventEmitter, Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MenuService {
  public sideNavState$: Subject<boolean> = new Subject();
  constructor() {
   }
}

// it is possible to add other features here that control the sidenav overlay, push or side functionality if desired
