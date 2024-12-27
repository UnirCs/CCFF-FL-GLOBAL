// Declaramos un número de DNI sin letra
let numeroDNI = 12345678; // Ejemplo de DNI

// Tabla de letras para el cálculo del DNI
const LETRAS = "TRWAGMYFPDXBNJZSQVHLCKE";

// Calculamos el índice utilizando el operador módulo
let indice = numeroDNI % 23;

// Obtenemos la letra correspondiente
let letraDNI = LETRAS[indice];

// Mostramos el DNI completo en la consola
console.log("El DNI completo es: " + numeroDNI + letraDNI);