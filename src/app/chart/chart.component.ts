import { Component } from '@angular/core';
import Chart from 'chart.js/auto';


@Component({
  selector: 'app-chart',
  // standalone: true,
  // imports: [],
  templateUrl: './chart.component.html',
  styleUrl: './chart.component.sass'
})
export class ChartComponent {

  chart: any = []
  constructor() {}

  ngOnInit() {
    this.chart = new Chart('canvas', {
      type: 'bar',
      data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [
          {
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
            borderWidth: 1,
          },
        ],
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    });
  }

}
