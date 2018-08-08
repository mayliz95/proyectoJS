import {Component, OnInit} from '@angular/core';
import {TipolugarInterface} from "../interfaces/tipolugar.interface";
import {LugarInterface} from "../interfaces/lugar.interface";
import {UsuarioInterface} from "../interfaces/usuario.interface";
import {LugarService} from "../Servicios/lugar.service";
import {UsuarioService} from "../Servicios/usuario.service";
import {Router} from "@angular/router";
import {TipolugarService} from "../Servicios/tipolugar.service";

@Component({
  selector: 'app-administracion-lugar',
  templateUrl: './administracion-lugar.component.html',
  providers: [LugarService, TipolugarService],
  styleUrls: ['./administracion-lugar.component.css']
})
export class AdministracionLugarComponent implements OnInit {

  lugares: Array<LugarInterface> = [];
  tiposLugar: Array<TipolugarInterface> = [];
  newLugar: LugarInterface;
  usuarioLogueado: UsuarioInterface;

  constructor(private lugarService: LugarService, private _router: Router, private tipoLugarService: TipolugarService) {
  }

  ngOnInit() {
    this.newLugar = new LugarInterface();
    this.usuarioLogueado = UsuarioService.usuarioLogueado;
    if (this.usuarioLogueado) {
      this.lugarService.getLugaresPorUsuario(this.usuarioLogueado.id).subscribe(
        (result: any) => {
          this.lugares = result;
        }
      );
      this.tipoLugarService.getTiposLugar().subscribe(
        (result: any) => {
          this.tiposLugar = result;
        }
      );
    } else {
      const url = ['/login'];
      this._router.navigate(url);
    }
  }

  addFieldValue() {
    this.newLugar.id_usuario=this.usuarioLogueado;
    this.lugarService.postNuevoLugar(this.newLugar).subscribe(
      (result: any) => {
        this.lugarService.getLugaresPorUsuario(this.usuarioLogueado.id).subscribe(
          (result: any) => {
            this.lugares = result;
            UsuarioService.usuarioLogueado.lugares = this.lugares;
          }
        );
      }
    );
    this.newLugar = new LugarInterface();
  }

  deleteFieldValue(lugar:LugarInterface) {
    this.lugarService.deleteLugar(lugar).subscribe(
      (result:any)=>{
        this.lugarService.getLugaresPorUsuario(this.usuarioLogueado.id).subscribe(
          (result2:any)=>{
            this.lugares=result2;
          }
        );
      }
    );
  }

}
