# Ejercicios generales de JavaScript (Abarcan todos los temas)

## Ejercicio 1: Control de flujo y manejo de excepciones
Crea una función `categorizeNumbers(numbers)` que reciba un array de números. La función debe:

1. Verificar si el array contiene solo números. Si no, lanzar una excepción.
2. Clasificar los números en tres categorías: "positivos", "negativos" y "cero".
3. Retornar un objeto con tres arrays, uno para cada categoría.

```javascript
// Ejemplo de uso
console.log(categorizeNumbers([1, -2, 0, 3, -4, 5]));

// Debería mostrar:
{
  positivos: [ 1, 3, 5 ],
  negativos: [ -2, -4 ],
  cero: [ 0 ]
}
```

## Ejercicio 2: Iteración y Mapas
Crea una función `countWords(text)` que reciba un texto. La función debe:

1. Dividir el texto en palabras (separadas por espacios). Utiliza la expresión regular `/\s+/` para dividir el texto con la función [split](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/String/split).
2. Contar cuántas veces aparece cada palabra usando un `Map`.
3. Retornar el `Map`.

```javascript
// Ejemplo de uso
console.log(countWords("hola mundo hola javascript mundo"));

// Debería mostrar:
Map {
  'hola' => 2,
  'mundo' => 2,
  'javascript' => 1
}
```

## Ejercicio 3: Sets y manejo de excepciones
Crea una función `uniqueSortedArray(numbers)` que reciba un array de números. La función debe:

1. Eliminar valores duplicados usando un `Set`.
2. Manejar excepciones si el array contiene valores no numéricos.
3. Retornar el array ordenado. Utiliza la función `sort` con una [función de comparación](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/sort).

```javascript
// Ejemplo de uso
console.log(uniqueSortedArray([5, 3, 1, 5, 2, 3, 4]));

// Debería mostrar:
[ 1, 2, 3, 4, 5 ]
```

## Ejercicio 4: Callbacks y control de flujo
Crea una función `processArray(array, callback)` que reciba un array y un callback. La función debe:

1. Verificar que el array no esté vacío.
2. Iterar sobre los elementos del array y aplicar el callback a cada elemento.
3. Manejar excepciones si el callback no es una función (puedes comparar el resultado de `typeof callback` con `'function'` para saberlo).
4. Retornar un nuevo array con los resultados.

```javascript
// Ejemplo de uso
console.log(processArray([1, 2, 3, 4], num => num * 2));

// Debería mostrar:
[ 2, 4, 6, 8 ]
```

## Ejercicio 5: Control de flujo y manejo de datos
Crea una función `filterAndGroup(array)` que reciba un array de objetos con la estructura `{ nombre, edad }`. La función debe:

1. Filtrar los objetos con edad mayor o igual a 18.
2. Agruparlos en un objeto con dos categorías: "mayores" y "menores".
3. Retornar el objeto agrupado.

```javascript
// Ejemplo de uso
console.log(filterAndGroup([
    { nombre: "Juan", edad: 20 },
    { nombre: "Ana", edad: 15 },
    { nombre: "Luis", edad: 18 }
]));

//Debería mostrar:
 { mayores: [ { nombre: 'Juan', edad: 20 } ], menores: [ { nombre: 'Luis', edad: 18 } ] }
```

