import { Solver } from "./model/solver";
import { Comuna } from "./interfaces/comuna";

let solver = new Solver();

let solucion:Array<Comuna> = solver.buscarSolucion();

//console.log("Total antenas: " + solucion.length);
//console.log(solver.costoTotal(solucion));

for (let i = 0; i < 10; i++) {
   console.log(solver.generarNumeroAleatorio(0,1));   
}