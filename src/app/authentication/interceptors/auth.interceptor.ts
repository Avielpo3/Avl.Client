import { Router } from '@angular/router';
import { UserToken } from './../Models/token.model';
import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TokenManagerService } from '../Services/token-manager.service';
import { tap } from 'rxjs/operators';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

    /**
     * AuthInterceptor
     */
    constructor(private _tokenManagerService: TokenManagerService, private _router: Router) {

    }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        // Bypass the interceptor
        if (req.headers.get('No-Auth') === 'True') {
            return next.handle(req.clone());
        }

        const userToken: UserToken = this._tokenManagerService.userToken;
        if (userToken != null) {
            const cloneReq = req.clone({
                headers: req.headers.set('Authorization', `Bearer ${userToken.access_token}`)
            });

            return next.handle(cloneReq).pipe(
                tap(
                    succ => { }, // OK
                    err => {
                        if (err.status === 401) {
                            this.onUserNotAuth();
                            return;
                        }
                    })
            );
        }

        this.onUserNotAuth();
    }

    private onUserNotAuth(): void {
        this._router.navigate(['/login']);
//        this._tokenManagerService.removeToken();
      }

}
