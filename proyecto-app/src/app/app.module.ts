import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CuadroLugarComponent } from './cuadro-lugar/cuadro-lugar.component';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { LoginComponent } from './login/login.component';
import {ReactiveFormsModule} from '@angular/forms';
import {AppRoutingModule} from "./app-routing.module";
<<<<<<< HEAD
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { GraficoTiempoRealComponent } from './grafico-tiempo-real/grafico-tiempo-real.component';
=======
import { SignupComponent } from './signup/signup.component';
>>>>>>> 8700df1139f8a37f6e9daabb038d8ef97f60496f
@NgModule({
  declarations: [
    AppComponent,
    CuadroLugarComponent,
    LoginComponent,
<<<<<<< HEAD
    GraficoTiempoRealComponent
=======
    SignupComponent
>>>>>>> 8700df1139f8a37f6e9daabb038d8ef97f60496f
  ],
  imports: [
    BrowserModule,
    MatCardModule,
    MatInputModule,
    MatSelectModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    NgxChartsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
