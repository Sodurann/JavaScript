// ✅ 3. indexOf - Buscar la posición de una palabra específica
// Enunciado:
// Dado un array de palabras, usá indexOf para encontrar la
// posición de una palabra específica. Si no está, devolvé -1.
let palabraIngresada = prompt(
  "Ingrese una palabra para buscar su posicion: "
).trim();

let palabras = [
  "manzana",
  "banana",
  "pera",
  "sandía",
  "uva",
  "frutilla",
  "kiwi",
  "bicicleta",
  "electricidad",
  "fotografía",
  "maravilloso",
];

let Index = palabras.findIndex(
  (palabra) => palabra.toLowerCase() === palabraIngresada.toLowerCase()
);

console.log("La palabra esta en la poscion:", Index);
