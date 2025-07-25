// 🧪 Ejercicio 2: Adivina el número secreto
// ✅ Tipo: while
// 🎯 Objetivo: Repetir hasta que acierten
// 🧠 Habilidades: uso de variables, condiciones, prompt
// Consigna:
// El programa genera un número secreto entre 1 y 10. El usuario tiene que adivinarlo, y el bucle continúa hasta que acierte. Mostrar cuántos intentos le tomó.
// Podés usar Math.floor(Math.random() * 10) + 1 para generar el número.
// Extra opcional para pensar: si lo adivina en el primer intento, mostrar un mensaje especial.

let numeroSecreto = Math.floor(Math.random() *10)+1;
let numeroIngresado = parseInt(prompt("Ingrese el numero de la suerte"));
let intentos = 0;

while (numeroIngresado != numeroSecreto) {
    console.log("Uh ese no era el numero");
    numeroIngresado = parseInt(prompt("Probemos de nuevo, ingrese otro numero"));
    intentos++;
}
if (intentos==1) {
    console.log("Felicidades! Adivinaste en el primer intento!!!");
} else {
    console.log("Felicidades! Adivinaste en", intentos, "intentos");

}


