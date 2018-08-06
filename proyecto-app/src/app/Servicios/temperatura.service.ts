import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {TipolugarService} from "./tipolugar.service";

@Injectable()
export class TemperaturaService {
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
  getUltimaTemperatura(idTipoLugar) {
    let header = TipolugarService.getCommonHeaders();
    return this.http.get("http://localhost:1337/tipolugar/" + idTipoLugar,{headers: header});
  }
}
