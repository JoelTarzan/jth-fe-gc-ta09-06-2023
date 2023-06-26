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