import { ComunaService } from "../services/comuna";
import { Comuna } from "../interfaces/comuna";

export class Solver {

    private comunas: Array<Comuna>;
    private comunaService: ComunaService;

    constructor(){
        this.comunaService = new ComunaService();
        this.comunas = this.comunaService.getComunas();
    }

    public buscarSolucion(): void {
        this.comunas.forEach((comuna: Comuna) => {
            console.log('\n'+comuna.nombre);
            console.log(comuna.id);
            comuna.vecinos.sort((a: number, b: number) => a - b);
            console.log(comuna.vecinos);
        });
    }
}