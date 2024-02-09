import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';

import { BrowserModule } from '@angular/platform-browser';
import { FormComponent } from './form/form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import { ChartComponent } from './chart/chart.component';
import {MatMenuModule} from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon';
import { AppRoutingModule } from './app-routing.module';
// import { 
//   MatIconModule, 
//   MatMenuModule
//   // MatToolbarModule,
// } from '@angular/material';

@NgModule({
  declarations: [AppComponent],
  imports: [
    CommonModule,
    BrowserModule,
    FormComponent,
    DashboardComponent,
    ChartComponent,
    BrowserAnimationsModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatMenuModule,
    AppRoutingModule
    
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
