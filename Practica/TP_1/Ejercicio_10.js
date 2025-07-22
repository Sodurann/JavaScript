// Escribe un programa que pida un número y nos diga si es divisible por 2, 3, 5 o 7 (sólo hay que comprobar si lo es por uno de los cuatro)
let numero = Number(prompt("Introduzca un numero"));

let esDivisiblePor2 = numero % 2 === 0;
let esDivisiblePor3 = numero % 3 === 0;
let esDivisiblePor5 = numero % 5 === 0;
let esDivisiblePor7 = numero % 7 === 0;

let resultado =
  (esDivisiblePor2 && "2") +
  (esDivisiblePor3 && "3") +
  (esDivisiblePor5 && "5") +
  (esDivisiblePor7 && "7");

resultadoFinal = (resultado.replace("false", "")
.replace("true","es divisible por"+Number(resultado))).trim;

console.log(resultado);
