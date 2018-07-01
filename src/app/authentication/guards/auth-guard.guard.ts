import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { TokenManagerService } from '../Services/token-manager.service';
import { UserToken } from '../Models/token.model';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  /**
   * Auth Gourd Constructor.
   */
  constructor(private tokenManagerService: TokenManagerService, private router: Router) {
  }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {

    const userToken: UserToken = this.tokenManagerService.userToken;
    if (userToken) {
      const roles: string[] = next.data['roles'] as string[];

      if (roles) {
        const isMatch = this.tokenManagerService.isRoleMatch(roles);
        if (isMatch) {
          return true;
        }

        this.router.navigate(['/']);
        return false;
      }

      return true;
    }

    this.router.navigate(['/']);
    return false;
  }
}
