import { CUSTOM_ELEMENTS_SCHEMA, Component } from '@angular/core';
import { FormControl,FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { IFrom } from '../intrfa/ifrom';

@Component({
  selector: 'app-form',
  // standalone: true,
  standalone: true,
   imports:[ReactiveFormsModule] ,
  templateUrl: './form.component.html',
  styleUrl: './form.component.sass',
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class FormComponent {
  //  budget: string = "";
  // public label:any;
from =new FormGroup({
  budget: new FormControl(0,Validators.required),
  label:new FormControl("",Validators.required)
})
 AddBudget(item:IFrom){
    console.log("test",item)
  }

}
