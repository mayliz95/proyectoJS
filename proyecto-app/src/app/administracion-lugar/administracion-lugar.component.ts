import { Component, OnInit } from '@angular/core';
import {TipolugarInterface} from "../interfaces/tipolugar.interface";
import {LugarInterface} from "../interfaces/lugar.interface";
import {UsuarioInterface} from "../interfaces/usuario.interface";
import {LugarService} from "../Servicios/lugar.service";
import {UsuarioService} from "../Servicios/usuario.service";

@Component({
  selector: 'app-administracion-lugar',
  templateUrl: './administracion-lugar.component.html',
  providers: [LugarService],
  styleUrls: ['./administracion-lugar.component.css']
})
export class AdministracionLugarComponent implements OnInit {

  lugares: Array<LugarInterface> = [];
  newLugar: LugarInterface;
  usuarioLogueado:UsuarioInterface;
  constructor(private lugarService:LugarService) {
  }

  ngOnInit() {
    this.usuarioLogueado=UsuarioService.usuarioLogueado;
    this.lugarService.getLugaresPorUsuario(this.usuarioLogueado.id).subscribe(
      (result:any)=>{
        this.lugares=result;
      }
    );
  }
  addFieldValue() {
    this.lugares.push(this.newLugar);
    this.newLugar = null;
  }

  deleteFieldValue(index) {
    this.lugares.splice(index, 1);
  }

}
