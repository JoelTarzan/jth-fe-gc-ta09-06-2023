// Instancias de Electrodomestico
let electrodomestico1 = new Electrodomestico('rojo', 'C');
let electrodomestico2 = new Electrodomestico('amarillo', 'Hola');
let electrodomestico3 = new Electrodomestico('negro', 'A');

electrodomestico1.setPeso(37);
electrodomestico3.setPeso(60);

console.log(electrodomestico1);
console.log(electrodomestico2);
console.log(electrodomestico3);
console.log('Precio final Electrodomestico 1: ' + electrodomestico1.precioFinal());

// Instancias de Lavadora
let lavadora1 = new Lavadora('negro', 'D');
let lavadora2 = new Lavadora('negro', 'D');
let lavadora3 = new Lavadora('gris', 'B');
let lavadora4 = new Lavadora('blanco', 'A');

lavadora2.setCarga(40);
lavadora3.setCarga(37);

console.log(lavadora1);
console.log(lavadora2);

console.log('Precio final Lavadora 1: ' + lavadora1.precioFinal());
console.log('Precio final Lavadora 2: ' + lavadora2.precioFinal());

// Instancias de Television
let television1 = new Television('azul', 'E');
let television2 = new Television('azul', 'E');
let television3 = new Television('gris', 'C');

television1.setResolucion(60);
television1.setCuatroK(true);

television3.setResolucion(50);

console.log(television1);
console.log(television2);

console.log('Precio final Televisión 1: ' + television1.precioFinal());
console.log('Precio final Televisión 2: ' + television2.precioFinal());

// Programa principal
let electrodomesticos: Electrodomestico[] = new Array(10);
let precioElectrodomesticos: number = 0;
let precioLavadoras: number = 0;
let precioTelevisiones: number = 0;

electrodomesticos[0] = electrodomestico1;
electrodomesticos[1] = electrodomestico2;
electrodomesticos[2] = electrodomestico3;
electrodomesticos[3] = lavadora1;
electrodomesticos[4] = lavadora2;
electrodomesticos[5] = lavadora3;
electrodomesticos[6] = lavadora4;
electrodomesticos[7] = television1;
electrodomesticos[8] = television2;
electrodomesticos[9] = television3;

for (let i = 0; i < electrodomesticos.length; i++) {
    
    console.log('Precio de electrodoméstico ' + (i+1) + ': ' + electrodomesticos[i].precioFinal());

    let precio = electrodomesticos[i].precioFinal();
    
    if (electrodomesticos[i] instanceof Television) {
        precioTelevisiones += precio;
        precioElectrodomesticos += precio;

    } else if (electrodomesticos[i] instanceof Lavadora) {
        precioLavadoras += precio;
        precioElectrodomesticos += precio;

    } else {
        precioElectrodomesticos += precio;
    }
    
}

console.log('Precio total de Electrodomésticos: ' + precioElectrodomesticos);
console.log('Precio total de Lavadoras: ' + precioLavadoras);
console.log('Precio total de Televisiones: ' + precioTelevisiones);