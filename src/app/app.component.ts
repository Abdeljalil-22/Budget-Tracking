import { Component } from '@angular/core';
import { IFrom } from './intrfa/ifrom';
import { DashboardComponent } from './dashboard/dashboard.component';
// import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  // standalone: true,
  // imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.sass'
})

export class AppComponent {
  title = 'Budget-Tracking';

  items:IFrom[] = [{budget:23, lable:"yyty"},{budget:23, lable:"yyty"}];
  addItem(newItem: IFrom) {
    this.items.push(newItem);
    console.log("app",this.items);
    //this.refDashboardComponent
  }

  
}
