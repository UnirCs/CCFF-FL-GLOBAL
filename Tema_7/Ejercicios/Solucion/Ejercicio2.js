function calculadora(num1, num2, operador) {
    switch (operador) {
        case '+':
            return num1 + num2;
        case '-':
            return num1 - num2;
        case '*':
            return num1 * num2;
        case '/':
            if (num2 === 0) {
                return "No se puede dividir entre cero.";
            }
            return num1 / num2;
        default:
            return "Operador no válido.";
    }
}