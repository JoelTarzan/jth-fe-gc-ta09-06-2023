"use strict";
const defLongitud = 8;
const defCaracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
class Password {
    // Constructor
    constructor() {
        this.longitud = defLongitud;
        this.contrasena = this.generarContrasena();
        this.caracteres = defCaracteres;
    }
    // Métodos
    generarContrasena() {
        let constrasenaTemp = '';
        for (let i = 0; i < this.longitud; i++) {
            let posicion = Math.floor(Math.random() * this.caracteres.length + 1);
            constrasenaTemp += this.caracteres.charAt(posicion);
        }
        return constrasenaTemp;
    }
    getLongitud() {
        return this.longitud;
    }
    setLongitud(newLongitud) {
        this.longitud = newLongitud;
    }
    getContrasena() {
        return this.contrasena;
    }
    newContrasena() {
        this.contrasena = this.generarContrasena();
    }
    getCaracteres() {
        return this.caracteres;
    }
    setCaracteres(newCaracteres) {
        this.caracteres = newCaracteres;
    }
}
