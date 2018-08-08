import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {TipolugarService} from "./tipolugar.service";
import {Temperatura} from "../interfaces/temperatura";
import {BehaviorSubject} from "rxjs/index";

@Injectable()
export class TemperaturaService {

  static temperaturaFinal: number;
  private fuenteMensaje = new BehaviorSubject<any>([]);
  mensajeActual = this.fuenteMensaje.asObservable();

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
  getTemperaturaPorIdDispositivoLugarDescendente(idDispositivoLugar) {
    let header = TemperaturaService.getCommonHeaders();
    return this.http.get("http://localhost:1337/temperatura?sort=id DESC",
      {headers:header,params:{
        id_dispositivoLugar: idDispositivoLugar
      }});
  }
  getTemperaturaPorIdDispositivoLugar(idDispositivoLugar) {
    let header = TemperaturaService.getCommonHeaders();
    return this.http.get("http://localhost:1337/temperatura?limit=1000",
      {headers:header,params:{
          id_dispositivoLugar: idDispositivoLugar
        }});
  }
  cambiarMensaje(mensaje) {
    this.fuenteMensaje.next(mensaje);
  }
}
