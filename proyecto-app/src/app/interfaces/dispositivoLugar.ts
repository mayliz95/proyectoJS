import {LugarInterface} from "./lugar.interface";
import {Temperatura} from "./temperatura";
import {DispositivoInterface} from "./dispositivo.interface";

export class DispositivoLugar {
  id: number;
  id_lugar: LugarInterface;
  id_dispositivo: DispositivoInterface;
  temperaturas: Temperatura[];
}
