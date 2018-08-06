import {DispositivoLugar} from "./dispositivoLugar";

export interface DispositivoInterface {
  id: number;
  nombre: string;
  id_usuario: number;
  dispositivoLugares: DispositivoLugar[];
}
