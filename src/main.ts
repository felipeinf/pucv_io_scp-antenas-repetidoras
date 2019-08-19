import { COMUNAS, Comuna } from "./repository/comunas";

function hello() {
    let comunas: any[] = COMUNAS;

    comunas.forEach((comuna: Comuna) => {
        console.log(comuna.nombre);
        comuna.vecinos.push(comuna.id);
        comuna.vecinos.sort((a,b) => a - b);
        console.log(comuna.vecinos);
        console.log();
    });
}

hello();