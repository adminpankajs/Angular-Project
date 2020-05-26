import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutusComponent } from './aboutus/aboutus.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [AboutusComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    AboutusComponent
  ]
})
export class AboutusModule { }
