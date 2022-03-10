import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class SnackService {
  constructor(private snackBar: MatSnackBar, private router: Router) {}

  httpMessageSent(partyRef: string) {
    this.snackBar.open('Message Sent to GLOSS: ' + partyRef, '', {
      duration: 3000,
    });

    return this.snackBar._openedSnackBarRef.onAction().subscribe();
  }

  authError() {
    this.snackBar.open('You must be logged in!', 'OK', {
      duration: 3000,
    });

    return this.snackBar._openedSnackBarRef
      .onAction()
      .pipe(tap((_) => this.router.navigate(['/user/login'])))
      .subscribe();
  }

  showMessage(message: string) {
    this.snackBar.open(message, '', {
      duration: 3000,
    });
  }
}
