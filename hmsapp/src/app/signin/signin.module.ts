import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SigninComponent } from './signin/signin.component';
import { CookieService } from 'ngx-cookie-service'
import { FormsModule } from '@angular/forms'


@NgModule({
  declarations: [SigninComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    SigninComponent
  ]
})
export class SigninModule { }
