import { Component } from '@angular/core';
import { IFrom } from './Interface/ifrom';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FormPopUpComponent } from './form-pop-up/form-pop-up.component';
// import { RouterOutlet } from '@angular/router';
import {
  MatDialog,
} from '@angular/material/dialog';

@Component({
  selector: 'app-root',
  // standalone: true,
  // imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.sass'
})

export class AppComponent {
  title = 'Budget-Tracking';

  constructor(public dialog: MatDialog) { }

  openDialog(): void {

    const dialogRef = this.dialog.open(FormPopUpComponent, { data: {} });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed', result);
      //   this.animal = result;
      this.addItem(result)
    });
  }


  items: IFrom[] = [];
  addItem(newItem: IFrom) {
    this.items.push(newItem);
    console.log("app", this.items);
    //this.refDashboardComponent
  }
  newCopie() {
    return [...this.items]
  }


}
