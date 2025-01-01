/**
 * Los sets son colecciones de valores unicos
 *
 * Se trata de una estructura de datos que contiene N elementos no indizados y accesibles mediante su valor
 *
 */

let setVacio = new Set();
console.log(setVacio);

let setConElementos = new Set(["coche", "moto", "furgoneta"]);
let setNumerico = new Set([1,7,-2,0]);
let setMixto = new Set([1,7,"hola","adios"]); //Evitaremos este tipo de practicas ya que pueden ser propensas a error

console.log(setConElementos);
console.log(setMixto);

//No podemos acceder a los elementos de un set por su indice
//console.log(setConElementos[0]);

//Un set (como cualquier coleccion) tiene un tamaño que usaremos para hacer operaciones - size
let size = setConElementos.size;
console.log(size);
console.log(setVacio.size);

//Podemos incluir elementos
setConElementos.add("moto");
console.log(setConElementos);

//Podemos eliminar elementos
setConElementos.delete("moto");

//Si contienen texto, podemos ordenarlos
setConElementos.sort();
console.log(setConElementos);

setNumerico.sort();
console.log(setNumerico);

//Recorrer sets usando bucles (for of)
for(let elemento of setConElementos) {
    console.log("elemento es " + elemento);
}

//Podemos convertir un set en array
let arrayConElementos = Array.from(setConElementos);

//Podemos convertir un array en set
let setFromArray = new Set(arrayConElementos);
console.log(setFromArray);
