//Ejemplos de funciones en JavaScript

//Funcion sin parametros
function saluda() {
    return "Hola!";
}

//Invocar la funcion
saluda();

//Funcion con un parametro
function cubo(a) {
    return a ** 3;
}

//Invocar la funcion
cubo(3);

//Funcion con dos parametros
function sumarDosNumeros(a, b) {
    return a + b;
}

//Invocar la funcion
sumarDosNumeros(3, 5);

//Funcion con tres parametros
function sumarTresNumeros(a, b, c) {
    let d = sumarDosNumeros(a, b);
    return d + c;
}

//Invocar la funcion
sumarTresNumeros(3, 5, 7);

//Funcion con una propiedad
function funConProps() {
    console.log("Una función sencilla" + funConProps.unaPropiedad)
};

//Invocar la funcion
funConProps();

//Funcion flecha para sumar dos numeros
const sumarDosNumerosArrow = (a, b) => a + b;

//Invocar la funcion
sumarDosNumerosArrow(3, 5);

//Funcion flecha para sumar tres numeros
const sumarTresNumerosArrow = (a, b, c) => {
    let d = sumarDosNumeros(a, b);
    return d + c;
}

//Invocar la funcion
sumarTresNumerosArrow(3, 5, 7);

//No declaramos la funcion con let, dado que no queremos que se pueda modificar

//Callbacks
//Definimos funciones con operaciones aritmeticas simples
const suma = (a, b) => a + b;
const resta = (a, b) => a - b;
const multiplicacion = (a, b) => a * b;
const division = (a, b) => a / b;

//Definimos una funcion que recibe dos numeros y una funcion
function operacion(a, b, operacion) {
    return operacion(a, b); //Invocamos la funcion que nos pasan como parametro, con los dos numeros que nos pasan como parametro
}

//Invocamos la funcion operacion con los numeros 3 y 5 y la funcion suma
console.log(operacion(3, 5, suma)); //Devuelve 8
console.log(operacion(3, 5, resta)); //Devuelve -2
console.log(operacion(3, 5, multiplicacion)); //Devuelve 15
console.log(operacion(3, 5, division)); //Devuelve 0.6





