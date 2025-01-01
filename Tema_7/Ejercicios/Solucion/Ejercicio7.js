function generarTriangulo(numero) {
    for (let i = 1; i <= numero; i++) {
        let linea = "";
        for (let j = 1; j <= i; j++) {
            linea += j + " ";
        }
        console.log(linea.trim());
    }
}