import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'glossconfig';
  public isAuthenticated: boolean;
  constructor() {
    this.isAuthenticated = true;
  }
  login() {}
  logout() {}
}
