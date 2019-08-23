import { ComunaService } from "../services/comuna";
import { Comuna } from "../interfaces/comuna";

export class Comunas {
    private comunas: Array<Comuna>;

    constructor(comunas: Array<Comuna>){ 
        this.comunas = comunas;
    }

    
}