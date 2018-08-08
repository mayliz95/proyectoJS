import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {TipolugarInterface} from "../interfaces/tipolugar.interface";

@Injectable()
export class TipolugarService {

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
 getTipoLugarPorId(idTipoLugar) {
    let header = TipolugarService.getCommonHeaders();
    return this.http.get("http://localhost:1337/tipolugar/" + idTipoLugar,{headers: header});
  }
  getTiposLugar(){
    let header = TipolugarService.getCommonHeaders();
    return this.http.get("http://localhost:1337/tipolugar/",{headers:header});
  }
  postNuevoTipoLugar(tipoLugar:TipolugarInterface){
    let header = TipolugarService.getCommonHeaders();
    return this.http.post("http://localhost:1337/tipolugar",
      {nombre:tipoLugar.nombre},{headers: header});
  }
  deleteTipoLugar(tipoLugar:TipolugarInterface){
    let header = TipolugarService.getCommonHeaders();
    return this.http.delete("http://localhost:1337/tipolugar/"+tipoLugar.id,{headers:header})
  }
  /*getUsuarios() {
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
  }*/
}
