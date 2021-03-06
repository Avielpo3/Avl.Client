import { AuthRoutingModule } from './auth-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login/login.component';
import { FormsModule } from '@angular/forms';
import { SignupComponent } from './signup/signup.component';
import { MatFormFieldModule, MatInputModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { MatCheckboxModule } from '@angular/material/checkbox';

@NgModule({
    imports: [
        CommonModule,
        AuthRoutingModule,
        FormsModule,
        MatFormFieldModule,
        MatInputModule,
        BrowserAnimationsModule,
        MatIconModule,
        MatButtonModule,
        AngularFontAwesomeModule,
        MatCheckboxModule
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
