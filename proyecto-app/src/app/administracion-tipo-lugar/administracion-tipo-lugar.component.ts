import {Component, OnInit} from '@angular/core';
import {TipolugarInterface} from '../interfaces/tipolugar.interface';
import {TipolugarService} from "../Servicios/tipolugar.service";
import {UsuarioInterface} from "../interfaces/usuario.interface";
import {UsuarioService} from "../Servicios/usuario.service";

@Component({
  selector: 'app-administracion-tipo-lugar',
  templateUrl: './administracion-tipo-lugar.component.html',
  providers: [TipolugarService],
  styleUrls: ['./administracion-tipo-lugar.component.css']
})
export class AdministracionTipoLugarComponent implements OnInit {
  tiposLugar: Array<TipolugarInterface> = [];
  newTipoLugar: TipolugarInterface;
  usuarioLogueado:UsuarioInterface;
  constructor(private tipoLugarService:TipolugarService) {
  }

  ngOnInit() {
    this.usuarioLogueado=UsuarioService.usuarioLogueado;
    this.tipoLugarService.getTiposLugar().subscribe(
      (result:any)=>{
       this.tiposLugar=result;
      }
    )
  }
  addFieldValue() {
    this.tipoLugarService.postNuevoTipoLugar(this.newTipoLugar);
    this.tiposLugar.push(this.newTipoLugar);
    this.newTipoLugar = null;
  }

  deleteFieldValue(index) {
    this.tiposLugar.splice(index, 1);
  }
}
