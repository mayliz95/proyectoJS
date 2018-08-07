import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-barra-superior',
  templateUrl: './barra-superior.component.html',
  styleUrls: ['./barra-superior.component.css']
})
export class BarraSuperiorComponent implements OnInit {

  constructor(private _router: Router) {}

  ngOnInit() {
  }

  irAugar() {
    const url = ['/lugar'];
    this._router.navigate(url);
  }
  irAHome() {
    const url = ['/home'];
    this._router.navigate(url);
  }
  irAEstadisTicas() {
    //const url = ['/'];
    //this._router.navigate(url);
  }
  salir() {
    const url = ['/inicio'];
    this._router.navigate(url);
  }
  irAConfiguracionTipoLugar() {
    const url = ['/admtipolugar'];
    this._router.navigate(url);
  }
  irAConfiguracionLugar() {
    const url = ['/admlugar'];
    this._router.navigate(url);
  }
  irAConfiguracionDispositivo() {
    const url = ['/admdispositivo'];
    this._router.navigate(url);
  }

}
