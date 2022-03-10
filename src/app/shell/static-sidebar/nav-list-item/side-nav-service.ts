import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';


@Injectable()
export class SidenavService {

  // save the nav state so when the pages change the state can be consistent
  public sideNavState$: Subject<boolean> = new Subject();

  constructor() { }

}
