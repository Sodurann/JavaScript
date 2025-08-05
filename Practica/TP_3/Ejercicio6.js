// 6- Solicitar por pantalla al usuario ingresar el valor de los lados de un rectángulo, luego crear una función para calcular su perímetro y mostrarlo por pantalla.
// La fórmula del perímetro  es p = 2*(a +b)

let lado1 = parseInt(prompt("Introduzca el valor de un lado del rectangulo:"));
let lado2 = parseInt(prompt("Introduzca el valor del otro lado del rectangulo:"));

function perimetro (uno,dos) {
    return 2*(uno+dos)
}
console.log ("El perimetro del rectangulo de lados",lado1,"y",lado2,"es de",perimetro (lado1,lado2));