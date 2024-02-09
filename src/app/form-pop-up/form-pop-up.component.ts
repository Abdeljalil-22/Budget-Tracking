import { Component,Inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import {
  MatDialog,
  MAT_DIALOG_DATA,
  MatDialogRef,
  MatDialogTitle,
  MatDialogContent,
  MatDialogActions,
  MatDialogClose,
} from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { IFrom } from '../intrfa/ifrom';
import {FormsModule} from '@angular/forms';
import { FormControl,FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
@Component({
  selector: 'app-form-pop-up',
  standalone: true,
  imports: [
    MatDialogTitle,
    MatDialogContent,
    MatDialogActions,
    MatDialogClose,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule
  ],
  templateUrl: './form-pop-up.component.html',
  styleUrl: './form-pop-up.component.sass'
})
export class FormPopUpComponent {
  // item!:IFrom;
  DataNow:string = new Date().toLocaleDateString() 
  constructor(
    public dialogRef: MatDialogRef<FormPopUpComponent>,
    @Inject(MAT_DIALOG_DATA) public data: IFrom,
  ) {
    // data=this.item
  }
  from =new FormGroup({
    budget: new FormControl(0,Validators.required),
    label:new FormControl("",Validators.required),
    category:new FormControl("",Validators.required),

    Date:new FormControl(this.DataNow,Validators.required)
    
  })
  AddBudget(item:IFrom){
    console.log("test",item)
    this.dialogRef.close(item)
    return item
    // MatDialogClose= 
    // this.item= item1
    // console.log(this.data)
    // this.dialogRef.beforeClosed().subscribe(()=>{
    //   return item1
    // })
    
    // this.data =item1
    // this.fromListEvent.emit(item)
  }
  onNoClick(): void {
    this.dialogRef.close();
  }
}
