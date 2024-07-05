import { Probleme } from "./Probleme";

export interface Solution {
    
    id:number,
    diagnostic:String,
    action:String,
    dureeMoyenne:number,
    probleme:Probleme,

}