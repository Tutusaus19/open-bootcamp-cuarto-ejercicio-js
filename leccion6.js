//Una variable que contenga la lista de la compra (mínimo 5 elementos)
const listaCompra = ["Mejillones", "Aguacate", "Pan Integral", "Plátanos", "Atún", "Mahonesa"]

// Modifica la lista de la compra y añádele "Aceite de Girasol"
listaCompra.push("Aceite Girasol");
console.log(listaCompra);

// Vuelve a modificar la lista de la compra eliminando "Aceite de Girasol"
listaCompra.splice(-1);
console.log(listaCompra);

// Una lista de tus 3 películas favoritas (objetos con propiedades: titulo, director, fecha)
const peliculas = [
    {titulo: "En búsqueda de la felicidad", director: "Gabriele Muccino", fecha: "02/02/2007"},
    {titulo: "Hasta el último hombre", director: "Mel Gibson", fecha: "23/11/2016"},
    {titulo: "21 Blackjack", director: "Pepe Morientes", fecha: "03/05/2020"}
]

// Una nueva lista que contenga las películas posteriores al 1 de enero de 2010 (utilizando filter)
const peliculas_nuevas = peliculas.filter(value => value.fecha > "01/01/2010");
console.log(peliculas_nuevas)

// Una nueva lista que contenga los directores de la lista de películas original (utilizando map)
const directores = peliculas.map(x => x.director)
console.log(directores);
// Una nueva lista que contenga los títulos de la lista de películas original (utilizando map)
const titulos = peliculas.map( e => e.titulo)
console.log(titulos)
//  Una nueva lista que concatene la lista de directores y la lista de los títulos (utilizando concat)
const directores_titulos = directores.concat(titulos);
console.log(directores_titulos)

// Una nueva lista que concatene la lista de directores y la lista de los títulos (utilizando el factor de propagación)
const directores_titulos2 = [...directores, ...titulos];
console.log(directores_titulos2)