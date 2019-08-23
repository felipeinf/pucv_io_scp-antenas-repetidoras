import { Solver } from "./model/solver";
import { Comunas } from "./model/comunas";

let solver: Solver;


    solver = new Solver();
    let solucion: Comunas = solver.simulatedAnnealing();
    solucion.mostrarComunas();
    console.log();
    console.log("Costo total: " + solucion.costoTotal());
    console.log("Total antenas: " + solucion.totalComunas());


    