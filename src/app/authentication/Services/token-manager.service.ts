import { UserToken } from './../Models/token.model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TokenManagerService {

  constructor() { }

  private readonly UserTokenName: string = 'UserToken';

  /**
   * Save the user token to the local storage.
   */
  public set userToken(token: UserToken) {
    if (token != null) {
      if (token.access_token != null) {
        localStorage.setItem(this.UserTokenName, JSON.stringify(token));
      }
    }
  }

  /**
   * Get the user token from the local storage if exists, null otherwise.
   */
  public get userToken(): UserToken {
    try {
      const userTokenJson = localStorage.getItem(this.UserTokenName);
      if (userTokenJson != null) {
        const userToken: UserToken = JSON.parse(userTokenJson);
        return userToken;
      }
    } catch (error) {
      console.log(error);
      return null;
    }
  }

  /**
   * Remove the token from local storage if exists
   */
  public removeToken(): void {
    try {
      localStorage.removeItem(this.UserTokenName);
    } catch (error) {
      console.log(error);
    }
  }

  /**
   * By passing an array of roles, comparing the passed array to the
   * current user roles allowd by the authentication.
   * @param allowdRoles the array of roles match to.
   */
  public isRoleMatch(allowdRoles: string[]): boolean {
    let isMatch = false;

    const userToken: UserToken = this.userToken;
    if (!userToken) {
      return false;
    }


    allowdRoles.forEach(role => {
      if (userToken.role.indexOf(role) > -1) {
        isMatch = true;
        return false;
      }
    });

    return isMatch;
  }


}
