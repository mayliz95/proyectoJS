import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {TipolugarService} from "./tipolugar.service";
import {Temperatura} from "../interfaces/temperatura";

@Injectable()
export class TemperaturaService {

  static temperaturaFinal: number;

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
  getTemperaturaPorIdDispositivo(idDispositivoLugar) {
    let header = TemperaturaService.getCommonHeaders();
    return this.http.get("http://localhost:1337/temperatura?sort=id DESC",
      {headers:header,params:{
        id_dispositivoLugar: idDispositivoLugar
      }});
  }
}
