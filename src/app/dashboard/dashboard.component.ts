import { AfterViewInit, CUSTOM_ELEMENTS_SCHEMA, Component, DoCheck, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { IFrom } from '../Interface/ifrom';
// import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {MatTableModule} from '@angular/material/table';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatCardModule} from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog } from '@angular/material/dialog';
import { FormPopUpComponent } from '../form-pop-up/form-pop-up.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [MatTableModule ,
    MatPaginatorModule,
    MatCardModule,
    MatButtonModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.sass',
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})

export class DashboardComponent  implements AfterViewInit, OnInit ,OnChanges {
  @Input() callbackFunction!: ((args: any) => void) ;
  @Input() callbackItemDelete!: ((args: any) => void) ;


  constructor(public dialog: MatDialog) { }

getItemDelete(item: IFrom) {
  console.log("getItemDelete",item)
  this.callbackItemDelete(item.id)
//throw new Error('Method not implemented.');
}
getItemEdit(item: IFrom) {

  const dialogRef = this.dialog.open(FormPopUpComponent, { data: item});

    dialogRef.afterClosed().subscribe(result => {
      // console.log('The dialog was closed', result);
      //   this.animal = result;
     // this.addItem(result)
  this.callbackFunction(result)

    });
 // console.log("getItemEdit",item)
//throw new Error('Method not implemented.');
}

  @Input("items") items!:IFrom[];
  dataSource!:IFrom[];
  Total:number =0
  //@ViewChild(MatPaginator) paginator: MatPaginator;
 
  ngOnInit(): void {
  
   // console.log("constructor",this.items)
          this.dataSource = this.items;
 // @Input() items: TodoItem; 
}
  ngOnChanges(changes: SimpleChanges) {
    // console.log("change",this.items,changes['items'])
    
    this.dataSource = this.items

    this.Total = this.items.reduce((accumulator, object) => {
      return accumulator + Number(object.budget);
    }, 0);

  }
 

  ngAfterViewInit() {
  //  this.dataSource.paginator = this.paginator;
  }

  // ngDoCheck() {
  //   console.log('check');
  //   console.log("check::",this.items);
  //   this.dataSource .concat( this.items)
  // }
 
  
  displayedColumns: string[] = ['budget', 'label',"Date","category" ,"actions"];

 
  

}


