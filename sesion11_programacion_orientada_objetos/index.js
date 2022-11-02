const creaPersona = ((nombre, edad, isDeveloper) => {
    return{
        nombre,
        edad,
        isDeveloper,
        saludo: function() {
            console.log(`Hola`)
        }
    }
});
const nueva_persona = creaPersona("Carlos", 24, true );
console.log(nueva_persona.saludo);

// Declaración de clases 

class Persona {
    nombre;
    edad;
    isDeveloper;
    constructor(nombre, edad, isDeveloper) {
        this.nombre = nombre
        this.edad = edad
        this.isDeveloper = isDeveloper
    }

    saludo(){
        
        console.log('Hola')
    }
}

const nueva_persona2 = new Persona("Irene", 23, false );
c