import { Component } from '@angular/core';
import { AuthService } from '../services/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html'
})
export class SignupComponent {
  email: string = '';
  password: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  signup() {
    console.log(this.email, this.password);
    this.authService.signup(this.email, this.password).then(() => {
      this.router.navigate(['/']);
    }).catch(error => {
      console.error(error);
    });
  }
}