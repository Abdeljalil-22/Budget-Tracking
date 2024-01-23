import { Component } from '@angular/core';
import { FormControl,FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form',
  // standalone: true,
  //standalone: true,
  //  imports: 
  templateUrl: './form.component.html',
  styleUrl: './form.component.sass'
})
export class FormComponent {
  //  budget: string = "";
  // public label:any;
from =new FormGroup({
  budget: new FormControl(""),
  label:new FormControl("")
})
 AddBudget(){
    console.log("test")
  }

}
