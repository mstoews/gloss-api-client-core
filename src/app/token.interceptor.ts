import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
  HttpResponse,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { catchError, filter, switchMap, take, tap } from 'rxjs/operators';
import { AuthService } from './services/auth.service';
import { SnackService } from './services/snack.service';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  private isRefreshing = false;
  private refreshTokenSubject: BehaviorSubject<any> = new BehaviorSubject<any>(
    null
  );
  constructor(
    public authService: AuthService,
    private snackservice: SnackService
  ) {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    console.log('Intercepted');
    if (this.authService.getJwtToken()) {
      request = this.addToken(request, this.authService.getJwtToken());
    }

    return next.handle(request).pipe(
      tap((event) => {
        console.log('event');
        console.log(event);
        if (event instanceof HttpResponse && event.body && event.body.errors) {
          if (event.body.errors[0].extensions.exception.status === 401)
            return this.handle401Error(request, next);
          else this.snackservice.showMessage(event.body.errors[0].message);
        }
      }),
      catchError((error) => {
        console.log('error');
        console.log(error);
        if (error instanceof HttpErrorResponse) {
          if (error.error && error.error.response)
            this.snackservice.showMessage(error.error.response.message);
          if (error.status === 401) {
            return this.handle401Error(request, next);
          }
          if (error.status === 419) {
            this.isRefreshing = false;
            this.authService.doLogoutUser();
            this.snackservice.showMessage(
              'Your session has expired.Please login back again'
            );
          }
        } else {
          return throwError(error);
        }
      })
    );
  }

  private addToken(request: HttpRequest<any>, token: string) {
    console.log('Added Jwt');
    return request.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`,
      },
    });
  }

  private handle401Error(request: HttpRequest<any>, next: HttpHandler) {
    if (!this.isRefreshing) {
      this.isRefreshing = true;
      this.refreshTokenSubject.next(null);
      this.authService.refreshToken().subscribe({
        next: (accessToken) => {
          this.isRefreshing = false;
          this.authService.storeJwtToken(accessToken);
          this.refreshTokenSubject.next(accessToken);
          this.snackservice.showMessage('Please retry the previous operation');
        },
      });
      return next.handle(
        this.addToken(request, this.authService.getJwtToken())
      );
    } else {
      return this.refreshTokenSubject.pipe(
        filter((token) => token != null),
        take(1),
        switchMap((accessToken) => {
          return next.handle(this.addToken(request, accessToken));
        })
      );
    }
  }
}
