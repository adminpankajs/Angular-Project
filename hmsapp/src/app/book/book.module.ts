import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookComponent } from './book/book.component';
import { CookieService } from 'ngx-cookie-service'
import { FormsModule } from '@angular/forms'


@NgModule({
  declarations: [BookComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    BookComponent
  ]
})
export class BookModule { }
