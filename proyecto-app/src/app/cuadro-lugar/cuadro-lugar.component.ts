import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from "@angular/forms";

@Component({
  selector: 'app-cuadro-lugar',
  templateUrl: './cuadro-lugar.component.html',
  styleUrls: ['./cuadro-lugar.component.css']
})
export class CuadroLugarComponent implements OnInit {

  foods = [
    {value: 'cent-0', viewValue: 'ºC'},
    {value: 'farenheit-1', viewValue: 'ºF'},
  ];
  //temperatura;
  tiposLugar = [{id: '1', nombre: 'Casa', lugares: [
    {id: '1', nombre: 'Cuarto Master', idtipoLugar: '1', idusuario: '1'},
    {id: '2', nombre: 'Cocina', idtipoLugar: '1', idusuario: '1'}]},
    {id: '2', nombre: 'DataCenter'}];
  //lugares = [{id: '1', nombre: 'Cuarto Master', idtipoLugar: '1', idusuario: '1'}, {id: '2', nombre: 'Cocina', idtipoLugar: '1', idusuario: '1'}];
  dispositivos = [{id: '1', nombre: 'Sensor 1213', idusuario: '1', temperatura: 12}, {id: '2', nombre: 'Sensor239804', idusuario: '1', temperatura: 31}];
  tipoLugarSeleccionado = new FormControl('', [Validators.required]);
  color = "";

  constructor() {}
  ngOnInit() {
  }
}
