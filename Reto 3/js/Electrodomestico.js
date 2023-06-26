"use strict";
const defPrecioBase = 100;
const defColor = 'blanco';
const defConsumoEnergetico = 'F';
const defPeso = 5;
class Electrodomestico {
    // Constructor
    constructor(newConsumoEnergetico, newColor) {
        this.precioBase = defPrecioBase;
        this.color = defColor;
        if (this.comprobarColor(newColor)) {
            this.color = newColor;
        }
        else {
            this.color = defColor;
        }
        if (this.comprobarCosnumoEnergetico(newConsumoEnergetico)) {
            this.consumoEnergetico = newConsumoEnergetico;
        }
        else {
            this.consumoEnergetico = defConsumoEnergetico;
        }
        this.peso = defPeso;
    }
    // Métodos
    getPrecioBase() {
        return this.precioBase;
    }
    setPrecioBase(newPrecioBase) {
        this.precioBase = newPrecioBase;
    }
    getColor() {
        return this.color;
    }
    setColor(newColor) {
        if (this.comprobarColor(newColor)) {
            this.color = newColor;
        }
    }
    getConsumoEnergetico() {
        return this.consumoEnergetico;
    }
    setConsumoEnergetico(newConsumoEnergetico) {
        if (this.comprobarCosnumoEnergetico(newConsumoEnergetico)) {
            this.consumoEnergetico = newConsumoEnergetico;
        }
    }
    getPeso() {
        return this.peso;
    }
    setPeso(newPeso) {
        this.peso = newPeso;
    }
    comprobarCosnumoEnergetico(letra) {
        const valoresPermitidos = ['A', 'B', 'C', 'D', 'E', 'F'];
        return valoresPermitidos.indexOf(letra) !== -1;
    }
    comprobarColor(color) {
        const valoresPermitidos = ['blanco', 'negro', 'rojo', 'azul', 'gris'];
        return valoresPermitidos.indexOf(color) !== -1;
    }
    precioFinal() {
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
