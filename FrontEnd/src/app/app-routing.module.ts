import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ChartComponent } from './chart/chart.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { AuthGuard } from './auth.guard';

// ChartComponent
const routes: Routes = [
  { path: '', component: HomeComponent ,canActivate: [AuthGuard]},
  { path: 'app', component: AppComponent ,canActivate: [AuthGuard]},
  { path: 'Chart', component: ChartComponent ,canActivate: [AuthGuard]},
  { path: 'login', component: LoginComponent },
  { path: 'Signup', component: SignupComponent }

  

  

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
