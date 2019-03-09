import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { NgxSpinnerModule } from 'ngx-spinner';
import { AngularFontAwesomeModule } from 'angular-font-awesome';

@NgModule({
  declarations: [],
  imports: [
    CommonModule, FormsModule, HttpClientModule
  ],
  exports: [FormsModule, NgxSpinnerModule, AngularFontAwesomeModule]
})
export class SharedModule { }
