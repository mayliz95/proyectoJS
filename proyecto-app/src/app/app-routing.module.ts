import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CuadroLugarComponent} from "./cuadro-lugar/cuadro-lugar.component";
import {LoginComponent} from "./login/login.component";
import {AppComponent} from "./app.component";

const routes: Routes = [
  { path: 'lugar', component: CuadroLugarComponent },
  { path: 'login', component: LoginComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
