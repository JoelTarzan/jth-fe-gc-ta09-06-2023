type typeSexo = 'H' | 'M';

const defSexo: typeSexo = 'H';

class Persona {

    // Propiedades
    private nombre: string;
    private edad: number;
    private dni: string;
    private sexo: typeSexo;
    private peso: number;
    private altura: number;

    // Constructor
    constructor(newDni: string) {
        this.nombre = '';
        this.edad = 0;
        this.dni = newDni;
        this.sexo = defSexo;
        this.peso = 0;
        this.altura = 0;
    }

    // Métodos
    getNombre(): string {
        return this.nombre;
    }

    setNombre(newNombre: string): void {
        this.nombre = newNombre;
    }

    getEdad(): number {
        return this.edad;
    }

    setEdad(newEdad: number): void {
        this.edad = newEdad;
    }

    getDni(): string {
        return this.dni;
    }

    setDni(newDni: string): void {
        this.dni = newDni;
    }

    getSexo(): string {
        return this.sexo;
    }

    setSexo(newSexo: typeSexo): void {
        this.sexo = newSexo;
    }

    getPeso(): number {
        return this.peso;
    }

    setPeso(newPeso: number): void {
        this.peso = newPeso;
    }

    getAltura(): number {
        return this.altura;
    }

    setAltura(newAltura: number): void {
        this.altura = newAltura;
    }
}