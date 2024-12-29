// Ejemplo: Tratamiento de Excepciones en JavaScript

// Lanzamiento de Excepciones
// Ejemplo 1: Lanzar una excepción simple
// throw "Esto es un error"; // Lanza una cadena como excepción
// throw 42; // Lanza un número como excepción
// throw { mensaje: "Algo salió mal" }; // Lanza un objeto como excepción

// Ejemplo 2: Usar un objeto Error
try {
    throw new Error("Ocurrió un error inesperado");
} catch (error) {
    console.error("Se produjo un error: ", error.message);
} finally {
    console.log("Ejemplo de lanzamiento de error completado.");
}

// Manejo de Excepciones: try, catch y finally
// Ejemplo 3: Manejo de una Excepción
try {
    let resultado = 10 / 0; // Aunque matemáticamente esto es indeterminado, JavaScript no lanza error
    if (!isFinite(resultado)) {
        throw new Error("División por cero");
    }
    console.log("Resultado: ", resultado);
} catch (error) {
    console.error("Se produjo un error: ", error.message);
} finally {
    console.log("Ejecución completada.");
}

// Ejemplo 4: Manejo de múltiples errores
try {
    let json = '{ "nombre": "Juan", "edad": "veinte" }';
    let usuario = JSON.parse(json);

    if (isNaN(usuario.edad)) {
        throw new TypeError("La edad debe ser un número.");
    }
    console.log("Usuario procesado: ", usuario);
} catch (error) {
    if (error instanceof SyntaxError) {
        console.error("Error de sintaxis en el JSON: ", error.message);
    } else if (error instanceof TypeError) {
        console.error("Error de tipo: ", error.message);
    } else {
        console.error("Error desconocido: ", error.message);
    }
} finally {
    console.log("Intento de parseo de JSON completado.");
}

// Ejecución de ejemplos (Descomentar para probar)
// Elimine las funciones para simplificar el código.
// Comentar o descomentar según sea necesario para probar los bloques de código arriba.

