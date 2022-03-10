import { EventEmitter, Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MenuBarService {
  showBar: boolean;
  public uploadMenuState = new EventEmitter<any>();
  setBar() {
    if (this.showBar === undefined || this.showBar === true) {
      this.showBar = false;
    } else {
      this.showBar = true;
    }

    this.uploadMenuState.emit(this.showBar);
  }
  public getBarState(): boolean {
    return this.showBar;
  }
}


/* *********** JSON Download and Upload *************
Allows for the showing and hiding of the import bar

The grid component it self should be added to a module as well such that individual components that use the grid
can be separated out from the rather large static module that has been created.
The Kanban module could then go back to using the grid module as well. Currently that is not possible.
However further code has been added that would allow the a more elegant solution the menu bar could
be used to export selected rows from the grid control or import a file with drag and drop functionality.
There is dialog box class added under the grid component.
*/
