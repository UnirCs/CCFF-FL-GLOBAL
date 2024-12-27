// Declaración de variables y constantes
let variableLet = "Soy una variable let"; // Se puede reasignar
const constante = "Soy una constante"; // No se puede reasignar
var variableVar = "Soy una variable var"; // Uso menos recomendado

// Tipos de datos
let stringExample = "Esto es un texto"; // Tipo string
let numberExample = 42; // Tipo number
let booleanExample = true; // Tipo boolean
let undefinedExample; // Tipo undefined (sin valor asignado)
let nullExample = null; // Tipo null (valor intencionalmente vacío)

// Mostramos los tipos en consola
console.log("Tipo de stringExample: " + typeof stringExample);
console.log("Tipo de numberExample: " + typeof numberExample);
console.log("Tipo de booleanExample: " + typeof booleanExample);
console.log("Tipo de undefinedExample: " + typeof undefinedExample);
console.log("Tipo de nullExample: " + typeof nullExample); // Nota: typeof null devuelve 'object'

// Ámbito de variables
//Ambito global
const valor = "un valor";
let otroValor = 4;
{
    //Ambito de bloque
    const valor = "otro valor";
    let otroValor = 5;
    console.log(valor); // Devuelve: 'otro valor'
    console.log(otroValor); // Devuelve: 5
}
console.log(valor); // Devuelve: 'un valor'

// Operadores de comparación
let numero1 = 5;
let numero2 = "5";

// Comparación con doble igual (==) (solo compara valores)
console.log("Doble igual: " + (numero1 == numero2)); // true

// Comparación con triple igual (===) (compara valores y tipos)
console.log("Triple igual: " + (numero1 === numero2)); // false

// Ejemplo práctico: diferencias entre undefined y null
let ejemploUndefined;
let ejemploNull = null;

console.log("¿undefined es igual a null (==)? " + (ejemploUndefined == ejemploNull)); // true
console.log("¿undefined es estrictamente igual a null (===)? " + (ejemploUndefined === ejemploNull)); // false
