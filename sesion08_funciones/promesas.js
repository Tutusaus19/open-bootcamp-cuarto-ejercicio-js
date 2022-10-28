//Una función sin parámetros que devuelva siempre "true"
const Carlos = () => {
    console.log("true")
} 
Carlos();

//Una función asíncrona que utilice un setTimeout y pase por consola un "Hola soy una promesa" 5 segundos después de haberse ejecutado
const myPromise = new Promise((resolve, reject) => {
    let i = 9
    setTimeout(() => {
      if (i> 0){
      resolve("Hola soy una promesa")
    } else {
      reject("No ha funcionado la promesa")
    }
    }, 5000)
  })
  
  myPromise
        .then(resolve => console.log("Se ha resuelto:",resolve))
        .catch(reject => console.log("Error en la ejecución de la promesa:", reject))

//Una función generadora de índices pares automáticos
function* generaID() {
    let i = 0; 
    while(i < 100)
      yield i++ *2;
  }
  
  const gen = generaID();
  
  console.log(gen.next().value)
  console.log(gen.next().value)
  console.log(gen.next().value)
  console.log(gen.next().value)
  console.log(gen.next().value)
