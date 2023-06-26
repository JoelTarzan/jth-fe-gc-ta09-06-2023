const defResolucion: number = 20;
const defCuatroK: boolean = false;

class Television extends Electrodomestico {

    // Propiedades
    protected resolucion: number;
    protected cuatroK: boolean;

    // Constructor
    constructor(newColor: string, newConsumoEnergetico: string) {
        super(newColor, newConsumoEnergetico);
        this.resolucion = defResolucion;
        this.cuatroK = defCuatroK;
    }

    // Métodos
    getResolucion(): number {
        return this.resolucion;
    }

    setResolucion(newResolucion: number): void {
        this.resolucion = newResolucion;
    }

    getCuatroK(): boolean {
        return this.cuatroK;
    }

    setCuatroK(newCuatroK: boolean): void {
        this.cuatroK = newCuatroK;
    }

    precioFinal(): number {
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