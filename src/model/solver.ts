import { ComunaService } from "../services/comuna";
import { Comuna } from "../interfaces/comuna";
import { Comunas } from "./comunas";

export class Solver {
    private comunaService: ComunaService;
    private universo: number[];

    constructor(){ 
        this.comunaService = new ComunaService();
        this.universo = this.comunaService.getIdsComunas();
    }

    /**
     * Se implementa el algoritmo Simulated Annealing para resolver el problema
     */
    public simulatedAnnealing() : Comunas{
        let TempActual: number = 100000000000000000000000000000000000;
        let mejorSol: Comunas = this.buscarSolucion();
        const Tempmin: number = 0;
        let solActual: Comunas = new Comunas();
        let probabilidad: number = 0;
        let variacionFo: number; 
        let solOptima: Comunas = this.buscarSolucion();
        
        while(TempActual > Tempmin) {
            solActual = this.buscarSolucion();
            variacionFo = this.funcionObjetivo(solActual) - this.funcionObjetivo(mejorSol);

            if(variacionFo < 0) {
                mejorSol = solActual;
            }
            else {
                probabilidad = Math.exp(-variacionFo/TempActual);

                if(this.generarNumeroAleatorio(0,1) < probabilidad) {
                    mejorSol = solActual;
                }
            }

            TempActual = 0.4 * TempActual;

            if (this.funcionObjetivo(solOptima) > this.funcionObjetivo(mejorSol)) {
                solOptima = mejorSol;
            }
        }

        return solOptima;
    }

    /**
     * Se busca una solucion candidata
     */
    public buscarSolucion():Comunas {
        let posibleSolucion: Comunas;
        let comunas: Array<Comuna> = this.comunaService.getComunas();
    
        posibleSolucion = new Comunas();
        comunas.sort((a:Comuna, b:Comuna) => (Math.random() - Math.random()) * Math.random());    

        do{  
            posibleSolucion.agregarComuna(comunas.shift());            
        }while(! posibleSolucion.formaUniverso(this.universo));
      
        return posibleSolucion;
    }
     
    /**
     * Se calcula la FO de la solución actual
     * @param solucion 
     */
    private funcionObjetivo(solucion: Comunas ) : number {
        return solucion.costoTotal();
    }

    /**
     * Se establece un número aleatoria para realizar el criterio de Metropolis
     * @param limInf 
     * @param limSup 
     */
    private generarNumeroAleatorio(limInf: number, limSup: number){
        return parseFloat((Math.random() * (limSup - limInf) + limInf).toFixed(2));
    }
}