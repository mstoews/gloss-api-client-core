import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';
import * as glossApi from './api.service';
import { SnackService } from './snack.service';

export class Token {
  accessToken: string;
  refreshToken: string;
}

/** Mock client-side authentication/authorization service */
@Injectable()
export class AuthService {
  private readonly JWT_TOKEN = 'JWT_TOKEN';
  private readonly REFRESH_TOKEN = 'REFRESH_TOKEN';
  public loggedUser: glossApi.User;
  private readonly USER_ID = 'USER_ID';
  private readonly ROLE = 'ROLE';
  private readonly CLIENT = 'CLIENT';
  private replace = /graphql/gi;

  constructor(
    private readonly signUpGQL: glossApi.SignUpGQL,
    private readonly resetGQL: glossApi.ResetPasswordGQL,
    private readonly deleteUserGQL: glossApi.DeleteUserGQL,
    private readonly userListGQL: glossApi.UsersGQL,
    private http: HttpClient,
    private router: Router,
    private snackService: SnackService
  ) { }

  public getAllUsers() {
    return this.userListGQL
      .watch()
      .valueChanges.pipe(map((result) => result.data.users));
  }

  login(login: { userid: string; password: string }): boolean {
    const login$ = this.http.post<any>(
      localStorage.getItem('uri').replace(this.replace, '') + `auth/login`,
      login
    );
    login$.subscribe(
      (data) => {
        this.router.navigate(['/introduction']);
        this.loggedUser = data.user;
        localStorage.setItem(this.USER_ID, data.user.userid);
        localStorage.setItem(this.ROLE, data.user.role);
        localStorage.setItem(this.CLIENT, data.user.client_ref);
        let token = new Token();
        token.accessToken = data.accessToken;
        token.refreshToken = data.refreshToken;
        this.storeTokens(token);
      },
      (error) => {
        return false;
      }
    );
    return true;
  }

  logout(): boolean {
    const logout$ = this.http.post<any>(
      localStorage.getItem('uri').replace(this.replace, '') + `auth/logout`,
      {
        refreshToken: this.getRefreshToken(),
      }
    );
    this.doLogoutUser();
    logout$.subscribe(() => {
      this.snackService.showMessage('Logged Out Successfully');
      this.router.navigate(['/user/login']);
    });
    return true;
  }

  doLogoutUser() {
    this.loggedUser = null;
    this.removelocalStorage();
  }

  refreshToken() {
    console.log('Refreshing access token');
    return this.http.post<any>(
      localStorage.getItem('uri').replace(this.replace, '') +
      `auth/refreshtoken`,
      {
        refreshToken: this.getRefreshToken(),
      }
    );
  }

  signUp(data: glossApi.UserInput): boolean {
    const signUp$ = this.signUpGQL.mutate({ data });
    signUp$.subscribe((user) => {
      this.snackService.showMessage(`Created User Successfully`);
    });
    return true;
  }

  resetPassword(login: glossApi.LoginInput): boolean {
    const resetPassword$ = this.resetGQL.mutate({ data: login });
    resetPassword$.subscribe((user) => {
      this.snackService.showMessage('Reset Password Successfully');
    });
    return true;
  }

  deleteUser(userid: string): boolean {
    const deleteUser$ = this.deleteUserGQL.mutate({ userid: userid });
    deleteUser$.subscribe((user) => {
      this.snackService.showMessage('Deleted User Successfully');
    });
    return true;
  }

  isLoggedIn() {
    return !!this.getJwtToken();
  }

  isAdministrator() {
    if (localStorage.getItem(this.ROLE) === 'ADMIN') {
      console.log('ADMIN');
      return true;
    } else return false;
  }

  isTeamSupervisor() {
    if (localStorage.getItem(this.ROLE) === 'TEAMSUPERVISOR') {
      console.log('TEAMSUPERVISOR');
      return true;
    } else return false;
  }

  isTeamOperator() {
    if (localStorage.getItem(this.ROLE) === 'TEAMOPERATOR') {
      console.log('TEAMOPERATOR');
      return true;
    } else return false;
  }

  getJwtToken() {
    return localStorage.getItem(this.JWT_TOKEN);
  }

  getRefreshToken(): string {
    return localStorage.getItem(this.REFRESH_TOKEN);
  }

  storeJwtToken(jwt: string) {
    localStorage.setItem(this.JWT_TOKEN, jwt);
  }

  private storeTokens(tokens: any) {
    localStorage.setItem(this.JWT_TOKEN, tokens.accessToken);
    localStorage.setItem(this.REFRESH_TOKEN, tokens.refreshToken);
  }

  private removelocalStorage() {
    localStorage.removeItem(this.JWT_TOKEN);
    localStorage.removeItem(this.REFRESH_TOKEN);
    localStorage.removeItem(this.USER_ID);
    localStorage.removeItem(this.ROLE);
    localStorage.removeItem(this.CLIENT);
    localStorage.removeItem('glossenv');
    localStorage.removeItem('jasdecenv');
    localStorage.removeItem('bojenv');
    localStorage.removeItem('gloss_uri');
    localStorage.removeItem('jasdec_uri');
    localStorage.removeItem('boj_uri');
  }

  public getUserListCols() {
    const cols = [
      { headerName: 'email', field: 'email' },
      { headerName: 'userid', field: 'userid' },
      { headerName: 'firstname', field: 'firstname' },
      { headerName: 'lastname', field: 'lastname' },
      { headerName: 'role', field: 'role' },
    ];
    return cols;
  }
}
