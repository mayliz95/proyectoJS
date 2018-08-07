import {LugarInterface} from "./lugar.interface";
import {Temperatura} from "./temperatura";

export class DispositivoLugar {
  id: number;
  id_lugar: number;
  id_dispositivo: number;
  temperaturas: Temperatura[];
}
