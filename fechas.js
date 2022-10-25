// - La fecha de hoy

const today = new Date();
// - La fecha de tu nacimiento
const birthday = new Date(1998, 02, 19);

console.log(birthday)
// - Un variable que indique si hoy es más tarde (>) que la fecha de tu nacimiento

if (today > birthday) 
{
    console.log("Hoy es mas tarde")
}

// - Una variable que contenga el día de tu nacimiento

const day = birthday.getDay();
if ( day === 1)
{
    console.log("Cumpliste años un Lunes")
} else if (day === 2){
    console.log("Cumpliste años un Martes")
} else if ( day === 3 ) {
    console.log("Cumpliste años un Miércoles")
} else if (day === 4) {
    console.log("Cumpliste años un Jueves")
} else if (day === 5) {
    console.log("Cumpliste años un Viernes")
} else if (day === 6){
    console.log("Cumpliste años un Sábado")
} else if ( day === 0 ) {
    console.log("Cumpliste años un Domingo")
}

// - Una variable que contenga el mes de tu nacimiento (recuerda que Enero es mes 0)

const month = birthday.getMonth() + 1;
console.log(month);
// - Una variable que contenga el año de tu nacimiento (con 4 dígitos)

const year = birthday.getFullYear();
console.log(year)