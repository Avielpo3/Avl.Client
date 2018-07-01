import { Constants } from './../../Constants/url.constants';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { UserToken } from '../Models/token.model';
import { UserClaims } from '../Models/user-claims.model';
import { Roles } from '../Models/roles.model';

@Injectable({
  providedIn: 'root'
})
export class AuthHttpService {


  constructor(private _httpClient: HttpClient) { }

  /**
   * Must Auth method.
   */
  public getUserClaims(): Observable<UserClaims> {
    return this._httpClient.get<UserClaims>(Constants.UserClaimsUrl).pipe(
      catchError(this.handleHttpError)
    );
  }

  /**
   * No authentication Server method.
   * Generate a token from server.
   */
  public getUserTokenFromServer(tokenData: string): Observable<UserToken> {
    const tokenHeaders: HttpHeaders = new HttpHeaders({ 'Content-Type': 'application/x-www-urlencoded', 'No-Auth': 'True' });

    return this._httpClient.post<UserToken>(Constants.UserTokenUrl, tokenData, { headers: tokenHeaders }).pipe(
      catchError(this.handleHttpError)
    );

  }

  /**
   * No authentication Server method.
   * Get all roles from server, Return list of roles.
   */
  public getAllRoles(): Observable<Roles> {
    const noAuthHeaders: HttpHeaders = new HttpHeaders({ 'No-Auth': 'True' });

    return this._httpClient.get<Roles>(Constants.RolesUrl, { headers: noAuthHeaders }).pipe(
      catchError(this.handleHttpError)
    );
  }

  private handleHttpError(error: HttpErrorResponse , caught: Observable<any>): Observable<any> | any {
    switch (error.status) {
      case 400:
        if (error.error != null && error.error.error_description != null) {
          throw new Error(error.error.error_description);
        }
        break;
      case 401:
      default:
        throw new Error(error.message);
    }

  }
}
