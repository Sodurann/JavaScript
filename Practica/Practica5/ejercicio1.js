// ✅ 1.
// map - Convertir un array de grados Celsius a Fahrenheit
// Enunciado:
// Dado un array con temperaturas en grados Celsius, usá map para obtener un nuevo array con esas temperaturas en Fahrenheit.
// Fórmula: F = C × 1.8 + 32
let numeros = [30, 50, 10, 35, 40, 20, 10];

const tempFahrenheight = numeros.map(function (num) {
  return (num * 1.8) + 32;
});

console.log(tempFahrenheight);
