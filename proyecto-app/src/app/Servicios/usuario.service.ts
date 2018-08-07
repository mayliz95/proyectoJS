import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {UsuarioInterface} from "../interfaces/usuario.interface";

@Injectable()
export class UsuarioService {

  static usuarioLogueado:UsuarioInterface;

  constructor(private http: HttpClient){
  }

  static getCommonHeaders() {
    let headers = new HttpHeaders();
    headers.append("Content-Type", "application/json");
    headers.append("Access-Control-Allow-Origin", "*");
    headers.append("Access-Control-Allow-Methods", "POST, GET, OPTIONS");
    headers.append("Access-Control-Allow-Headers", "Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With, Access-Control-Allow-Origin, Access-Control-Allow-Methods");
    return headers;
  }
  getUsuarioPorId(idUsuario) {
    let header = UsuarioService.getCommonHeaders();
    return this.http.get("http://localhost:1337/usuario/" + idUsuario,{headers: header});
  }
  getUsuarios() {
    let header = UsuarioService.getCommonHeaders();
    return this.http.get("http://localhost:1337/usuario",{headers: header});
  }
  postNuevoUsuario(usuario, email, avatarURL, password) {
    let header = UsuarioService.getCommonHeaders();
    return this.http.post("http://localhost:1337/usuario",
      {nombreUsuario:usuario,
        correo:email,
        avatar:avatarURL,
        contraseña:password},{headers: header});
  }
  getUsuario(email){
    let header=UsuarioService.getCommonHeaders();
    return this.http.get('http://localhost:1337/usuario',{params:{
        correo:email
      }})
  }
}
