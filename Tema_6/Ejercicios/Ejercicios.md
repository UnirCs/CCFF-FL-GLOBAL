# Ejercicios de manejo de excepciones y control de flujo en JavaScript

## Ejercicio 1: Verificar Entrada con If-Else
Escribe un programa que solicite un valor numérico a través de una variable. Si el valor es mayor o igual a 18, muestra "Eres mayor de edad". En caso contrario, muestra "Eres menor de edad".


---

## Ejercicio 2: Categoría de Edades con Else-If
Escribe un programa que clasifique una edad en una de las siguientes categorías:
- "Niño" si la edad es menor que 12.
- "Adolescente" si la edad está entre 12 y 17.
- "Adulto" si la edad es 18 o mayor.

---

## Ejercicio 3: Días de la Semana con Switch
Crea un programa que tome un número del 1 al 7 y muestre el día de la semana correspondiente. Por ejemplo:
- 1: Lunes
- 2: Martes
- etc.

Si el número está fuera del rango, muestra "Número inválido".

---

## Ejercicio 4: Verificar Pares con el Operador Ternario
Crea un programa que verifique si un número dado es par o impar utilizando el operador ternario. Muestra "Par" o "Impar" según corresponda.


---

## Ejercicio 5: Validación de Formato de Correo Electrónico
### Enunciado
Escribe un programa que verifique si una cadena proporcionada tiene el formato de un correo electrónico válido (por ejemplo, "usuario@dominio.com"). Si el formato es incorrecto, lanza una excepción con un mensaje de error. Captura la excepción y muestra el mensaje en la consola.

Entre otras, dos de las opciones más habituales para realizar esto son:
- Verificar si la cadena contiene un carácter "@" y un carácter ".". Puedes utilizar el método `includes()` de las cadenas para esto.
- Utilizar una expresión regular para validar el formato del correo electrónico. Se trata de una cadena especial que describe un patrón de caracteres. Revisa la [documentación de JavaScript para más información sobre expresiones regulares](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_expressions). Esta opción es algo más complicada y te recomendamos realizarla únicamente si los demás ejercicios han sido resueltos correctamente.

