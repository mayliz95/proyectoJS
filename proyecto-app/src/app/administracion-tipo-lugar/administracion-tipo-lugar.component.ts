import {Component, OnInit} from '@angular/core';
import {TipolugarInterface} from '../interfaces/tipolugar.interface';
import {TipolugarService} from "../Servicios/tipolugar.service";
import {UsuarioInterface} from "../interfaces/usuario.interface";
import {UsuarioService} from "../Servicios/usuario.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-administracion-tipo-lugar',
  templateUrl: './administracion-tipo-lugar.component.html',
  providers: [TipolugarService],
  styleUrls: ['./administracion-tipo-lugar.component.css']
})
export class AdministracionTipoLugarComponent implements OnInit {
  tiposLugar: Array<TipolugarInterface> = [];
  newTipoLugar: TipolugarInterface;
  usuarioLogueado: UsuarioInterface;

  constructor(private tipoLugarService: TipolugarService, private _router: Router) {
  }

  ngOnInit() {
    this.newTipoLugar = new TipolugarInterface();
    this.usuarioLogueado = UsuarioService.usuarioLogueado;
    if (this.usuarioLogueado) {
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
    this.tipoLugarService.postNuevoTipoLugar(this.newTipoLugar).subscribe(
      (result: any) => {
        this.tipoLugarService.getTiposLugar().subscribe(
          (result: any) => {
            this.tiposLugar = result;
          }
        );
      }
    );

    this.newTipoLugar = new TipolugarInterface();
  }

  deleteFieldValue(tipoLugar:TipolugarInterface) {
    this.tipoLugarService.deleteTipoLugar(tipoLugar).subscribe(
      (result:any)=>{
        this.tipoLugarService.getTiposLugar().subscribe(
          (result2:any)=>{
            this.tiposLugar=result2;
          }
        );
      }
    );
  }
}
