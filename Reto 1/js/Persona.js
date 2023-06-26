"use strict";
const defSexo = 'H';
class Persona {
    // Constructor
    constructor(newDni) {
        this.nombre = '';
        this.edad = 0;
        this.dni = newDni;
        this.sexo = defSexo;
        this.peso = 0;
        this.altura = 0;
    }
    // Métodos
    getNombre() {
        return this.nombre;
    }
    setNombre(newNombre) {
        this.nombre = newNombre;
    }
    getEdad() {
        return this.edad;
    }
    setEdad(newEdad) {
        this.edad = newEdad;
    }
    getDni() {
        return this.dni;
    }
    setDni(newDni) {
        this.dni = newDni;
    }
    getSexo() {
        return this.sexo;
    }
    setSexo(newSexo) {
        this.sexo = newSexo;
    }
    getPeso() {
        return this.peso;
    }
    setPeso(newPeso) {
        this.peso = newPeso;
    }
    getAltura() {
        return this.altura;
    }
    setAltura(newAltura) {
        this.altura = newAltura;
    }
}
