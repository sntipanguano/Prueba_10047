//Samantha Tipanguano y Amanda Rivera
//Crea una función que pueda recibir cualquier objeto como parámetro e imprima
//todos sus elementos uno por uno (no se vale imprimir el objeto completo).

function imprElementos(objeto) {
    for (let clave in objeto) {
      if (objeto.hasOwnProperty(clave)) {
        console.log(clave + ": " + objeto[clave]);
      }
    }
  }

  let persona = {
    nombre: "Lucia",
    edad: 24,
    profesion: "Desarrollador"
  };
  
  imprElementos(persona);