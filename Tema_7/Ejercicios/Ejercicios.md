# Ejercicios de JavaScript: Control de Flujo, Excepciones e Iteración

## Ejercicio 1: Número positivo o negativo

Escribe una función llamada `verificarNumero` que tome un número como parámetro. La función debe verificar si el número es positivo, negativo o cero, y devolver un mensaje adecuado.

### Ejemplo de uso:
```javascript
verificarNumero(5); // "El número es positivo."
verificarNumero(-3); // "El número es negativo."
verificarNumero(0); // "El número es cero."
```

---

## Ejercicio 2: Calculadora básica con `switch`

Escribe una función llamada `calculadora` que reciba tres parámetros: dos números y un operador (`+`, `-`, `*`, `/`). La función debe realizar la operación correspondiente y devolver el resultado. Si el operador no es válido, debe devolver un mensaje de error.

### Ejemplo de uso:
```javascript
calculadora(5, 3, '+'); // 8
calculadora(10, 2, '/'); // 5
calculadora(4, 2, 'x'); // "Operador no válido."
```
---

## Ejercicio 3: Validación de entrada con `try-catch`

Escribe una función llamada `validarNumero` que reciba un valor. Si el valor no es un número válido, la función debe lanzar una excepción con un mensaje de error. Si es válido, debe devolver el doble del número. Puedes usar la función [isNaN](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/isNaN) para verificar si un valor no es un número.

### Ejemplo de uso:
```javascript
validarNumero(10); // 20
validarNumero("texto"); // "Error: El valor ingresado no es un número válido."
```

---

## Ejercicio 4: Iteración con `while`

Escribe una función llamada `imprimirHasta` que tome un número como parámetro. La función debe imprimir en la consola todos los números desde 1 hasta el número dado (incluyéndolo). Si el número es menor que 1, debe imprimir un mensaje indicando que no es válido.

### Ejemplo de uso:
```javascript
imprimirHasta(5);
// Salida:
// 1
// 2
// 3
// 4
// 5
imprimirHasta(0); // "El número debe ser mayor o igual a 1."
```

---

## Ejercicio 5: Uso de callbacks

Escribe una función llamada `procesarNumero` que reciba un número y una función callback. La función debe aplicar la callback al número dado y devolver el resultado. Incluye también dos funciones, `doblar` y `triplicar`, que pueden ser utilizadas como callbacks.

### Ejemplo de uso:
```javascript
function doblar(num) {
    return num * 2;
}

function triplicar(num) {
    return num * 3;
}

procesarNumero(5, doblar); // 10
procesarNumero(5, triplicar); // 15
```

---

## Ejercicio 6: Factorial con bucle `for`

Escribe una función llamada `calcularFactorial` que tome un número como parámetro. La función debe calcular y devolver [el factorial de ese número](https://matemathweb.com/algebra/factorial/#:~:text=El%20factorial%20de%20un%20n%C3%BAmero%20natural%20n%2C%20es%20el%20producto,el%20signo%20de%20admiraci%C3%B3n%20(!)) usando un bucle `for`. Si el número es menor que 0, debe devolver un mensaje indicando que el factorial no está definido para números negativos.

### Ejemplo de uso:
```javascript
calcularFactorial(5); // 120
calcularFactorial(0); // 1
calcularFactorial(-3); // "El factorial no está definido para números negativos."
```

---

## Ejercicio 7: Generar un triángulo de números

Escribe una función llamada `generarTriangulo` que tome un número como parámetro. La función debe generar un triángulo de números en la consola, donde cada línea contiene números incrementales desde 1 hasta el número de la línea actual.

### Ejemplo de uso:
```javascript
generarTriangulo(5);
// Salida:
// 1
// 1 2
// 1 2 3
// 1 2 3 4
// 1 2 3 4 5
```
