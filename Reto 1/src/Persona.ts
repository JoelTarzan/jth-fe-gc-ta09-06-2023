type Sexo = 'H' | 'M';

class Persona {

    // Propiedades
    private nombre: string = '';
    private edad: number = 0;
    private dni: string;
    private sexo: Sexo = 'H';
    private peso: number = 0;
    private altura: number = 0;

    // Constructor
    constructor(newDni: string) {
        this.dni = newDni;
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

    setSexo(newSexo: Sexo): void {
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

// Instancias de ejemplo
let persona1 = new Persona('39934837X');
let persona2 = new Persona('38817218B');
let persona3 = new Persona('39926155E');

console.log(persona1);
console.log(persona2);
console.log(persona3);

persona1.setNombre('Joel');
persona1.setEdad(22);
persona1.setAltura(165);
persona1.setPeso(58);

persona2.setNombre('Laura');
persona2.setEdad(22);
persona2.setSexo('M');

persona3.setNombre('Antonio');
persona3.setEdad(23);
persona3.setPeso(72);

console.log(persona1);
console.log(persona2);
console.log(persona3);

console.log('Edad persona 1: ' + persona1.getEdad());