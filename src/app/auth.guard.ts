import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from './services/auth.service';
import { SnackService } from './services/snack.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(
    private afAuth: AuthService,
    private snack: SnackService,
    private router: Router
  ) {}

  canActivate() {
    const loggedin = this.afAuth.isLoggedIn();
    if (!loggedin) {
      this.snack.authError();
      this.router.navigate(['/user/login']);
    }
    return loggedin;
  }
}
