// 5- Definir una función que muestre información sobre una cadena de texto que se le pasa como argumento. A partir de la cadena que se le pasa, la función determina si esa cadena está formada sólo por mayúsculas, sólo por minúsculas o por una mezcla de ambas.
let texto = prompt("Introduzca un texto").trim();

if (texto === "") {
  console.error("Introduzca un texto valido:");
} else if (texto === texto.toUpperCase()) {
  console.log("El texto esta en mayuscula");
} else if (texto === texto.toLowerCase()) {
  console.log("El texto esta en minuscula");
} else {
  console.log("El texto esta combinado");
}
