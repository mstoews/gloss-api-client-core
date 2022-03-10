import { Component, OnInit } from '@angular/core';
import { GridComponent } from 'app/components/grid/grid.component';
import { AuthService } from 'app/services/auth.service';

@Component({
  selector: 'app-list-user',
  template: `
    <ng-container *ngIf="users$ | async as users">
      <grid *ngIf="this.afAuth.isAdministrator()" [cols]="cols" [rows]="users">
      </grid>
    </ng-container>
  `,
  providers: [GridComponent],
})
export class UserListComponent implements OnInit {
  cols = this.afAuth.getUserListCols();
  users$ = this.afAuth.getAllUsers();

  constructor(public afAuth: AuthService) {}

  ngOnInit() {}
}
