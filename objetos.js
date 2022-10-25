const datos_personales = [
    {
    nombre: "Carlos", 
    apellidos: "Tutusaus",
    edad: "24",
    altura: "180",
    eresDesarrollador: true
    }
]
const edad = datos_personales.edad

const pepe_datos_personales = [
    {
    nombre: "Pepe", 
    apellidos: "García",
    edad: "23",
    altura: "185",
    eresDesarrollador: false
    }
]

const alfon_datos_personales = [
    {
    nombre: "Alfonso", 
    apellidos: "Bustamante",
    edad: "24",
    altura: "180",
    eresDesarrollador: false
    }
]

const new_list = [...datos_personales, ...alfon_datos_personales, ...pepe_datos_personales];
console.log(new_list.sort((a,b) =>  b.edad - a.edad))