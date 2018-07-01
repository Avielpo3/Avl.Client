import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LoginService } from '../../Services/login.service';
import { UserClaims } from '../../Models/user-claims.model';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private _loginService: LoginService) { }

  _isErrorRaised: boolean;
  errorMessage: string;
  _isSuccess: boolean;
  successMessage: string;
  userClaims: UserClaims;

  ngOnInit() {
  }

  private onSubmit(loginForm: NgForm): any {
    if (loginForm.valid) {
      const username = loginForm.value.username;
      const password = loginForm.value.password;

      this._loginService.getUserTokenFromServer(username, password)
        .subscribe(
          (userClaims: UserClaims) => this.onUserTokenSuccess(userClaims),
          (error: Error) => this.onUserTokenError(error)
        );
    }
  }


  private onUserTokenSuccess(userClaims: UserClaims) {
    this.userClaims = userClaims;
    this._isSuccess = true;
    this.successMessage = `Hello ${userClaims.firstName}`;
    this._loginService.navigateToHome();
  }

  /**
   * Raise an Error message for 5 Seconds.
   * @param error The error message.
   */
  private onUserTokenError(error: Error): void {
    try {
      this._isErrorRaised = true;
      this.errorMessage = error.message;
      setTimeout(() => {
        this._isErrorRaised = false;
      }, 5000);
    } catch (error1) {
      this.errorMessage = error1.message;
    }
  }
}
