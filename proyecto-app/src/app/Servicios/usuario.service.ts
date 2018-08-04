import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Injectable} from "@angular/core";

@Injectable()
export class UsuarioService {

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
}
