import {DispositivoLugar} from "./dispositivoLugar";
import {TipolugarInterface} from "./tipolugar.interface";
import {UsuarioInterface} from "./usuario.interface";

export class LugarInterface {
  dispositivoLugares: Array<DispositivoLugar>;
  id: number;
  nombre: string;
  id_tipolugar: TipolugarInterface;
  id_usuario: UsuarioInterface;
}
