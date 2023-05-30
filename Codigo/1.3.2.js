//Samantha Tipanguano y Amanda Rivera
//1.3.2 Convierte el siguiente código en una función, pero, cambiando cuando 
//sea necesario las variables constantes por parámetros y argumentos en una función:
//const name = "Diego Medardo";
//const lastname = "Saavedra García";
//const completeName = name + lastname;
//const nickname = "statick";
//console.log("Mi nombre es "
//+ completeName
//+ ", pero prefiero que me digas "
//+ nickname + ".");


function imprimir(nombre, apellido, apodo) {
    const completeName = nombre + " " + apellido;
    console.log("Mi nombre es " + completeName + ", pero prefiero que me digas " + apodo + ".");
  }
  
  // Llamada a la función 
  imprimir("Diego Medardo", "Saavedra García", "statick");
  
  