import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth/auth.service';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [MatFormFieldModule,
    ReactiveFormsModule ,
    MatCardModule ,
    MatInputModule,
    MatButtonModule,
    CommonModule,
    FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.sass'
})
export class LoginComponent implements OnInit {

  // email = '';
  // password = '';
  // data!:{email:string,password:string}

  constructor(private authService: AuthService,private router: Router) {}


  loginFrom =new FormGroup({
    email: new FormControl("",[Validators.required ,Validators.email] ),

    password: new FormControl("",[Validators.required,Validators.min(6)]),
  
    
  })

  ngOnInit() { }

  onClickLogin() {
    let email:any = this.loginFrom.controls.email.value
    let password:any =this.loginFrom.controls.password.value
    console.log("onClickLogin()")
    this.authService.login(email , password)
      .then((item) => {
        this.router.navigate(['/']);
        // Handle successful login (e.g., navigate to another page)
        console.log(item)
      })
      .catch(error => {
        // Handle login errors
        console.error(error);
      });
  }

  loginWithGoogle() {
    this.authService.loginWithGoogle().then(() => {
      this.router.navigate(['/']);
    }).catch(error => {
      console.error(error);
    });
  }
}