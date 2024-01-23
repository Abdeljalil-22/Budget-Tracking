import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';

import { BrowserModule } from '@angular/platform-browser';
import { FormComponent } from './form/form.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [AppComponent,FormComponent],
  imports: [
    CommonModule,
    BrowserModule,
    ReactiveFormsModule
  //  AppRoutingModule
  ],
  providers: [
    FormComponent
  ],
  bootstrap:[AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
