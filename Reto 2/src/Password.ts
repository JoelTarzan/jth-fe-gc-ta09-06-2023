const defLongitud: number = 8;
const defCaracteres: string = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

class Password {

    // Propiedades
    private longitud: number;
    private contrasena: string;
    private caracteres: string;

    // Constructor
    constructor() {
        this.longitud = defLongitud;
        this.contrasena = this.generarContrasena();
        this.caracteres = defCaracteres;
    }

    // Métodos
    generarContrasena(): string {

        let constrasenaTemp: string = '';

        for (let i = 0; i < this.longitud; i++) {
            
            let posicion = Math.floor(Math.random() * this.caracteres.length + 1);
            constrasenaTemp += this.caracteres.charAt(posicion);
        }

        return constrasenaTemp;
    }

    getLongitud(): number {
        return this.longitud;
    }

    setLongitud(newLongitud: number): void {
        this.longitud = newLongitud;
    }

    getContrasena(): string {
        return this.contrasena;
    }

    newContrasena(): void {
        this.contrasena = this.generarContrasena();
    }

    getCaracteres(): string {
        return this.caracteres;
    }

    setCaracteres(newCaracteres: string): void {
        this.caracteres = newCaracteres;
    }
}

// Instancias de ejemplo
let password1 = new Password();
console.log('Contraseña antes de cambiar la longitud: ' + password1.getContrasena());

password1.setLongitud(12);
password1.newContrasena();
console.log('Contraseña después de cambiar la longitud: ' + password1.getContrasena());