import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CuadroLugarComponent} from './cuadro-lugar/cuadro-lugar.component';
import {LoginComponent} from './login/login.component';
import {GraficoTiempoRealComponent} from './grafico-tiempo-real/grafico-tiempo-real.component';
import {SignupComponent} from './signup/signup.component';
import {AdministracionTipoLugarComponent} from './administracion-tipo-lugar/administracion-tipo-lugar.component';
import {AdministracionLugarComponent} from "./administracion-lugar/administracion-lugar.component";
import {AdministracionDispositivoComponent} from "./administracion-dispositivo/administracion-dispositivo.component";


const routes: Routes = [
  {path: 'lugar', component: CuadroLugarComponent},
  {path: 'admtipolugar', component: AdministracionTipoLugarComponent},
  {path: 'login', component: LoginComponent},
  {path: 'grafico', component: GraficoTiempoRealComponent},
  {path: 'signup', component: SignupComponent},
  {path: 'admlugar', component: AdministracionLugarComponent},
  {path: 'admdispositivo', component: AdministracionDispositivoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
