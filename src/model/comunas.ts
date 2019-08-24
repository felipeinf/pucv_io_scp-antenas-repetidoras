import { ComunaService } from "../services/comuna";
import { Comuna } from "../interfaces/comuna";

export class Comunas {
    private comunas: Array<Comuna>;

    constructor(comunas?: Array<Comuna>) { 
       this.comunas = comunas ? comunas : new Array<Comuna>();
    }

    public setComunas(comunas: Array<Comuna>) {
        this.comunas = comunas;
    }

    public getComunas() {
        return this.comunas;
    }

    public totalComunas () {
        return this.comunas.length;
    }

    public agregarComuna(comuna: Comuna) {
        this.comunas.push(comuna);
    }

    private crearVecindad(): number[] {
        let vecindad: Array<number>;

        vecindad = new Array<number>();

        this.comunas.forEach((comuna: Comuna) => {
            if( !vecindad.includes(comuna.id)){
                vecindad.push(comuna.id);
            }

            comuna.vecinos.forEach((idVecino: number) => {
                if( !vecindad.includes(idVecino)){
                    vecindad.push(idVecino);
                }
            });
        });
        
        return vecindad.sort((a: number, b: number) => a - b);
    }

    public formaUniverso (universo: number[]) : boolean {
        let vecindad: Array<number>;

        vecindad = this.crearVecindad();      

        if(universo.length !== vecindad.length){
            return false;
        }

        return true;
    }

    public costoTotal(): number { 
        return this.comunas.map((comuna: Comuna) => comuna.costo).reduce((a:number, b: number) => a + b);
    }
    
    public mostrarComunas(): void {
        this.comunas.forEach((comuna:Comuna)=>{
            console.log(comuna+"\n");
        });
    }
}