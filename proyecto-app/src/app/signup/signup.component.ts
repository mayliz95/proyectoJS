import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  registerForm: FormGroup;
  loading = false;
  submitted = false;

  idusuario:number;
  nombreUsuario: String;
  correo: String;
  password: String;
  urlImagenAvatar: String;
  dioClickEnRegistro: EventEmitter<boolean> = new EventEmitter();

  arregloAvatar = [
    {
      nombre: 'Avatar1',
      // urlImagen: 'https://assets.nflxext.com/ffe/profiles/avatars_v2/320x320/PICON_013.png'
      urlImagen: 'https://cdn.iconscout.com/public/images/icon/free/png-512/avatar-user-boy-389cd1eb1d503149-512x512.png'

    },
    {
      nombre: 'Avatar2',
      urlImagen: 'https://cdn.iconscout.com/public/images/icon/free/png-512/avatar-user-business-man-399587fe24739d5a-512x512.png'
    },
    {
      nombre: 'Avatar3',
      // urlImagen: 'https://assets.nflxext.com/ffe/profiles/avatars_v2/320x320/PICON_019.png'
      urlImagen: 'https://cdn.iconscout.com/public/images/icon/free/png-512/avatar-user-teacher-312a499a08079a12-512x512.png'
    },
    {
      nombre: 'Avatar4',
      // urlImagen: 'https://assets.nflxext.com/ffe/profiles/avatars_v2/320x320/PICON_020.png'
      urlImagen: 'https://cdn.iconscout.com/public/images/icon/free/png-512/avatar-user-girl-33d5bc8209527f81-512x512.png'
    }
  ];

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      nombre_usuario: ['', [Validators.required]],
      correo_usuario: ['', [Validators.required, Validators.email]],
      password_usuario: ['', [Validators.required, Validators.minLength(6)]]
    });

  }

  get f() { return this.registerForm.controls; }

  hizoClickEnRegistrarse() {
    this.dioClickEnRegistro.emit(true);
  }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.registerForm.invalid) {
      return;
    }

    this.loading = true;

    this.nombreUsuario = this.registerForm.get('nombre_usuario').value;
    this.correo = this.registerForm.get('correo_usuario').value;
    this.password = this.registerForm.get('password_usuario').value;
    console.log("nombreUsuario correo password", this.nombreUsuario, this.correo, this.password);
    console.log("Registrado correctamente");
  }
}



