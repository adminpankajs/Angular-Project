import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeModule } from './home/home.module';
import { SignupModule } from './signup/signup.module';
import { AboutusModule } from './aboutus/aboutus.module';
import { SigninModule } from './signin/signin.module';
import { RoomsModule } from './rooms/rooms.module';
import { BookModule } from './book/book.module';
import { SignupComponent } from './signup/signup/signup.component';
import { SigninComponent } from './signin/signin/signin.component';
import { HomeComponent } from './home/home/home.component';
import { AboutusComponent } from './aboutus/aboutus/aboutus.component';
import { RoomsComponent } from './rooms/rooms/rooms.component';
import { BookComponent } from './book/book/book.component';
import { LogoutComponent } from './logout/logout/logout.component'
import { CookieService } from 'ngx-cookie-service'
import { LogoutModule } from './logout/logout.module';
import { AccountModule } from './account/account.module';
import { AccountComponent } from './account/account/account.component';

const routes: Routes = [];
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomeModule,
    AboutusModule,
    SignupModule,
    SigninModule,
    RoomsModule,
    BookModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    LogoutModule,
    AccountModule,
  ],
  providers: [ CookieService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
