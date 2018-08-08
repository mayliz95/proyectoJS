import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {DispositivoLugar} from "../interfaces/dispositivoLugar";
import {LugarInterface} from "../interfaces/lugar.interface";

@Injectable()
export class RelacionService {
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
  getDispositivosLugarPorDispositivo(idDispositivo) {
    let header = RelacionService.getCommonHeaders();
    return this.http.get("http://localhost:1337/dispositivolugar",{headers:header,params:{
        id_dispositivo: idDispositivo
      }});
  }
  postNuevoDispositivoLugar(dispositivoLugar:DispositivoLugar){
    let header = RelacionService.getCommonHeaders();
    return this.http.post("http://localhost:1337/dispositivolugar",
      {id_lugar:dispositivoLugar.id_lugar.id,
        id_dispositivo:dispositivoLugar.id_dispositivo.id},{headers: header});
  }
  deleteRelacion(dispositivoLugar:DispositivoLugar){
    let header = RelacionService.getCommonHeaders();
    return this.http.delete("http://localhost:1337/dispositivolugar/"+dispositivoLugar.id,{headers:header})
  }
}
