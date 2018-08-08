import { Component, OnInit } from '@angular/core';
import {Temperatura} from "../interfaces/temperatura";
import {TipolugarService} from "../Servicios/tipolugar.service";
import {TemperaturaService} from "../Servicios/temperatura.service";
import {DispositivoService} from "../Servicios/dispositivo.service";
import {DispositivoLugarService} from "../Servicios/dispositivoLugar.service";
import {UsuarioService} from "../Servicios/usuario.service";

@Component({
  selector: 'app-grafico-tiempo-real',
  templateUrl: './grafico-tiempo-real.component.html',
  styleUrls: ['./grafico-tiempo-real.component.css'],
  providers: [UsuarioService, TipolugarService, DispositivoService, DispositivoLugarService, TemperaturaService]
})
export class GraficoTiempoRealComponent implements OnInit {
  // lineChart

  constructor(private _usuarioService: UsuarioService,
              private _tipolugarService: TipolugarService,
              private _dispositivoService: DispositivoService,
              private _dispositivoLugarService: DispositivoLugarService,
              private _temperaturaServic: TemperaturaService
  ) {
  }
  temperaturas: Temperatura[] = [];

  private intervalUpdate: any = null;

  public lineChartData: Array<any> = [
    {data: this.temperaturas, label: 'Sensor'}
  ];
  public lineChartLabels: Array<any> = [];
  public lineChartOptions: any = {
    responsive: true
  };
  public lineChartColors: Array<any> = [
    { // grey
      backgroundColor: 'rgba(148,159,177,0.2)',
      borderColor: 'rgba(148,159,177,1)',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.😎'
    },
    { // dark grey
      backgroundColor: 'rgba(77,83,96,0.2)',
      borderColor: 'rgba(77,83,96,1)',
      pointBackgroundColor: 'rgba(77,83,96,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(77,83,96,1)'
    },
    { // grey
      backgroundColor: 'rgba(148,159,177,0.2)',
      borderColor: 'rgba(148,159,177,1)',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.😎'
    }
  ];
  public lineChartLegend = true;
  public lineChartType = 'line';

  ngOnInit() {
    this.showData();
    this.intervalUpdate = setInterval(function(){
      this.showData();
    }.bind(this), 3000);
  }

  // events
  public chartClicked(e: any): void {
    console.log(e);
  }
  public chartHovered(e: any): void {
    console.log(e);
  }

  private showData(): void {
    let valTemp = [];
    let fechaLabels = [];
    this._temperaturaServic.getTemperaturaPorIdDispositivoLugar(1).subscribe(
      (response:any) => {
        this.temperaturas = response;
        console.log(response);
        this.temperaturas.forEach(function (element) {
            //let fecha = new Date(element.fecha);
            let chartTime: any = new Date(element.fecha);
            chartTime = chartTime.getHours() + ':' + ((chartTime.getMinutes() < 10) ? '0' + chartTime.getMinutes() : chartTime.getMinutes()) + ':' + ((chartTime.getSeconds() < 10) ? '0' + chartTime.getSeconds() : chartTime.getSeconds());
            if(fechaLabels.length > 15) {
              fechaLabels.shift();
              valTemp.shift();
            }
            fechaLabels.push(chartTime);
            valTemp.push(element.valorTemperatura);
          }
        );
        this.lineChartLabels = fechaLabels;
        this.lineChartData[0].data = valTemp;
        //console.log(this.lineChartData[0].data)
        //this.chart.update();
      }, error => {
        console.error("ERROR: Unexpected response");
      });
  }
}
