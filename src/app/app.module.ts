import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TokenManagerService } from './authentication/Services/token-manager.service';
import { HttpClientModule } from '@angular/common/http';
import { AuthenticationModule } from './authentication/auth.module';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { SidenavComponent } from './sidenav/sidenav.component';
import { TaskModule } from './tasks/task.module';
import { GameBoardComponent } from './connect4-game/game-board/game-board.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SidenavComponent,
    GameBoardComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    AuthenticationModule,
    TaskModule
  ],
  providers: [TokenManagerService,
    //    {
    //   provide: HTTP_INTERCEPTORS,
    //   useClass: AuthInterceptor,
    //   multi: true
    // }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
