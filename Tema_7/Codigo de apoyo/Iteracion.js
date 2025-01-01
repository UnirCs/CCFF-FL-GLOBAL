/**
 * Los bucles nos permiten ejecutar un bloque de codigo varias veces
 * Tenemos el bucle for, while y do while
 * - For: Se ejecuta un bloque de codigo un numero determinado de veces
 * - While: Se ejecuta un bloque de codigo mientras una condicion sea verdadera
 * - Do while: Se ejecuta un bloque de codigo al menos una vez y luego mientras una condicion sea verdadera
 */

//Bucle for
for (let i = 0; i < 5; i++) {
    console.log(i);
}

//Bucle while
let j = 0;
while (j < 5) {
    console.log(j);
    j++;
}

//Bucle do while
let k = 0;
do {
    console.log(k);
    k++;
} while (k < 5);

// A continuacion veremos un ejemplo de como se puede usar un bucle for para mostrar por pantalla los primeros 50 numeros pares
for (let i = 0; i < 100; i += 2) {
    console.log(i);
}
//Otra forma de hacerlo es con un contador que se incrementa de uno en uno por cada numero par observado.
for (let i = 0, contador = 0; contador < 50; i++) {
    if (i % 2 === 0) {
        console.log(i);
        contador++;
    }
}

// A continuacion veremos un ejemplo de como se puede usar un bucle while para mostrar por pantalla los primeros 50 numeros pares
let l = 0;
while (l < 100) {
    console.log(l);
    l += 2;
}
//Otra forma de hacerlo es con un contador que se incrementa de uno en uno por cada numero par observado.
l = 0;
let contador = 0;
while (contador < 50) {
    if (l % 2 === 0) {
        console.log(l);
        contador++;
    }
    l++;
}

// A continuacion veremos un ejemplo de como se puede usar un bucle do while para mostrar por pantalla los primeros 50 numeros pares
let m = 0;
do {
    console.log(m);
    m += 2;
} while (m < 100);

// A continuacion un ejemplo mas completo: Vamos a mostrar, para los 100 primeros numeros naturales, si son divisibles por 3, por 5 o por ambos
for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log(i + " es divisible por 3 y por 5");
    } else if (i % 3 === 0) {
        console.log(i + " es divisible por 3");
    } else if (i % 5 === 0) {
        console.log(i + " es divisible por 5");
    } else {
        console.log(i + " no es divisible por 3 ni por 5");
    }
}