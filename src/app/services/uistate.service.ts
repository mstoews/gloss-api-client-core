import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface UIState {
  sideNavOpen: boolean;
}

@Injectable({
  providedIn: 'root',
})
export class UIStateMgrService {

  public uiState: UIState = {
    sideNavOpen: false
  };

   // emits changes in the UI
  private uiState$: BehaviorSubject<UIState> = new BehaviorSubject(
    this.uiState
  );

  public set uiSettings(state: UIState) {
    this.uiState$.next(state);
  }

  public get uiSettings(): UIState {
    return this.uiState$.getValue();
  }

  public sideNavToggle(): void {
    this.uiState.sideNavOpen = !this.uiState.sideNavOpen;
    this.uiSettings = this.uiState; // call setter to store and emit changes
  }
}

