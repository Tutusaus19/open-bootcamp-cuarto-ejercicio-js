class Estudiante {
    nombre
    apellido
    edad
    email 
  
    obtenDatos() {
      return [this.nombre, this.apellido, this.edad, this.email]
    }
  }
  
  
  const new_estudiate = new Estudiante("Carlos", "Apellido", 24, "ctutusaus@fct.es");
  console.log(Estudiante.obtenDatos)