import { Comuna } from "../interfaces/comuna";
import { COMUNAS } from "../repository/comunas";

export class ComunaService {
    private comunas: any;

    constructor(){
        this.comunas = COMUNAS;
    }

    public getComunas(): Array<Comuna> {
        return this.comunas;
    }

    public getComunaById(id: number): Comuna {
        return this.comunas.find((comuna: Comuna) => id === comuna.id);
    }

    public getVecinosById(id: number): Array<Comuna> {
        const comuna: Comuna = this.getComunaById(id);
        return this.comunas.filter((comuna: Comuna) => comuna.vecinos.includes(comuna.id));
    }
}