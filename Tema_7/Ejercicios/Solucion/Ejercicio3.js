function validarNumero(valor) {
    try {
        if (isNaN(valor)) {
            throw new Error("El valor ingresado no es un número válido.");
        }
        return valor * 2;
    } catch (error) {
        return `Error: ${error.message}`;
    }
}