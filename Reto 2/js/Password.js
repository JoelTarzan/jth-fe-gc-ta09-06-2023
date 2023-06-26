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
// Instancias de ejemplo
let password1 = new Password();
console.log('Contraseña antes de cambiar la longitud: ' + password1.getContrasena());
password1.setLongitud(12);
password1.newContrasena();
console.log('Contraseña después de cambiar la longitud: ' + password1.getContrasena());
