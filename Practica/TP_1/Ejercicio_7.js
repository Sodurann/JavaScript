// Escribe un programa que pida 3 números y escriba en la pantalla el mayor de los tres.
let numA = Number(prompt ("Ingrese un numero"));
let numB = Number(prompt ("Ingrese un numero"));
let numC = Number(prompt ("Ingrese un numero"));

let Mayor = Math.max(numA,numB,numC);

console.log("El",Mayor,"es el número más grande");