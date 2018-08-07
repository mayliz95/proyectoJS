import { Component, OnInit } from '@angular/core';
import {Title} from '@angular/platform-browser';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {UsuarioService} from "../Servicios/usuario.service";
import {UsuarioInterface} from "../interfaces/usuario.interface";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  providers: [UsuarioService],
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  banderaContraseña:boolean;
  usuarioConectado: Array<UsuarioInterface>;
  constructor(private fb: FormBuilder,title: Title,private usuarioService: UsuarioService,private _router: Router
  ) {
    title.setTitle('Login');
    this.buildForm();
  }

  buildForm() {
    this.loginForm = this.fb.group({
      email: ['', Validators.compose([Validators.required, Validators.email]) ],
      password: ['', Validators.compose([Validators.required, Validators.minLength(6)]) ],
    });
  }

  ngOnInit() {
    this.banderaContraseña=false;
  }

  submit() {
    const email = this.loginForm.get('email').value;
    const password = this.loginForm.get('password').value;
    console.log(email);
    this.usuarioService.getUsuario(email).subscribe(
      (result:any)=>{
        this.usuarioConectado=result;
        console.log(this.usuarioConectado[0].contraseña);
        if(this.usuarioConectado[0].contraseña===password){
          console.log('Correcto');
          UsuarioService.usuarioLogueado=this.usuarioConectado[0];
          const url = ['/home'];
          this._router.navigate(url);
        }
        else{
          this.banderaContraseña=true;
          console.log('incorrecto');
        }

      }
    )
  }
}
