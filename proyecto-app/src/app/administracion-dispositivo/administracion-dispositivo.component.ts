import { Component, OnInit } from '@angular/core';
import {TipolugarInterface} from "../interfaces/tipolugar.interface";

@Component({
  selector: 'app-administracion-dispositivo',
  templateUrl: './administracion-dispositivo.component.html',
  styleUrls: ['./administracion-dispositivo.component.css']
})
export class AdministracionDispositivoComponent implements OnInit {

  tiposLugar: Array<TipolugarInterface> = [];
  newTipoLugar: TipolugarInterface;
  constructor() {
  }

  ngOnInit() {
  }
  addFieldValue() {
    this.tiposLugar.push(this.newTipoLugar);
    this.newTipoLugar = null;
  }

  deleteFieldValue(index) {
    this.tiposLugar.splice(index, 1);
  }

}
