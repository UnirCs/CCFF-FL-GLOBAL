/**
 * Los mapas son colecciones de pares clave-valor
 *
 * Se trata de una estructura de datos que contiene N elementos no indizados y accesibles mediante su clave
 */

let mapaVacio = new Map();
console.log(mapaVacio);

let mapaConElementos = new Map([["coche", "rojo"], ["moto", "verde"], ["furgoneta", "azul"]]);
let mapaNumerico = new Map([[1, "rojo"], [7, "verde"], [-2, "azul"]]);
let mapaMixto = new Map([[1, "rojo"], [7, "verde"], ["hola", "azul"]]); //Evitaremos este tipo de practicas ya que pueden ser propensas a error

console.log(mapaConElementos);
console.log(mapaMixto);

//No podemos acceder a los elementos de un mapa por su indice
//console.log(mapaConElementos[0]);

//Un mapa (como cualquier coleccion) tiene un tamaño que usaremos para hacer operaciones - size
let size = mapaConElementos.size;
console.log(size);
console.log(mapaVacio.size);

//Podemos incluir elementos
mapaConElementos.set("moto", "amarillo");
console.log(mapaConElementos);

//Podemos eliminar elementos
mapaConElementos.delete("moto");

//Recorrer mapas usando bucles (for of)
for(let [clave, valor] of mapaConElementos) {
    console.log("elemento " + clave + " es " + valor);
}

//Podemos convertir un mapa en array
let arrayConElementos = Array.from(mapaConElementos);
console.log(arrayConElementos);

//Podemos convertir un array en mapa
let mapaFromArray = new Map(arrayConElementos);
console.log(mapaFromArray);
