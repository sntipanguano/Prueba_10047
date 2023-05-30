//Samantha Tipanguano y Amanda Rivera
//1.5.3 Escribe un código en JavaScript que le pregunte a los usuarios cuánto
//es 2 + 2. Si responden bien, mostramos un mensaje de felicitaciones,
//pero si responden mal, volvemos a empezar.
// Pista: puedes usar la función prompt de JavaScript.

let respuestaCorrecta = false;

while (!respuestaCorrecta) {
  let respuesta = prompt("¿Cuánto es 2 + 2?");

  if (respuesta === "4") {
    respuestaCorrecta = true;
    console.log("¡Felicitaciones! La respuesta es correcta.");
  } else {
    console.log("Respuesta incorrecta. Inténtalo de nuevo.");
  }
}
