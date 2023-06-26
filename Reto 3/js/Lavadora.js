"use strict";
const defCarga = 5;
class Lavadora extends Electrodomestico {
    // Constructor
    constructor(newColor, newConsumoEnergetico) {
        super(newColor, newConsumoEnergetico);
        this.carga = defCarga;
    }
    // Métodos
    getCarga() {
        return this.carga;
    }
    setCarga(newCarga) {
        this.carga = newCarga;
    }
    precioFinal() {
        let precioFinal = super.precioFinal();
        if (this.carga > 30) {
            precioFinal += 50;
        }
        return precioFinal;
    }
}
