import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {FormControl, FormGroupDirective, NgForm, Validators} from "@angular/forms";
import {ErrorStateMatcher} from "@angular/material";
import {UsuarioService} from "../Servicios/usuario.service";

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
  providers: [UsuarioService]
})
export class SignupComponent implements OnInit {

  nombreControl = new FormControl('', [Validators.required]);
  correoControl = new FormControl('', [Validators.required, Validators.email,]);
  contrasenaControl = new FormControl('', [Validators.required]);
  matcher = new MyErrorStateMatcher();
  urlImgSeleccionada = "";
  arregloAvatar = [
    {nombre: 'Avatar1',
       urlImagen: 'https://cdn.iconscout.com/public/images/icon/free/png-512/avatar-user-girl-33d5bc8209527f81-512x512.png'},
    {nombre: 'Avatar2',
      urlImagen: 'https://cdn.iconscout.com/public/images/icon/free/png-512/avatar-user-teacher-312a499a08079a12-512x512.png'},
    {nombre: 'Avatar3',
       urlImagen: 'https://cdn.iconscout.com/public/images/icon/free/png-512/avatar-user-business-man-399587fe24739d5a-512x512.png'},
    {nombre: 'Avatar4',
       urlImagen: 'https://cdn.iconscout.com/public/images/icon/free/png-512/avatar-user-boy-389cd1eb1d503149-512x512.png'}
  ];

  constructor(private _usuarioService: UsuarioService) {
  }
  ngOnInit() {
  }
  ponerUrlImg(url) {
    this.urlImgSeleccionada = url;
  }
  ingresar() {
    console.log(this.nombreControl.value + " " + this.correoControl.value + " " + this.contrasenaControl.value + " " + this.urlImgSeleccionada);
    this._usuarioService.postNuevoUsuario(this.nombreControl.value, this.correoControl.value, this.urlImgSeleccionada, this.contrasenaControl.value).subscribe();
  }
  limpiar() {}
}



