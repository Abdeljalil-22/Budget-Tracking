import { Component } from '@angular/core';
import { IFrom } from './Interface/ifrom';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FormPopUpComponent } from './form-pop-up/form-pop-up.component';
// import { RouterOutlet } from '@angular/router';
import {
  MatDialog,
} from '@angular/material/dialog';
import { AuthService } from './services/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  // standalone: true,
  // imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.sass'
})

export class AppComponent {
  title = 'Budget-Tracking';

  constructor(private authService: AuthService,private router: Router) {}

  logout(){
    this.authService.signOut().then(() => {
      this.router.navigate(['/login']);
      console.error('Logout error', "Logout");

    }).catch(error => {
      console.error('Logout error', error);
    });
  }




}
