import {LugarInterface} from "./lugar.interface";
import {DispositivoInterface} from "./dispositivo.interface";

export interface UsuarioInterface {
  dispositivos: Array<DispositivoInterface>,
  lugares: Array<LugarInterface>,
  createdAt: Date,
  updatedAt: Date,
  id: number,
  nombreUsuario: string,
  correo: string,
  avatar: string,
  contraseña: string
}
