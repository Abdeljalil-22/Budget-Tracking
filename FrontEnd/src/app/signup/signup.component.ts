import { Component } from '@angular/core';
import { AuthService } from '../services/auth/auth.service';
import { Router } from '@angular/router';
import { UserService } from '../services/User.Service';
import { uid } from 'chart.js/dist/helpers/helpers.core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html'
})
export class SignupComponent {
  email: string = '';
  password: string = '';

  constructor(private authService: AuthService, private router: Router ,private userServise :UserService) {}

  signup() {
    console.log(this.email, this.password);
    this.authService.signup(this.email, this.password).then((data) => {
      console.log('User created!');
      this.userServise.createUser(data.user?.uid || "test",{email:this.email ,uid:data.user?.uid,displayName:data.user?.displayName,photoURL:data.user?.photoURL,phoneNumber:data.user?.phoneNumber});
      this.router.navigate(['/']);
    }).catch(error => {
      console.error(error);
    });
  }
}