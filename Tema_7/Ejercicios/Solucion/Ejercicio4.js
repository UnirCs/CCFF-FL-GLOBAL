function imprimirHasta(numero) {
    if (numero < 1) {
        console.log("El número debe ser mayor o igual a 1.");
        return;
    }
    let i = 1;
    while (i <= numero) {
        console.log(i);
        i++;
    }
}