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

@Component({
  selector: 'app-cuadro-lugar',
  templateUrl: './cuadro-lugar.component.html',
  styleUrls: ['./cuadro-lugar.component.css'],
  providers: [UsuarioService, TipolugarService, DispositivoService, DispositivoLugarService]
})
export class CuadroLugarComponent implements OnInit {

  usuarios: Array<Usuario>;
  lugaresDeUsuario;
  dispositivosDelUsuario;
  idTiposLugar = [];
  dispositivosPrueba= [];
  dispositivoLugares: DispositivoLugar[];
  tiposLugar: TipolugarInterface[];
  tipoLugarSeleccionado = new FormControl('', [Validators.required]);
  temperatura;
  color = "";

  constructor(private _usuarioService: UsuarioService,
              private _tipolugarService: TipolugarService,
              private _dispositivoService: DispositivoService,
              private _dispositivoLugarService: DispositivoLugarService) {}

  ngOnInit() {
    this._usuarioService.getUsuarios().subscribe(
      (result:any)=>{
        this.usuarios = result;
      }
    );
  }
  loguearUsuario(usuario: UsuarioInterface) {   //Traer LugaresPorUsuario
    UsuarioService.usuarioLogueado = usuario;
    this.lugaresDeUsuario = UsuarioService.usuarioLogueado.lugares;
    this.dispositivosDelUsuario = UsuarioService.usuarioLogueado.dispositivos;
    this.obtenerIdTipoLugarPorUsuario();
    this.obtenerIdDispositivoLugarPorUsuario();
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
  }

  obtenerTipoLugarPorUsuario() {
    let serviceTipoLugarAux: TipolugarService = this._tipolugarService;
    let aux = [];
    this.idTiposLugar.forEach(function (element) {
        serviceTipoLugarAux.getTipoLugarPorId(element).subscribe(
          (result:TipolugarInterface)=>{
            result.lugares = result.lugares.filter(lugar => lugar.id_usuario === UsuarioService.usuarioLogueado.id);
            aux.push(result);
          })
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

  obtenerUltimaTemperatura(idLugar, idDispositivo) {
    let dispositivoLugar: DispositivoLugar;
    this.dispositivoLugares.forEach(function (element) {
      let lugar: any = element.id_lugar;
      var dispositivo: any =  element.id_dispositivo;
      if(lugar.id === idLugar&&dispositivo.id === idDispositivo){
        dispositivoLugar = element;
      }
    });
    var dim = dispositivoLugar.temperaturas.length;
    this.temperatura = dispositivoLugar.temperaturas[dim-1].valorTemperatura;
  }
}
