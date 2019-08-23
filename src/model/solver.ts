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

        do{  
            posibleSolucion.push(comunas.shift());            
        }while(!this.formaUniverso(posibleSolucion));
      
        return posibleSolucion;
    }
    

    private funcionObjetivo(solucion: Array<Comuna> ) : number {
        return;
    }

    private crearVecindad(comunas: Array<Comuna>): number[]{
        let vecindad: Array<number>;

        vecindad = new Array<number>();

        comunas.forEach((comuna: Comuna) => {
            if( !vecindad.includes(comuna.id)){
                vecindad.push(comuna.id);
            }

            comuna.vecinos.forEach((idVecino: number) => {
                if( !vecindad.includes(idVecino)){
                    vecindad.push(idVecino);
                }
            })
        });
        
        vecindad =  vecindad.sort((a: number, b: number) => a - b);

        return vecindad;
    }

    private formaUniverso (comunas: Array<Comuna>) : boolean {
        let vecindad: Array<number>;

        vecindad = this.crearVecindad(comunas);       

        if(this.universo.length !== vecindad.length){
            return false;
        }

        return true;
    }

    public costoTotal(comunas: Array<Comuna>): number { 
        return comunas.map((comuna: Comuna) => comuna.costo).reduce((a:number, b: number) => a + b);
    }

    public generarNumeroAleatorio(limInf: number, limSup: number){
        return (Math.random() * (limSup - limInf) + limInf).toFixed(2);
    }
}