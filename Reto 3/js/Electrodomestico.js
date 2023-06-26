"use strict";
const defPrecioBase = 100;
const defColor = 'blanco';
const defConsumoEnergetico = 'F';
const defPeso = 5;
class Electrodomestico {
    // Constructor
    constructor(newColor, newConsumoEnergetico) {
        this.precioBase = defPrecioBase;
        this.color = this.comprobarColor(newColor);
        this.consumoEnergetico = this.comprobarConsumoEnergetico(newConsumoEnergetico);
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
        this.color = this.comprobarColor(newColor);
    }
    getConsumoEnergetico() {
        return this.consumoEnergetico;
    }
    setConsumoEnergetico(newConsumoEnergetico) {
        this.consumoEnergetico = this.comprobarConsumoEnergetico(newConsumoEnergetico);
    }
    getPeso() {
        return this.peso;
    }
    setPeso(newPeso) {
        this.peso = newPeso;
    }
    comprobarConsumoEnergetico(letra) {
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
    comprobarColor(color) {
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
    precioFinal() {
        let precioFinal = this.precioBase;
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
