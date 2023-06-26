const defCarga: number = 5;

class Lavadora extends Electrodomestico {

    // Propiedades
    protected carga: number;

    // Constructor
    constructor(newColor: string, newConsumoEnergetico: string) {
        super(newColor, newConsumoEnergetico);
        this.carga = defCarga;
    }

    // Métodos
    getCarga(): number {
        return this.carga;
    }

    setCarga(newCarga: number): void {
        this.carga = newCarga;
    }

    precioFinal(): number {
        let precioFinal = super.precioFinal();

        if (this.carga > 30) {
            precioFinal += 50;
        }

        return precioFinal;
    }
}