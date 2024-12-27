# Ejercicios de CSS y HTML

El objetivo de estos ejercicios es que practiques tus habilidades de diseño web utilizando HTML y CSS. Cada ejercicio propuesto incluye una descripción de la página que debes crear y algunos elementos que debes incluir en ella. Puedes utilizar las propiedades de CSS que consideres oportunas y también aquellas que se sugieren. En ningún caso se considera el uso de diseño responsive en estos ejercicios.

### Recursos Oficiales del W3C para Propiedades CSS

A continuación, se proporciona una lista de recursos oficiales del W3C para las propiedades CSS utilizadas en los ejercicios. Cada enlace lleva a la especificación correspondiente. Si te atascas, recuerda que puedes abrir el archivo `index.html` en la solución para hacerte una idea visual de qué es lo que se pide.

1. **Propiedad `text-align`** [Documentación oficial](https://www.w3.org/TR/css-text-3/#text-align-property)

2. **Propiedad `background-color`** [Documentación oficial](https://www.w3.org/TR/css-backgrounds-3/#background-color)

3. **Propiedad `padding`** [Documentación oficial](https://www.w3.org/TR/css-box-3/#padding)

4. **Propiedad `margin`** [Documentación oficial](https://www.w3.org/TR/css-box-3/#margin)

5. **Propiedad `border`** [Documentación oficial](https://www.w3.org/TR/css-backgrounds-3/#the-border-shorthands)

6. **Propiedad `color`** [Documentación oficial](https://www.w3.org/TR/css-color-4/#color-property)

7. **Propiedad `text-decoration`** [Documentación oficial](https://www.w3.org/TR/css-text-decor-4/#text-decoration-property)

8. **Pseudoclases**
  - `:hover`: [Documentación oficial](https://www.w3.org/TR/selectors-4/#hover-pseudo)
  - `:nth-child()` y `:nth-of-type()`: [Documentación oficial](https://www.w3.org/TR/selectors-4/#nth-child-pseudo)
  - `:even` y `:odd` (subcategorías de `:nth-child`): [Documentación oficial](https://www.w3.org/TR/selectors-4/#pseudo-classes)
  - `:active`: [Documentación oficial](https://www.w3.org/TR/selectors-4/#active-pseudo)

9. **Selectores de Atributos**
  - `[attr^=value]`, `[attr$=value]`, y `[attr*=value]`: [Documentación oficial](https://www.w3.org/TR/selectors-4/#attribute-substrings)

10. **Propiedad `font-weight`** [Documentación oficial](https://www.w3.org/TR/css-fonts-4/#font-weight-prop)

11. **Propiedad `opacity`** [Documentación oficial](https://www.w3.org/TR/css-color-4/#transparency)

12. **Propiedad `transform`** [Documentación oficial](https://www.w3.org/TR/css-transforms-2/#transform-property)

13. **Propiedad `border-collapse`** [Documentación oficial](https://www.w3.org/TR/css-tables-3/#border-collapse)


## Ejercicio 1: Crear una lista de tareas

Diseña una página que muestre una lista de tareas pendientes. Cada tarea debe tener un título y una breve descripción. Algunas tareas deben estar marcadas como "completadas". Añade también un encabezado principal para el título de la página.

Estilos que se deben aplicar:

- El encabezado principal debe estar centrado en la página y tener un color de fondo.
- Las tareas completadas deben tener un color de texto diferente y un estilo de texto tachado.
- Usa un selector de pseudoclase para cambiar el color de fondo de las tareas al pasar el ratón por encima.
- Usa selectores de clase y pseudoclase para alternar estilos en las tareas según si están completadas o no.

##  Ejercicio 2: Diseñar un menú de navegación

Crea un menú de navegación que incluya varios enlaces a secciones ficticias como "Inicio", "Servicios", "Acerca de", y "Contacto". El ejercicio no contempla que efectivamente se redirija a otra página cuando se haga click en un enlace.

Estilos que se deben aplicar:

- Los enlaces deben estar alineados horizontalmente.
- El enlace de la sección activa debe destacar con un color diferente y estar subrayado.
- Usa un selector de pseudoclase para cambiar el color de los enlaces cuando el usuario pase el ratón por encima.
- Usa un selector de atributo para estilizar los enlaces que comiencen con "http".


## Ejercicio 3: Crear una galería de imágenes
Crea una galería con imágenes de paisajes. Las imágenes deben estar organizadas en filas y columnas.

Estilos que se deben aplicar:

- Todas las imágenes deben tener un borde y un pequeño margen entre ellas.
- Al pasar el ratón sobre una imagen, su borde debe cambiar de color.
- Usa un selector de descendencia para seleccionar las imágenes dentro de la galería.
- Usa selectores de pseudoclase para alternar los estilos de las imágenes según su posición.

## Ejercicio 4: Crear una tabla con estilos
Diseña una tabla que muestre una lista de estudiantes con sus nombres, edades y calificaciones.

Estilos que se deben aplicar:

- Usa selectores de pseudoclase para alternar los colores de fondo de las filas.
- Cambia el estilo de la fila al pasar el ratón por encima.
- Usa un selector de atributo para aplicar estilos a celdas con una clase específica.

## Ejercicio 5: Diseñar un formulario con estilos
Crea un formulario con campos para nombre, correo electrónico, y una sección de selección (como un desplegable o botones de radio) para elegir una categoría de consulta. Incluye también un botón para enviar el formulario.

Estilos que se deben aplicar:

- Usa un selector de atributo para estilizar los campos de texto (input[type="text"]) y el correo electrónico (input[type="email"]) de forma diferente.
- Usa selectores de pseudoclase para cambiar el color de borde de los campos cuando están enfocados.
- Aplica estilos distintos al botón de envío al pasar el ratón por encima.
- Usa un selector de descendencia para estilizar elementos específicos dentro del formulario.