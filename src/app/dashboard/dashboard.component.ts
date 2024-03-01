import { AfterViewInit, CUSTOM_ELEMENTS_SCHEMA, Component, DoCheck, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { IFrom } from '../Interface/ifrom';
// import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {MatTableModule} from '@angular/material/table';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatCardModule} from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog } from '@angular/material/dialog';
import { FormPopUpComponent } from '../form-pop-up/form-pop-up.component';
import { DataService } from '../services/store/store.service';

@Component({
  selector: 'app-dashboard',
  // standalone: true,
  // imports: [MatTableModule ,
  //   MatPaginatorModule,
  //   MatCardModule,
  //   MatButtonModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.sass',
  // schemas:[CUSTOM_ELEMENTS_SCHEMA]
})

export class DashboardComponent  implements  OnInit ,OnChanges {
  dataSource!:IFrom[];
  Total:number =0
  // @Input() callbackFunction!: ((args: any) => void) ;
  // @Input() callbackItemDelete!: ((args: any) => void) ;


  constructor(public dialog: MatDialog,private dataService: DataService) { 
    
  }

getItemDelete(item: IFrom) {
  console.log("getItemDelete",item)
  this.dataService.deleteBudget(item.key)

  // this.callbackItemDelete(item.id)
//throw new Error('Method not implemented.');
}
getItemEdit(item: IFrom) {

  const dialogRef = this.dialog.open(FormPopUpComponent, { data: item});

    dialogRef.afterClosed().subscribe( (result) => {
      console.log('getItemEdit closed', result);
      
      this.dataService.getBudget(result.id).subscribe(i=>console.log("getBudget(result.id)",i))
      //   this.animal = result;
     // this.addItem(result)
     this.dataService.updateBudget(result.id,result)
    //  .then(i=>console.log(i))
     .catch(e=>console.log(e))
  // this.callbackFunction(result)

    });
 // console.log("getItemEdit",item)
//throw new Error('Method not implemented.');
}

  // @Input("items") items!:IFrom[];
  // private items!:IFrom[];

 
  ngOnInit(): void {
  
    this.dataService.getBudgets().subscribe(val=>this.getitems(val));

}
  ngOnChanges(changes: SimpleChanges) {
     console.log("ngOnChanges")


  }
 
getitems(items:IFrom[]){
  console.log(items)
  this.dataSource =items;
  this.Total = items.reduce((accumulator, object) => {
    return accumulator + Number(object.budget);
  }, 0);
}

 
  
  displayedColumns: string[] = ['budget', 'label',"Date","category" ,"actions"];

 
  

}


