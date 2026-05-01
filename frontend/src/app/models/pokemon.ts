import { url } from "inspector";

export class Pokemon {
  constructor(
    nombre: string,
    tipo: string,
    urlImg: string
  ) {};


}


export interface PokemonResponse{
  id?: {
    $oid: string;
  };
nombre:string;
tipo:string;
urlImagen:string;


}
