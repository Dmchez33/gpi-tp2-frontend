import { Probleme } from "./Probleme";
import { Solution } from "./Solution";

export interface Intervention {
    
    id:number,
    dateIntervention:Date,
    dureeIntervention:number,
    probleme:Probleme,
    solution:Solution,

}