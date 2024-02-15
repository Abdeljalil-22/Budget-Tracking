import { Component } from '@angular/core';
import { IFrom } from '../Interface/ifrom';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { FormPopUpComponent } from '../form-pop-up/form-pop-up.component';
import { MatDialog } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';


let id=0;

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [DashboardComponent,
    MatButtonModule,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.sass'
})

export class HomeComponent {
  items: IFrom[] = [];


  constructor(public dialog: MatDialog) {
    this.callbackOpenDialog = this.callbackOpenDialog.bind(this);
    this.callbackItemDelete =this.callbackItemDelete.bind(this);
   }

  openDialog(): void {

    const dialogRef = this.dialog.open(FormPopUpComponent, { data: {} });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed', result);
      //   this.animal = result;
      this.addItem(result)
    });
  }

  callbackOpenDialog(item:IFrom){
    console.log("callbackOpenDialog",item,item.id)
    this.items= this.items.map(i=>i.id==item.id?{...item}:i)

  }

  callbackItemDelete(id:number){
    console.log("callbackItemDelete",id)
    this.items= this.items.filter(i=>i.id!==id)

  }
  addItem(newItem: IFrom) {

    this.items.push({...newItem,id:id++});
    console.log("app", this.items);
    //this.refDashboardComponent
  }
  newCopie() {
   // console.log("newCopie",this.items)
    return [...this.items]
  }

  

}


