import { AuthRoutingModule } from './auth-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login/login.component';
import { FormsModule } from '@angular/forms';
import { SignupComponent } from './signup/signup.component';

@NgModule({
    imports: [
        CommonModule,
        AuthRoutingModule,
        FormsModule
    ],
    declarations: [
        LoginComponent,
        SignupComponent
    ],
    exports: [
        LoginComponent, AuthRoutingModule
    ]
})
export class AuthenticationModule {

}
