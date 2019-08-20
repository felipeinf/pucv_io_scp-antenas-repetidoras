import { ComunaService } from "../services/comuna";
import { Comuna } from "../interfaces/comuna";

export class Solver {

    private comunas: Array<Comuna>;
    private comunaService: ComunaService;

    constructor(){
        this.comunaService = new ComunaService();  
        this.comunas = this.comunaService.getComunas();
    }

    private simulatedAnnealing(){

        let TempActual: number = 80;
        let mejorSol: Array<Comuna>;
        const Tmin: number = 0.5;
        let tempAnterior: number;
        let solInicial: Array<Comuna> = this.solucionInicial();
        let solActual: Array<Comuna>;
        let probabilidad: number;
        let variacionObj: number; 
        let funcionObjActual: number;

        while (TempActual > Tmin) {

            variacionObj = this.funcionObjetivo(solActual) - this.funcionObjetivo(mejorSol);

            if(variacionObj < 0) {
                mejorSol = solActual;
            }
            else {
                probabilidad = Math.exp(-variacionObj/TempActual);

                if(probabilidad > 3) { // Falta establecer el random
                    mejorSol = solActual;
                }
            }

            tempAnterior = TempActual;
            TempActual = 0.4 * tempAnterior;
        }
    
    }

    public buscarSolucion(): void {

        /*this.comunas.forEach((comuna: Comuna) => {
            console.log('\n'+comuna.nombre);
            console.log(comuna.id);
            comuna.vecinos.sort((a: number, b: number) => a - b);
            console.log(comuna.vecinos);
        });*/

        this.simulatedAnnealing();
    
    }

    private solucionInicial(): Array<Comuna> {
        let solucionInicial: Array<Comuna> = this.comunas;

        /**
         * Se itera 20 veces, eliminando 10 valores, quedando con 10 valores aleatorios como
         * solución inicial
         */
        for (let i = 0; i <= this.comunas.length - 10; i++) {
            solucionInicial.sort(() => Math.random() - 5);
            solucionInicial.pop();
        }

        return solucionInicial;
    }

    private costoTotal(comunas: Array<Comuna>): number { 
        return comunas
            .map((comuna: Comuna) => comuna.costo)
            .reduce((a:number, b: number) => a + b);
    }

    private formaUniverso (comunas: Array<Comuna>) : boolean {
        let universo: number[] = this.comunaService.getIdsComunas();
        let conjunto: number[];

        //Se pobla el conjunto con los ids
        comunas.forEach((comuna: Comuna) => {
            if(! conjunto.includes(comuna.id)){
                conjunto.push(comuna.id);
            }
        });

        universo.forEach((id: number) => {
            if( !conjunto.includes(id)){
                return false;
            }
        });

        return false;
    }

    /**
     * Para calcular la funcion objetivo se debe 
     */

    private funcionObjetivo(solucion: Array<Comuna> ) : number {



        return;
    }
}