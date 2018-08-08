import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from "@angular/forms";
import {UsuarioService} from "../Servicios/usuario.service";
import {Usuario} from "../interfaces/usuario";
import {TipolugarService} from "../Servicios/tipolugar.service";
import {TipolugarInterface} from "../interfaces/tipolugar.interface";
import {DispositivoService} from "../Servicios/dispositivo.service";
import {DispositivoInterface} from "../interfaces/dispositivo.interface";
import {DispositivoLugarService} from "../Servicios/dispositivoLugar.service";
import {DispositivoLugar} from "../interfaces/dispositivoLugar";
import {LugarInterface} from "../interfaces/lugar.interface";
import {UsuarioInterface} from "../interfaces/usuario.interface";
import {TemperaturaService} from "../Servicios/temperatura.service";
import {Temperatura} from "../interfaces/temperatura";
import {Router} from "@angular/router";

@Component({
  selector: 'app-cuadro-lugar',
  templateUrl: './cuadro-lugar.component.html',
  styleUrls: ['./cuadro-lugar.component.css'],
  providers: [UsuarioService, TipolugarService, DispositivoService, DispositivoLugarService, TemperaturaService]
})
export class CuadroLugarComponent implements OnInit {

  usuarioLogueado: UsuarioInterface;
  lugaresDeUsuario;
  dispositivosDelUsuario;
  idTiposLugar = [];
  dispositivosPrueba= [];
  dispositivoLugares: DispositivoLugar[];
  tiposLugar: TipolugarInterface[];
  tipoLugarSeleccionado = new FormControl('', [Validators.required]);
  temperatura: number;
  color = "";

  constructor(private _usuarioService: UsuarioService,
              private _tipolugarService: TipolugarService,
              private _dispositivoService: DispositivoService,
              private _dispositivoLugarService: DispositivoLugarService,
              private _temperaturaServic: TemperaturaService,
              private _router: Router) {}

  ngOnInit() {
    /*this._usuarioService.getUsuarios().subscribe(
      (result:any)=>{
        this.usuarios = result;
      }
    );*/
    this.usuarioLogueado = UsuarioService.usuarioLogueado;
    if (this.usuarioLogueado) {
      this.lugaresDeUsuario = UsuarioService.usuarioLogueado.lugares;
      this.dispositivosDelUsuario = UsuarioService.usuarioLogueado.dispositivos;
      this.obtenerIdTipoLugarPorUsuario();
      this.obtenerIdDispositivoLugarPorUsuario();
    }else {
      const url = ['/login'];
      this._router.navigate(url);
    }
  }
  loguearUsuario(usuario: UsuarioInterface) {   //Traer LugaresPorUsuario
    //UsuarioService.usuarioLogueado = usuario;
  }
  obtenerIdTipoLugarPorUsuario() {
    let aux = [];
    this.lugaresDeUsuario.forEach(function (element) {
      aux.push(element.id_tipolugar);
    });
    this.idTiposLugar = Array.from(new Set(aux));
    this.obtenerTipoLugarPorUsuario();
  }
  obtenerIdDispositivoLugarPorUsuario() {
    let auxDispositivos = [];
    let serviceDispositivo: DispositivoService = this._dispositivoService;
    let serviceDispLugar: DispositivoLugarService = this._dispositivoLugarService;
    let aux = [];
    this.dispositivosDelUsuario.forEach(function (element) {
      serviceDispositivo.getDispositivoPorId(element.id).subscribe(
        (res: DispositivoInterface) => {
          auxDispositivos.push(res);
          res.dispositivoLugares.forEach(function (element) {
            serviceDispLugar.getDispositivoLugarPorId(element.id).subscribe(
              (result:DispositivoLugar) => {
                aux.push(result);
              })
          })
        }
      );
    });
    this.dispositivosPrueba = auxDispositivos;
    this.dispositivoLugares = aux;
    //console.log("dispoPrueba", this.dispositivosPrueba);
  }

  obtenerTipoLugarPorUsuario() {
    let serviceTipoLugarAux: TipolugarService = this._tipolugarService;
    let aux = [];
    this.idTiposLugar.forEach(function (element) {
        serviceTipoLugarAux.getTipoLugarPorId(element).subscribe(
          (result:TipolugarInterface)=>{
            result.lugares = result.lugares.filter((lugar:any) => {
              let usuarioAux:UsuarioInterface=new UsuarioInterface();
              usuarioAux.id=lugar.id_usuario;
              lugar.id_usuario=usuarioAux;
              if(lugar.id_usuario.id == UsuarioService.usuarioLogueado.id){
                return lugar;
              }
            });
            aux.push(result);
          });
      }
    );
    this.tiposLugar = aux;
  } //Funciona Bien

  getIdLugarDispositivoLugar(DispositivoLugar: DispositivoLugar [], idLugar): number {
    let aux;
    DispositivoLugar.forEach(function (value) {
      if (value.id_lugar === idLugar) {
        aux = value.id_lugar;
      }
    });
    return aux;
  } //Funciona Bien

  obtenerUltimaTemperatura(dispositivo: DispositivoInterface, idLugar) {
    let idDispoLugar: number;
    let temperatura: Temperatura;
    let serviceTemperatura: TemperaturaService = this._temperaturaServic;
    dispositivo.dispositivoLugares.forEach( function (element) {
      if(element.id_lugar === idLugar){
        idDispoLugar = element.id;
        console.log(idDispoLugar);
        serviceTemperatura.getTemperaturaPorIdDispositivoLugarDescendente(idDispoLugar).subscribe(
          (result: Temperatura[]) => {
            TemperaturaService.temperaturaFinal = result[0].valorTemperatura;
          }
        );
      }
    });
    this.temperatura = TemperaturaService.temperaturaFinal;
  }
}
