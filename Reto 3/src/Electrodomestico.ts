type typeColor = 'blanco' | 'negro' | 'rojo' | 'azul' | 'gris';
type typeConsumoEnergetico = 'A' | 'B' | 'C' | 'D' | 'E' | 'F';

const defPrecioBase: number = 100;
const defColor: typeColor = 'blanco';
const defConsumoEnergetico: typeConsumoEnergetico = 'F';
const defPeso: number = 5;

class Electrodomestico {

    // Propiedades
    protected precioBase: number;
    protected color: typeColor;
    protected consumoEnergetico: typeConsumoEnergetico;
    protected peso: number;

    // Constructor
    constructor(newColor: string, newConsumoEnergetico: string) {
        this.precioBase = defPrecioBase;
        this.color = this.comprobarColor(newColor);
        this.consumoEnergetico = this.comprobarConsumoEnergetico(newConsumoEnergetico);
        this.peso = defPeso;
    }

    // Métodos
    getPrecioBase(): number {
        return this.precioBase;
    }

    setPrecioBase(newPrecioBase: number): void {
        this.precioBase = newPrecioBase;
    }

    getColor(): typeColor {
        return this.color;
    }

    setColor(newColor: string): void {
        this.color = this.comprobarColor(newColor);
    }

    getConsumoEnergetico(): typeConsumoEnergetico {
        return this.consumoEnergetico;
    }

    setConsumoEnergetico(newConsumoEnergetico: string): void {
        this.consumoEnergetico = this.comprobarConsumoEnergetico(newConsumoEnergetico);
    }

    getPeso(): number {
        return this.peso;
    }

    setPeso(newPeso: number): void {
        this.peso = newPeso;
    }

    private comprobarConsumoEnergetico(letra: string): typeConsumoEnergetico {
        switch (letra) {
            case 'A':
                return 'A';     
                break;
            case 'B':
                return 'B';     
                break;
            case 'C':
                return 'C';     
                break;
            case 'D':
                return 'D';     
                break;
            case 'E':
                return 'E';     
                break;
            default:
                return defConsumoEnergetico; 
                break;
        }
    }

    private comprobarColor(color: string): typeColor {
        switch (color) {
            case 'negro':
                return 'negro';     
                break;
            case 'rojo':
                return 'rojo';     
                break;
            case 'azul':
                return 'azul';     
                break;
            case 'gris':
                return 'gris';     
                break;
            default:
                return defColor; 
                break;
        }
    }

    precioFinal(): number {

        let precioFinal: number = this.precioBase;

        switch (this.consumoEnergetico) {
            case 'A':
                precioFinal += 100;
                break;
        
            case 'B':
                precioFinal += 80;
                break;

            case 'C':
                precioFinal += 60;
                break;

            case 'D':
                precioFinal += 50;
                break;

            case 'E':
                precioFinal += 30;
                break;

            case 'F':
                precioFinal += 10;
                break;
        }

        switch (true) {
            case this.peso <= 19:
                precioFinal += 10;
                break;
        
            case this.peso >= 20 && this.peso <= 49:
                precioFinal += 50;
                break;

            case this.peso >= 50 && this.peso <= 79:
                precioFinal += 80;
                break;

            case this.peso >= 80:
                precioFinal += 100;
                break;
        }

        return precioFinal;
    }
}