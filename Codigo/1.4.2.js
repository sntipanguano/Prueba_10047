//Samantha Tipanguano y Amanda Rivera
//1.4.2 Replica el comportamiento del siguiente código que usa la sentencia
//switch utilizando if, else y else if:
//const tipoDeSuscripcion = "Basic";
//switch (tipoDeSuscripcion) {
//case "Free":
//console.log("Solo puedes tomar los cursos gratis");
//break;
//case "Basic":
//console.log("Puedes tomar casi todos los cursos de ESPE durante un mes");
//break;
//case "Expert":
//console.log("Puedes tomar casi todos los cursos de ESPE durante un año");
//break;
//case "ExpertPlus":
//console.log("Tú y alguien más pueden tomar TODOS los cursos
//de ESPE durante un año");
//break;


const tipoDeSuscripcion = "Basic";

if (tipoDeSuscripcion === "Free") {
  console.log("Solo puedes tomar los cursos gratis");
} else if (tipoDeSuscripcion === "Basic") {
  console.log("Puedes tomar casi todos los cursos de ESPE durante un mes");
} else if (tipoDeSuscripcion === "Expert") {
  console.log("Puedes tomar casi todos los cursos de ESPE durante un año");
} else if (tipoDeSuscripcion === "ExpertPlus") {
  console.log("Tú y alguien más pueden tomar TODOS los cursos de ESPE durante un año");
}
