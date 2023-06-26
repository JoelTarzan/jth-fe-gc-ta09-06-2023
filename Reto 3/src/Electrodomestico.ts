type Color = 'blanco' | 'negro' | 'rojo' | 'azul' | 'gris';
type ConsumoEnergetico = 'A' | 'B' | 'C' | 'D' | 'E' | 'F';

const defPrecioBase: number = 100;
const defColor: Color = 'blanco';
const defConsumoEnergetico: ConsumoEnergetico = 'F';
const defPeso: number = 5;

class Electrodomestico {

    // Propiedades
    private precioBase: number;
    private color: Color | string;
    private consumoEnergetico: ConsumoEnergetico | string;
    private peso: number;

    // Constructor
    constructor(newConsumoEnergetico: string, newColor: string) {
        this.precioBase = defPrecioBase;
        this.color = defColor;

        if (this.comprobarColor(newColor)) {
            this.color = newColor;
        } else {
            this.color = defColor;
        }

        if (this.comprobarCosnumoEnergetico(newConsumoEnergetico)) {
            this.consumoEnergetico = newConsumoEnergetico;
        } else {
            this.consumoEnergetico = defConsumoEnergetico;
        }

        this.peso = defPeso;
    }

    // Métodos
    getPrecioBase(): number {
        return this.precioBase;
    }

    setPrecioBase(newPrecioBase: number): void {
        this.precioBase = newPrecioBase;
    }

    getColor(): Color | string {
        return this.color;
    }

    setColor(newColor: Color | string): void {
        if (this.comprobarColor(newColor)) {
            this.color = newColor;
        }    
    }

    getConsumoEnergetico(): ConsumoEnergetico | string {
        return this.consumoEnergetico;
    }

    setConsumoEnergetico(newConsumoEnergetico: ConsumoEnergetico | string): void {
        if (this.comprobarCosnumoEnergetico(newConsumoEnergetico)) {
            this.consumoEnergetico = newConsumoEnergetico;
        }
    }

    getPeso(): number {
        return this.peso;
    }

    setPeso(newPeso: number): void {
        this.peso = newPeso;
    }

    private comprobarCosnumoEnergetico(letra: string): boolean {
        const valoresPermitidos: ConsumoEnergetico[] = ['A', 'B', 'C', 'D', 'E', 'F'];
        return valoresPermitidos.indexOf(letra as ConsumoEnergetico) !== -1;
    }

    private comprobarColor(color: string): boolean {
        const valoresPermitidos: Color[] = ['blanco', 'negro', 'rojo', 'azul', 'gris'];
        return valoresPermitidos.indexOf(color as Color) !== -1;
    }

    precioFinal(): number {

        switch (this.consumoEnergetico) {
            case 'A':
                this.precioBase += 100;
                break;
        
            case 'B':
                this.precioBase += 80;
                break;

            case 'C':
                this.precioBase += 60;
                break;

            case 'D':
                this.precioBase += 50;
                break;

            case 'E':
                this.precioBase += 30;
                break;

            case 'F':
                this.precioBase += 10;
                break;
        }

        switch (true) {
            case this.peso <= 19:
                this.precioBase += 10;
                break;
        
            case this.peso >= 20 && this.peso <= 49:
                this.precioBase += 50;
                break;

            case this.peso >= 50 && this.peso <= 79:
                this.precioBase += 80;
                break;

            case this.peso >= 80:
                this.precioBase += 100;
                break;
        }

        return this.precioBase;
    }
}

// Instancias de ejemplo
let electrodomestico1 = new Electrodomestico('C', 'rojo');
let electrodomestico2 = new Electrodomestico('Hola', 'amarillo');

console.log(electrodomestico1);
console.log(electrodomestico2);

electrodomestico1.setPeso(37);
console.log(electrodomestico1.precioFinal());