import { COMUNAS } from "./repository/comunas";
import { Comuna } from "./interfaces/comuna";
import { ComunaService } from "./services/comuna";

function hello() {
    let comunaService: ComunaService = new ComunaService();
    let comunas: any[] = comunaService.getComunas();

    comunas.forEach((comuna: Comuna) => {
        console.log(comuna.id);
        console.log(comuna.nombre);
        //comuna.vecinos.push(comuna.id);
        comuna.vecinos.sort((a: number, b: number) => a - b);
        console.log(comuna.vecinos);
        console.log();
    });
}

hello();