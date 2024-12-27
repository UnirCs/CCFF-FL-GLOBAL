# Ejercicios de Fundamentos de JavaScript

El objetivo de estos ejercicios es practicar los conceptos básicos de JavaScript que hemos visto en el tema. Para cada ejercicio, declara las variables necesarias, realiza los cálculos o comparaciones correspondientes y muestra el resultado en la consola.
Si te atascas, recuerda que puedes consultar la teoría y los ejemplos del tema. Las soluciones a los ejercicios están disponibles en la carpeta `Soluciones`.

## Ejercicio 1: Calculando el área de un rectángulo
Declara dos variables con las dimensiones (base y altura) de un rectángulo. Calcula el área del rectángulo y muéstralo en la consola utilizando `console.log`.

**Pistas:**
- Usa nombres descriptivos para las variables.
- Recuerda que el área de un rectángulo se calcula como `base * altura`.

---

## Ejercicio 2: Comparando edades
Declara dos variables que representen las edades de dos personas. Utiliza operadores de comparación para determinar:
1. Si la primera persona es mayor que la segunda.
2. Si tienen la misma edad.

Muestra el resultado de cada comparación en la consola.

**Pistas:**
- Usa operadores como `>`, `<`, y `===`.
- Muestra un mensaje claro junto con el resultado, por ejemplo: "La primera persona es mayor: true".

---

## Ejercicio 3: Precio con descuento
Declara una variable para el precio original de un producto y otra para un porcentaje de descuento (por ejemplo, 20 para un 20%). Calcula el precio final aplicando el descuento y muéstralo en la consola.

**Pistas:**
- Recuerda que el descuento se calcula como `(precio * descuento) / 100`.
- El precio final es el precio original menos el descuento calculado.

---

## Ejercicio 4: Convirtiendo grados Celsius a Fahrenheit
Declara una variable que represente una temperatura en grados Celsius. Calcula la temperatura equivalente en grados Fahrenheit y muestra el resultado en la consola.

**Fórmula de conversión:**
```
Fahrenheit = (Celsius * 9/5) + 32
```

**Pistas:**
- Usa una variable para guardar el resultado antes de mostrarlo.
- Asegúrate de que los valores sean correctos realizando pruebas con números conocidos.

---

## Ejercicio 5: Calculadora de promedio
Declara tres variables que representen tres notas de un estudiante. Calcula el promedio de las notas y muestra el resultado en la consola.

**Pistas:**
- El promedio se calcula como `(nota1 + nota2 + nota3) / 3`.
- Muestra el promedio con un mensaje claro, por ejemplo: "El promedio del estudiante es: ...".

---

## Ejercicio 6: Calculando la letra del DNI
En España, el número del DNI tiene una letra asociada que se calcula utilizando el operador módulo `%` y una tabla de correspondencias.

Declara una variable que contenga un número de DNI (sin letra). Calcula el índice para la letra dividiendo el número por 23 y utilizando el resto de esa división (operador `%`). Luego, utiliza el índice para encontrar la letra correspondiente en la siguiente tabla:

```javascript
const LETRAS = "TRWAGMYFPDXBNJZSQVHLCKE"
```

Por ejemplo, si el resto es 3, la letra es `W` (cuarta posición en la tabla).

Muestra en la consola el número de DNI junto con su letra.

**Pistas:**
- Usa la operación `numero % 23` para obtener el índice.
- Accede a la letra correspondiente con `LETRAS[indice]`.
- Asegúrate de mostrar un mensaje claro, por ejemplo: "El DNI completo es: 12345678W".
