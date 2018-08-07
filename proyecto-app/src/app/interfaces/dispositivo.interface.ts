import {DispositivoLugar} from "./dispositivoLugar";

export class DispositivoInterface {
  id: number;
  nombre: string;
  id_usuario: number;
  dispositivoLugares: DispositivoLugar[];
}
