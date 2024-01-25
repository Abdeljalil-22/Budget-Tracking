import { Component } from '@angular/core';
import { IFrom } from './intrfa/ifrom';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FormPopUpComponent } from './form-pop-up/form-pop-up.component';
// import { RouterOutlet } from '@angular/router';
import {
  MatDialog,
  MAT_DIALOG_DATA,
  MatDialogRef,
  MatDialogTitle,
  MatDialogContent,
  MatDialogActions,
  MatDialogClose,
} from '@angular/material/dialog';

@Component({
  selector: 'app-root',
  // standalone: true,
  // imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.sass'
})

export class AppComponent {
onNoClick() {
throw new Error('Method not implemented.');
}
  constructor(public dialog: MatDialog) {}
openDialog(): void {
  const dialogRef = this.dialog.open(FormPopUpComponent);
}
  title = 'Budget-Tracking';

  items:IFrom[] = [];
  addItem(newItem: IFrom) {
    this.items.push(newItem);
    console.log("app",this.items);
    //this.refDashboardComponent
  }
  newCopie(){
    return [...this.items]
  }

  
}
