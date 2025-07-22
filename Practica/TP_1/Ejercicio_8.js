// Escribe un programa que pida un número y diga si es divisible por 2
let numero =  Number(prompt("Ingrese un numero"));

let Modulo = numero % 2;

let divisible = (Modulo === 0);

let mensaje = divisible.toString()

let mensajeFinal = mensaje.replace("false", " no es divisible por 2.")
.replace("true", " es divisible por 2.");

console.log("El", numero, mensajeFinal);