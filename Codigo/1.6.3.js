//Samantha Tipanguano y Amanda Rivera
//Crea una función que pueda recibir cualquier
//array como parámetro e imprima todos sus elementos 
//uno por uno (no se vale imprimir el array completo). 


function imprimir(array){
  array.forEach(item => {
    console.log(item)
  })
}

var myArray = [20, 19, 18, 17, 16, 15, 14, 13, 12, 11]
imprimir(myArray)