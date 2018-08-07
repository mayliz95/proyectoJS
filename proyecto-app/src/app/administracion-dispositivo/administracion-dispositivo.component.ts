import { Component, OnInit } from '@angular/core';
import {TipolugarInterface} from "../interfaces/tipolugar.interface";
import {DispositivoInterface} from "../interfaces/dispositivo.interface";
import {DispositivoService} from "../Servicios/dispositivo.service";
import {UsuarioInterface} from "../interfaces/usuario.interface";
import {UsuarioService} from "../Servicios/usuario.service";

@Component({
  selector: 'app-administracion-dispositivo',
  templateUrl: './administracion-dispositivo.component.html',
  providers: [DispositivoService],
  styleUrls: ['./administracion-dispositivo.component.css']
})
export class AdministracionDispositivoComponent implements OnInit {

  dispositivos: Array<DispositivoInterface> = [];
  newDispositivo: DispositivoInterface;
  usuarioLogueado:UsuarioInterface;
  constructor(private dipositivoService:DispositivoService) {
  }

  ngOnInit() {
    this.newDispositivo=new DispositivoInterface();
    this.usuarioLogueado=UsuarioService.usuarioLogueado;
    this.dipositivoService.getDispositivosPorUsuario(this.usuarioLogueado.id).subscribe(
      (result:any)=>{
        this.dispositivos=result;
      }
    )
  }
  addFieldValue() {
    this.newDispositivo.id_usuario=this.usuarioLogueado.id;
    this.dipositivoService.postNuevoDispositivo(this.newDispositivo);
    this.dipositivoService.getDispositivosPorUsuario(this.usuarioLogueado.id).subscribe(
      (result:any)=>{
        this.dispositivos=result;
      }
    )
    this.newDispositivo = new DispositivoInterface();
  }

  deleteFieldValue(index) {
    this.dispositivos.splice(index, 1);
  }

}
