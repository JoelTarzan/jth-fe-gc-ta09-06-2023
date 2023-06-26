"use strict";
const defResolucion = 20;
const defCuatroK = false;
class Television extends Electrodomestico {
    // Constructor
    constructor(newColor, newConsumoEnergetico) {
        super(newColor, newConsumoEnergetico);
        this.resolucion = defResolucion;
        this.cuatroK = defCuatroK;
    }
    // Métodos
    getResolucion() {
        return this.resolucion;
    }
    setResolucion(newResolucion) {
        this.resolucion = newResolucion;
    }
    getCuatroK() {
        return this.cuatroK;
    }
    setCuatroK(newCuatroK) {
        this.cuatroK = newCuatroK;
    }
    precioFinal() {
        let precioFinal = super.precioFinal();
        if (this.resolucion > 40) {
            precioFinal *= 1.3;
        }
        if (this.cuatroK) {
            precioFinal += 50;
        }
        return precioFinal;
    }
}
