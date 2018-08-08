import {Component, OnInit} from '@angular/core';
import {TipolugarInterface} from "../interfaces/tipolugar.interface";
import {DispositivoInterface} from "../interfaces/dispositivo.interface";
import {DispositivoService} from "../Servicios/dispositivo.service";
import {UsuarioInterface} from "../interfaces/usuario.interface";
import {UsuarioService} from "../Servicios/usuario.service";
import {LugarInterface} from "../interfaces/lugar.interface";
import {LugarService} from "../Servicios/lugar.service";
import {Router} from "@angular/router";
import {RelacionService} from "../Servicios/relacion.service";
import {element} from "protractor";
import {DispositivoLugar} from "../interfaces/dispositivoLugar";

@Component({
  selector: 'app-administracion-dispositivo',
  templateUrl: './administracion-dispositivo.component.html',
  providers: [DispositivoService, LugarService, RelacionService],
  styleUrls: ['./administracion-dispositivo.component.css']
})
export class AdministracionDispositivoComponent implements OnInit {

  dispositivos: Array<DispositivoInterface> = [];
  dispositivosLugares: Array<DispositivoLugar>=[];
  lugares: Array<LugarInterface> = [];
  newDispositivoLugar: DispositivoLugar;
  usuarioLogueado: UsuarioInterface;
  dispositivoSeleccionado: DispositivoInterface;
  lugarSeleccionado: LugarInterface;

  constructor(private dipositivoService: DispositivoService, private lugarService: LugarService,private _router: Router, private relacionService:RelacionService) {
  }

  ngOnInit() {
    this.newDispositivoLugar = new DispositivoLugar();
    this.usuarioLogueado = UsuarioService.usuarioLogueado;
    let relacionService1=this.relacionService;
    let aux:Array<DispositivoLugar>=[];
    if (this.usuarioLogueado) {
      this.dipositivoService.getDispositivosPorUsuario(this.usuarioLogueado.id).subscribe(
        (resultD:any)=>{
          this.dispositivos=resultD;
          this.dispositivos.forEach(
            (element:DispositivoInterface)=>{
              let aux2:Array<DispositivoLugar>=[];
              relacionService1.getDispositivosLugarPorDispositivo(element.id).subscribe(
                (result:any)=>{
                  aux2=result;
                  aux=aux.concat(aux2);
                  this.dispositivosLugares=aux;
                }
              );
            }
          );
        }
      );
      this.lugarService.getLugaresPorUsuario(this.usuarioLogueado.id).subscribe(
        (resultL:any)=>{
          this.lugares=resultL;
        }
      );
    }else {
      const url = ['/login'];
      this._router.navigate(url);
    }

  }

  addFieldValue() {
    let aux:Array<DispositivoLugar>=[];
    let relacionService1=this.relacionService;
    this.relacionService.postNuevoDispositivoLugar(this.newDispositivoLugar).subscribe(
      (result:any)=> {
        this.dispositivos.forEach(
          (element:DispositivoInterface)=>{
            let aux2:Array<DispositivoLugar>=[];
            relacionService1.getDispositivosLugarPorDispositivo(element.id).subscribe(
              (result:any)=>{
                aux2=result;
                aux=aux.concat(aux2);
                this.dispositivosLugares=aux;
              }
            );
          }
        );
      }
    );
    this.newDispositivoLugar = new DispositivoLugar();
  }

  deleteFieldValue(dispositivoLugar:DispositivoLugar) {
    let aux:Array<DispositivoLugar>=[];
    let relacionService1=this.relacionService;
    this.relacionService.deleteRelacion(dispositivoLugar).subscribe(
      (result:any)=> {
        this.dispositivos.forEach(
          (element:DispositivoInterface)=>{
            let aux2:Array<DispositivoLugar>=[];
            relacionService1.getDispositivosLugarPorDispositivo(element.id).subscribe(
              (result:any)=>{
                aux2=result;
                aux=aux.concat(aux2);
                this.dispositivosLugares=aux;
              }
            );
          }
        );
      }
    );
  }

}
