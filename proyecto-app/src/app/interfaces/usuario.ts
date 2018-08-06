import {LugarInterface} from "./lugar.interface";
import {DispositivoInterface} from "./dispositivo.interface";

export interface Usuario {
  id: number;
  nombreUsuario: string;
  correo: string;
  avatar: string;
  constrasena: string;
  lugares: LugarInterface[];
  dispositivos: DispositivoInterface[];
}
