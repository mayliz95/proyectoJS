import {Component, OnInit} from '@angular/core';
import {TipolugarInterface} from '../interfaces/tipolugar.interface';

@Component({
  selector: 'app-administracion-tipo-lugar',
  templateUrl: './administracion-tipo-lugar.component.html',
  styleUrls: ['./administracion-tipo-lugar.component.css']
})
export class AdministracionTipoLugarComponent implements OnInit {
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
