import { Router } from '@angular/router';
import { map, switchMap, flatMap } from 'rxjs/operators';
import { UserToken } from './../Models/token.model';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { AuthHttpService } from './auth-http.service';
import { TokenManagerService } from './token-manager.service';
import { UserClaims } from '../Models/user-claims.model';
import { Roles } from '../Models/roles.model';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(
    private _httpAuthService: AuthHttpService,
    private tokenManagerService: TokenManagerService,
    private _routerService: Router) { }


  /**
   * Sending a call to the API receiving a  token back, Save's the token at local storage.
   * After that make's another API call and get's the User Claims details.
   * @param username The user username
   * @param password The user password
   * @returns Observable<UserClaims>
   */
  public getUserTokenFromServer(username: string, password: string): Observable<UserClaims> {
    const tokenData = 'username=' + username + '&password=' + password + '&grant_type=password';

    return this._httpAuthService.getUserTokenFromServer(tokenData).pipe(
      flatMap((userToken: UserToken) => {
        this.tokenManagerService.userToken = userToken;
        return this._httpAuthService.getUserClaims().pipe(
          map((userClaimss: UserClaims) => {
           // localStorage.setItem('UserClaims', JSON.stringify(userClaimss));
            return userClaimss;
          })
        );
      })
    );
  }

  public getAllRoles(): Observable<Roles> {
    return this._httpAuthService.getAllRoles();
  }


  public logout(): void {
    this.tokenManagerService.removeToken();
    this.navigateToHome();
  }

  /**
   * Navigate to home page with delay of 3 sec'.
   */
  public navigateToHome(): void {
    setTimeout(() => {
      this._routerService.navigate(['/']);
    }, 3000);
  }
}
