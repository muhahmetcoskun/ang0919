import { personelPrimEdit } from "./personelPrimEdit";

export class personelPrim {
  id?:number;
  personelId?:number;
  primTuruId?:number;
  aktif:boolean;
  primTurus: personelPrimEdit[];
  personels: Array<any>;
  baslangicTarihi?: Date;
  bitisTarihi?: Date;
}



