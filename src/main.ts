import { Solver } from "./model/solver";
import { Comunas } from "./model/comunas";

instalacionAntenas();

function instalacionAntenas(){
    let solver: Solver;
    let solucion: Comunas;

    // Se instancia la clase solver para llamar al mètodo que resuelve el problema
    solver = new Solver();
    solucion = solver.simulatedAnnealing();
    console.log("\nComunas seleccionadas para la instalacion: \n");
    solucion.mostrarComunas();
    console.log("\nCosto total de instalación: " + solucion.costoTotal());
    console.log("Total de antenas por instalar: " + solucion.totalComunas());
    console.log("\n");
}