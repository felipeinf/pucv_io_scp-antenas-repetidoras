import { Solver } from "./model/solver";
import { Comunas } from "./model/comunas";

instalacionAntenas();

function instalacionAntenas(){
    let solver: Solver;
    let solucion: Comunas;

    solver = new Solver();
    solucion = solver.simulatedAnnealing();
    console.log("\nCosto total de instalación: " + solucion.costoTotal());
    console.log("Total de antenas por instalar: " + solucion.totalComunas());
    console.log("Comunas seleccionadas para la instalacion: \n");
    solucion.mostrarComunas();
    console.log("\n");
}