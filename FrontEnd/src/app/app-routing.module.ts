import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ChartComponent } from './chart/chart.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { AuthGuard } from './auth.guard';
import { ProfileComponent } from './profile/profile.component';
import { ChatComponent } from './chat/chat.component';
import { RoomListComponent } from './room-list/room-list.component';

// ChartComponent
const routes: Routes = [
  { path: '', component: HomeComponent ,canActivate: [AuthGuard]},
  { path: 'app', component: AppComponent ,canActivate: [AuthGuard]},
  { path: 'Chart', component: ChartComponent ,canActivate: [AuthGuard]},
  
  { path: 'profile', component: ProfileComponent ,canActivate: [AuthGuard]},
  { path: 'chat1', component: RoomListComponent  ,canActivate: [AuthGuard]},
  
  { path: 'chat', component: ChatComponent  ,canActivate: [AuthGuard]},

  { path: 'chat/:?roomId', component: ChatComponent  ,canActivate: [AuthGuard]},

  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent }
 


  

  

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
