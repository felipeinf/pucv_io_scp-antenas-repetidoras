import { Comuna } from "../interfaces/comuna";
import { COMUNAS } from "../repository/comunas";

export class ComunaService {
    private comunas: Array<Comuna>;

    constructor(){
        this.comunas = COMUNAS;
    }

    public getComunas(): Array<Comuna> {
        return this.comunas;
    }

    public getComunaById(id: number): Comuna {
        return this.comunas.filter((comuna: Comuna) => id === comuna.id)[0];
    }

    /*public getVecinosById(id: number): Array<Comuna> {
        const comuna: Comuna = this.getComunaById(id);
        return this.comunas.filter((data: Comuna) => data.vecinos.includes(comuna.id));
    }*/

    public getIdsComunas(): number[] {
        return this.comunas.map((data: Comuna) => data.id);
    }
}