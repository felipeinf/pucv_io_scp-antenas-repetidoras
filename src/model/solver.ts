import { ComunaService } from "../services/comuna";
import { Comuna } from "../interfaces/comuna";

export class Solver {

    private comunas: Array<Comuna>;
    private universo: number[];
    private comunaService: ComunaService;

    constructor(){
        this.comunaService = new ComunaService();  
        this.comunas = this.comunaService.getComunas();
        this.universo = this.comunaService.getIdsComunas();
    }

    private simulatedAnnealing(){
        let TempActual: number = 80;
        let mejorSol: Array<Comuna>;
        const Tmin: number = 0.5;
        let tempAnterior: number;
        let solInicial: Array<Comuna>;
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

    public buscarSolucion(): Array<Comuna> {
        let posibleSolucion: Array<Comuna>;
        let comunas = this.comunas;

        posibleSolucion = new Array<Comuna>();
        comunas.sort((a:Comuna, b:Comuna) => (Math.random() - Math.random()) * Math.random());
        console.log(comunas);
        

        for (const comuna of comunas) {
            posibleSolucion.push(comuna);
           
            if(this.formaUniverso(posibleSolucion)){
                return posibleSolucion;
            }
        }
        return posibleSolucion;
    }

    private funcionObjetivo(solucion: Array<Comuna> ) : number {
        return;
    }

    private formaUniverso (comunas: Array<Comuna>) : boolean {
        let conjunto: Array<number>;

        conjunto = new Array<number>();

        comunas.forEach((comuna: Comuna) => {
            if(conjunto.indexOf(comuna.id) === -1){
                conjunto.push(comuna.id);
            }

            comuna.vecinos.forEach((vecino: number) => {
                if(conjunto.indexOf(vecino) === -1){
                    conjunto.push(vecino);
                }
            });
        });

        this.universo.forEach((id: number) => {
            if(conjunto.indexOf(id) === -1){
                return false;
            }
        });

        return true;
    }

    private costoTotal(comunas: Array<Comuna>): number { 
        return comunas.map((comuna: Comuna) => comuna.costo).reduce((a:number, b: number) => a + b);
    }
}