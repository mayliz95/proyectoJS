import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CuadroLugarComponent } from './cuadro-lugar/cuadro-lugar.component';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AppRoutingModule} from './app-routing.module';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { GraficoTiempoRealComponent } from './grafico-tiempo-real/grafico-tiempo-real.component';
import { SignupComponent } from './signup/signup.component';
import { BarraSuperiorComponent } from './barra-superior/barra-superior.component';
import {MatButtonModule, MatIcon, MatIconModule, MatToolbarModule} from "@angular/material";
import {HttpClientModule} from "@angular/common/http";
import { AdministracionTipoLugarComponent } from './administracion-tipo-lugar/administracion-tipo-lugar.component';
import { AdministracionLugarComponent } from './administracion-lugar/administracion-lugar.component';
import { AdministracionDispositivoComponent } from './administracion-dispositivo/administracion-dispositivo.component';

@NgModule({
  declarations: [
    AppComponent,
    CuadroLugarComponent,
    LoginComponent,
    GraficoTiempoRealComponent,
    SignupComponent,
    BarraSuperiorComponent,
    AdministracionTipoLugarComponent,
    AdministracionLugarComponent,
    AdministracionDispositivoComponent
  ],
  imports: [
    BrowserModule,
    MatCardModule,
    MatInputModule,
    MatSelectModule,
    MatIconModule,
    MatToolbarModule,
    MatButtonModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    NgxChartsModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
