let email = "usuario@dominio"; // Cambia este valor para probar

// Opcion 1: Validacion con includes, sin expresiones regulares
try {
    if (!email.includes("@") || !email.includes(".")) {
        throw new Error("Formato de correo electrónico inválido");
    }
    console.log("El correo electrónico es válido.");
} catch (error) {
    console.error("Error: ", error.message);
} finally {
    console.log("Validación de correo electrónico completada.");
}


// Opcion 2: Validacion con expresiones regulares
try {
    // Expresión regular para validar el formato de correo electrónico
    let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
        throw new TypeError("Formato de correo electrónico inválido");
    }
    console.log("El correo electrónico es válido.");
} catch (error) {
    console.error("Error: ", error.message);
} finally {
    console.log("Validación de correo electrónico completada.");
}
