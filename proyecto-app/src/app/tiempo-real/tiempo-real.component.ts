import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';
import {TemperaturaService} from "../Servicios/temperatura.service";
import {Temperatura} from "../interfaces/temperatura";

@Component({
  selector: 'app-tiempo-real',
  templateUrl: './tiempo-real.component.html',
  styleUrls: ['./tiempo-real.component.css'],
  providers: [TemperaturaService]
})
export class TiempoRealComponent implements OnInit {

  private intervalUpdate: any = null;
  public chart: any = null;
  temperaturas: Temperatura[];
  constructor(private temperaturaService: TemperaturaService) { }

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
    let valTemp = [];
    let fechaLabels = [];
    this.temperaturaService.getTemperaturaPorIdDispositivoLugar(1).subscribe(
      (response:any) => {
        this.temperaturas = response;
        this.temperaturas.forEach(function (element) {
            //let fecha = new Date(element.fecha);
            let chartTime: any = new Date(response);
            chartTime = chartTime.getHours() + ':' + ((chartTime.getMinutes() < 10) ? '0' + chartTime.getMinutes() : chartTime.getMinutes()) + ':' + ((chartTime.getSeconds() < 10) ? '0' + chartTime.getSeconds() : chartTime.getSeconds());
            if(fechaLabels.length > 15) {
              fechaLabels.shift();
              valTemp.shift();
            }
            fechaLabels.push(chartTime);
            valTemp.push(element.valorTemperatura);
            //fechaTemp.push(element.fecha.replace("T","\n"));
          }
        );

        this.chart.data.labels.push(fechaLabels);
        this.chart.data.datasets[0].data.push(valTemp);
        this.chart.update();
    }, error => {
      console.error("ERROR: Unexpected response");
    });
  }
}
