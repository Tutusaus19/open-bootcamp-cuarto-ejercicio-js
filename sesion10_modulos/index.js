// Formas de importar/exportar módulos
// 1. CommonJs- require
// Import ES6 - import

const {suma, multiplica} = require("./controller/controller");

console.log(suma(1,2))
console.log(multiplica(4, 5));