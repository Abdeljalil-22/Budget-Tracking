import { CUSTOM_ELEMENTS_SCHEMA, Component, DoCheck, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { IFrom } from '../intrfa/ifrom';
// import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {MatTableModule} from '@angular/material/table';
@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [MatTableModule ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.sass',
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})

export class DashboardComponent implements OnInit ,OnChanges {
  @Input("items") items!:IFrom[];
  dataSource!:IFrom[];
 
  ngOnInit(): void {
  
    console.log("constructor",this.items)
          this.dataSource = this.items;
 // @Input() items: TodoItem; 
}
  ngOnChanges(changes: SimpleChanges) {
    // console.log("change",this.items,changes['items'])
    
    this.dataSource = this.items

  }

  // ngDoCheck() {
  //   console.log('check');
  //   console.log("check::",this.items);
  //   this.dataSource .concat( this.items)
  // }
 
  
  displayedColumns: string[] = ['budget', 'lable' ];
  // dataSource:IFrom[]=[{budget:23, lable:"yyty"}]
  // DashboardComponent(){
  // //   document.getElementById("defaultGrid"). = [
  // //     { item1: "value 1-1", item2: "value 2-1" },
  // //     { item1: "value 1-2", item2: "value 2-2" },
  // //     { item1: "value 1-3", item2: "value 2-3" },
  // // ]; 
  // }
 
  

}


