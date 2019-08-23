import { Solver } from "./model/solver";
import { Comuna } from "./interfaces/comuna";

let solver = new Solver();

let solucion:Array<Comuna> = solver.buscarSolucion();

solucion.forEach((comuna: Comuna) => {
    console.log(comuna.nombre);
    
});
