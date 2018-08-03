import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {FormControl, FormGroupDirective, NgForm, Validators} from "@angular/forms";
import {ErrorStateMatcher} from "@angular/material";

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  nombreControl = new FormControl('', [Validators.required]);
  correoControl = new FormControl('', [Validators.required, Validators.email,]);
  contrasenaControl = new FormControl('', [Validators.required]);
  matcher = new MyErrorStateMatcher();

  constructor() {
  }

  ngOnInit() {
  }

  ingresar() {
    /*this._usuarioService.getUsuariosPorNombre(this.nombre, this.contrasena).subscribe(
      (result: any) => {
        this.respuesta = result;
        console.log(this.respuesta);

        if (this.respuesta.respuesta === 'Aceptado') {
          const url = ['/home', this.respuesta.id];
          this._router.navigate(url);
        }else {
          console.log('Ñoooo!!');
        }
      }
    );*/
    console.log(this.nombreControl.value + " " + this.correoControl.value + " " + this.contrasenaControl.value);
  }

  limpiar() {

  }
}



