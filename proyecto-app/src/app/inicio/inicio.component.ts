import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  constructor(private _router: Router) { }

  ngOnInit() {
  }

  irALogin() {
    const url = ['/login'];
    this._router.navigate(url);
  }
  irARegistro() {
    const url = ['/signup'];
    this._router.navigate(url);
  }
}
