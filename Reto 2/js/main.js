"use strict";
// Instancias de ejemplo
let password1 = new Password();
console.log('Contraseña antes de cambiar la longitud: ' + password1.getContrasena());
password1.setLongitud(12);
password1.newContrasena();
console.log('Contraseña después de cambiar la longitud: ' + password1.getContrasena());
