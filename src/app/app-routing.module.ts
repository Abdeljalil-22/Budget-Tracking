import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ChartComponent } from './chart/chart.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';


// ChartComponent
const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'Chart', component: ChartComponent }
  

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
