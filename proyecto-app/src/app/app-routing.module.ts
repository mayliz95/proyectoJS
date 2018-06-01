import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CuadroLugarComponent} from "./cuadro-lugar/cuadro-lugar.component";
import {LoginComponent} from "./login/login.component";
import {AppComponent} from "./app.component";
<<<<<<< HEAD
import { GraficoTiempoRealComponent } from './grafico-tiempo-real/grafico-tiempo-real.component';
=======
import {SignupComponent} from "./signup/signup.component";
>>>>>>> 8700df1139f8a37f6e9daabb038d8ef97f60496f

const routes: Routes = [
  { path: 'lugar', component: CuadroLugarComponent },
  { path: 'login', component: LoginComponent },
<<<<<<< HEAD
  { path: 'grafico', component: GraficoTiempoRealComponent}
=======
  { path: 'signup', component: SignupComponent }
>>>>>>> 8700df1139f8a37f6e9daabb038d8ef97f60496f
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
