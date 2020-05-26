import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home/home.component';
import { SignupComponent } from './signup/signup/signup.component';
import { SigninComponent } from './signin/signin/signin.component';
import { AboutusComponent } from './aboutus/aboutus/aboutus.component';
import { RoomsComponent } from './rooms/rooms/rooms.component';
import { BookComponent } from './book/book/book.component';
import { LogoutComponent } from './logout/logout/logout.component';
import { AccountComponent } from './account/account/account.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent},
  { path: 'signup', component: SignupComponent},
  { path: 'signin', component: SigninComponent},
  { path: 'aboutus', component: AboutusComponent},
  { path: 'rooms', component: RoomsComponent},
  { path: 'book/:id', component: BookComponent},
  { path: 'logout', component: LogoutComponent},
  { path: 'account', component: AccountComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
