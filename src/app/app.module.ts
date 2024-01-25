import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';

import { BrowserModule } from '@angular/platform-browser';
import { FormComponent } from './form/form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [AppComponent],
  imports: [
    CommonModule,
    BrowserModule,
    FormComponent,
    DashboardComponent,
    BrowserAnimationsModule
    
  //  AppRoutingModule
  ],
  providers: [
    
  ],
  bootstrap:[AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {
 // constructor( refDashboardComponent: DashboardComponent) {}
 }
