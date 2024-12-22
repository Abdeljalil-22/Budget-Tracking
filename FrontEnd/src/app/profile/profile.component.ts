import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../services/User.Service';
import { Router } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  profileForm: FormGroup;
  userData: any;

  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private router: Router,
    private toastr: ToastrService
  ) {
    this.profileForm = this.fb.group({
      displayName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
    });

    // this.userService.getUserData().subscribe((data) => {
    //   if (data) {
    //     console.log(data);
    //     this.userData = data;
    //     this.profileForm.patchValue({
    //       displayName: data.displayName || '',
    //       email: data.email || '',
    //     });
    //   }
    // });
  }
  ngOnInit(): void {
    this.userService.getUserData().subscribe((dataPromis) => {
      dataPromis.subscribe((data:any) => {
        console.log("getUserData data2",data);
        if (data) {
          console.log("getUserData",data);
          this.userData = data;
          console.log("getUserData userData" ,this.userData);
          // console.log("getUserData " ,data);
  
          this.profileForm.patchValue({
            displayName: this.userData.displayName || '',
            email: this.userData.email || '',
          });
        
      }
    
    },  (error:any) => {
      console.error('Error fetching user data', error);
      this.toastr.error('Error fetching user data', error);
    });
      
    },  (error) => {
      console.error('Error fetching user data', error);
      this.toastr.error('Error fetching user data', error);
    });

    // this.profileForm = this.fb.group({
    //   displayName: ['', Validators.required],
    //   email: ['', [Validators.required, Validators.email]],
    // });
  }
  

  async updateProfile(): Promise<void> {
    try {
      console.log("this.profileForm.value",this.profileForm.value);
      const { displayName, email } = this.profileForm.value;
      await this.userService.updateUserData({ displayName, email });
      // alert('Profile updated successfully!');
      this.toastr.success('Profile updated successfully!');

    } catch (error) {
      console.error('Error updating profile:', error);
      this.toastr.error('Failed to update profile. Please try again.');
    }
  }

  async deleteAccount(): Promise<void> {
    try {
      await this.userService.deleteUser();
      this.toastr.success('Account deleted successfully!');
      this.router.navigate(['/login']);
    } catch (error) {
      console.error('Error deleting account:', error);
      this.toastr.error('Failed to delete account. Please try again.');
    }
  }
}
