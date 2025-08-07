// ✅ 2. filter - Filtrar palabras con más de 5 letras
// Enunciado:
// Dado un array de strings, usá filter para quedarte solo con las palabras que tengan más de 5 caracteres.
const palabras = [
  "luz",
  "gato",
  "flor",
  "avión",
  "silla",
  "pluma",
  "ratón",
  "botella",
  "reloj",
  "pared",
  "universidad",
  "bicicleta",
  "electricidad",
  "fotografía",
  "maravilloso",
  "computadora",
  "astronauta",
  "biblioteca",
  "helicóptero",
  "increíble",
];

let Caracteres = palabras.filter((palabra) => palabra.length > 5);

console.log(Caracteres);
