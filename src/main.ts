import { Comuna } from "./interfaces/comuna";
import { ComunaService } from "./services/comuna";

let comunaService: ComunaService = new ComunaService();
simulatedAnnealing(comunaService.getComunas());

function simulatedAnnealing(comunas:Array<Comuna>){
    comunas.forEach((comuna: Comuna) => {
        console.log('\n'+comuna.nombre);
        console.log(comuna.id);
        comuna.vecinos.sort((a: number, b: number) => a - b);
        console.log(comuna.vecinos);
    });
}