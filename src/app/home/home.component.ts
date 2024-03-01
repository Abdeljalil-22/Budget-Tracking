import { Component, OnChanges, OnInit } from '@angular/core';
import { IFrom } from '../Interface/ifrom';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { FormPopUpComponent } from '../form-pop-up/form-pop-up.component';
import { MatDialog } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { DataService } from '../services/store/store.service';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth/auth.service';



@Component({
  selector: 'app-home',
  // standalone: true,
  // imports: [DashboardComponent,
  //   MatButtonModule,
  // ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.sass'
})

export class HomeComponent implements OnInit {
  items: IFrom[] = [];


  constructor(public dialog: MatDialog,private dataService: DataService,private authService: AuthService ,private Router:Router) {

   }
  ngOnInit(): void {
 if(!this.authService.isAuthenticated()){
this.Router.navigate(["/login"])
 }
  }

  openDialog(): void {

    const dialogRef = this.dialog.open(FormPopUpComponent, { data: {} });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed', result);
      //   this.animal = result;
      this.addItem(result)
    });
  }

  // callbackOpenDialog(item:IFrom){
  //   console.log("callbackOpenDialog",item,item.id)
  //   this.items= this.items.map(i=>i.id==item.id?{...item}:i)

  // }

  // callbackItemDelete(id:number){
  //   console.log("callbackItemDelete",id)
  //   this.items= this.items.filter(i=>i.id!==id)

  // }
  addItem(newItem: IFrom) {

   // this.items.push({...newItem,id:id++});

    this.dataService.createBudget(newItem) 
    .then(response => {
      // Handle success response (optional)
      console.log('Item added successfully:', response);
    }, error => {
      // Handle error (optional)
      console.error('Error adding item:', error);
    });
    console.log("app", this.items);
    //this.refDashboardComponent
  }
//   newCopie() {
//    // console.log("newCopie",this.items)
//    let Budgets:any[] =[]
//  let test = this.dataService.getBudgets().subscribe((item)=>{
//   console.log(item);
//   Budgets =item})

// // let test2 = test.subscribe((item)=>console.log("test2",test2))
// // console.log("test2",test2)
//     // return [...this.items]
//     return [...Budgets];
//   }

  

}


