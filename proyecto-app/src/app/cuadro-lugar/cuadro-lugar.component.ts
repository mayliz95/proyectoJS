import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cuadro-lugar',
  templateUrl: './cuadro-lugar.component.html',
  styleUrls: ['./cuadro-lugar.component.css']
})
export class CuadroLugarComponent implements OnInit {

  constructor() {}

  foods = [
    {value: 'cent-0', viewValue: 'ºC'},
    {value: 'farenheit-1', viewValue: 'ºF'},
  ];
  temperatura = "12";
  //color =

  ngOnInit() {
  }

}
