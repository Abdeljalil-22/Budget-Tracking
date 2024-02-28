import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth/auth.service';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [MatFormFieldModule,
    MatCardModule ,
    MatInputModule,
    MatButtonModule,
    CommonModule,
    FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.sass'
})
export class LoginComponent implements OnInit {

  email = '';
  password = '';

  constructor(private authService: AuthService) {}

  ngOnInit() { }

  login() {
    this.authService.login(this.email, this.password)
      .then(() => {
        // Handle successful login (e.g., navigate to another page)
      })
      .catch(error => {
        // Handle login errors
        console.error(error);
      });
  }
}