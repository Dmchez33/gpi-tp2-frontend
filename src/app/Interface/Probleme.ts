import { Ordinateur } from "./Ordinateur";

export interface Probleme {
    
    id:number,
    description:String,
    dateProbleme:Date,
    ordinateur:Ordinateur,

}