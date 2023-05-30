//Calcula e imprime las siguientes variables a partir de las variables del ejemplo anterior:
//Nombre completo (nombre y apellido)
// Dinero real (dinero ahorrado menos deudas)


// Variables anteriores
var Nombre = "Santiago";
var Apellido = "Tipanguano";
var usuarioESPE = "sntipanguano";
var Edad = 25;
var correoElectronico = "ejemplo@example.com";
var mayorEdad = true;
var dineroAhorrado = 1000.50;
var deuda = 500.25;

//  Nombre completo calculado
var nombreCompleto = Nombre + " " + Apellido;

//  Dinero real calculado
var dineroReal = dineroAhorrado - deuda;

// variables calculadas
console.log("Nombre completo: " + nombreCompleto);
console.log("Dinero real: " + dineroReal);
