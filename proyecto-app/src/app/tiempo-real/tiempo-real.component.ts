import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-tiempo-real',
  templateUrl: './tiempo-real.component.html',
  styleUrls: ['./tiempo-real.component.css']
})
export class TiempoRealComponent implements OnInit {

  private intervalUpdate: any = null;
  public chart: any = null;

  constructor() { }

  ngOnInit() {
    this.intervalUpdate = setInterval(function(){
      this.showData();
    }.bind(this), 3000);
    this.chart = new Chart('realtime', {
      type: 'line',
      data: {
        labels: [],
        datasets: [
          {
            label: 'Data',
            fill: false,
            data: [],
            backgroundColor: '#168ede',
            borderColor: '#168ede'
          }
        ]
      },
      options: {
        tooltips: {
          enabled: false
        },
        legend: {
          display: true,
          position: 'bottom',
          labels: {
            fontColor: 'white'
          }
        },
        scales: {
          yAxes: [{
            ticks: {
              fontColor: "white"
            }
          }],
          xAxes: [{
            ticks: {
              fontColor: "white",
              beginAtZero: true
            }
          }]
        }
      }
    });
  }
  private ngOnDestroy(): void {
    clearInterval(this.intervalUpdate);
  }
  private showData(): void {
    console.log(1);
  }
}
