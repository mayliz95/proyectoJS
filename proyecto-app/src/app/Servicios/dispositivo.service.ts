import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {TipolugarInterface} from "../interfaces/tipolugar.interface";
import {DispositivoInterface} from "../interfaces/dispositivo.interface";

@Injectable()
export class DispositivoService {
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
  getDispositivoPorId(idDispositivo) {
    let header = DispositivoService.getCommonHeaders();
    return this.http.get("http://localhost:1337/dispositivo/" + idDispositivo,{headers: header});
  }
  getDispositivosPorUsuario(idUsuario){
    let header = DispositivoService.getCommonHeaders();
    return this.http.get("http://localhost:1337/dispositivo/",{headers:header,params:{
        id_usuario: idUsuario
      }});
  }
  postNuevoDispositivo(dispositivo:DispositivoInterface){
    let header = DispositivoService.getCommonHeaders();
    return this.http.post("http://localhost:1337/dispositivo",
      {nombre:dispositivo.nombre,id_usuario:dispositivo.id_usuario},{headers: header});
  }
}
