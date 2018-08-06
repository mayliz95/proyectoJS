import {LugarInterface} from "./lugar.interface";

export interface TipolugarInterface {
  id: number;
  nombre: string;
  lugares: LugarInterface[];
}
