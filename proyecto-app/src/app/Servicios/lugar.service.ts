import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {TipolugarInterface} from "../interfaces/tipolugar.interface";
import {LugarInterface} from "../interfaces/lugar.interface";

@Injectable()
export class LugarService {
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
  getLugaresPorUsuario(idUsuario){
    let header = LugarService.getCommonHeaders();
    return this.http.get("http://localhost:1337/lugar",{headers:header,params:{
        id_usuario: idUsuario
      }});
  }
  postNuevoLugar(lugar:LugarInterface){
    let header = LugarService.getCommonHeaders();
    return this.http.post("http://localhost:1337/lugar",
      {nombre:lugar.nombre,
             id_tipolugar:lugar.id_tipolugar.id,
              id_usuario:lugar.id_usuario.id},{headers: header});
  }
  deleteLugar(lugar:LugarInterface){
    let header = LugarService.getCommonHeaders();
    return this.http.delete("http://localhost:1337/lugar/"+lugar.id,{headers:header})
  }
}
