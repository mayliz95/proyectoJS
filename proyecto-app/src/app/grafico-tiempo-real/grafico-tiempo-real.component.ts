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
  valoresTemperatura: number[] = [];
  fechaTemperatura: string[] = [];

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
    let valTemp: number[] = [];
    let fechaTemp: string[] = [];
    let fechaTempP: number[] = [];
    this._temperaturaServic.getTemperaturaPorIdDispositivoLugar(3).subscribe(
      (result: any) => {
        this.temperaturas = result;
        this.temperaturas.forEach(function (element) {
            let fecha = new Date(element.fecha);
            fechaTemp.push(element.fecha.replace("T","\n"));
            valTemp.push(element.valorTemperatura);
          }
        )
      }
    );
    this.valoresTemperatura =  valTemp;
    this.fechaTemperatura = fechaTemp;
    this.lineChartData[0].data = this.valoresTemperatura;
    this.lineChartLabels = this.fechaTemperatura;
  }

  obtenerTemperaturas() {
    let valTemp: number[] = [];
    let fechaTemp: string[] = [];
    let fechaTempP: number[] = [];
    this._temperaturaServic.getTemperaturaPorIdDispositivoLugar(3).subscribe(
      (result: any) => {
        this.temperaturas = result;
        this.temperaturas.forEach(function (element) {
          let fecha = new Date(element.fecha);
          fechaTemp.push(element.fecha.replace("T","\n"));
          valTemp.push(element.valorTemperatura);
          }
        )
      }
    );
    this.valoresTemperatura =  valTemp;
    this.fechaTemperatura = fechaTemp;
    this.lineChartData[0].data = this.valoresTemperatura;
    this.lineChartLabels = this.fechaTemperatura;
  }
  // events
  public chartClicked(e: any): void {
    console.log(e);
  }
  public chartHovered(e: any): void {
    console.log(e);
  }
}
