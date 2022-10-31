const creaPersona = ((nombre, edad, isDeveloper) => {
    return{
        nombre,
        edad,
        isDeveloper,
        saludo: function() {
            console.log(`Hola ${nombre}`)
        }
    }
});
const nueva_persona = creaPersona("Carlos", 24, true );
console.log(nueva_persona.saludo)