import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogoutComponent } from './logout/logout.component';
import { FormsModule } from '@angular/forms'



@NgModule({
  declarations: [LogoutComponent],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class LogoutModule { }
