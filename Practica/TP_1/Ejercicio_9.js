// Escribe un programa que pida una frase y escriba las vocales que aparecen
let frase = prompt("Escriba una frase");

let fraseminuscula = frase.toLowerCase();

let cadenaDeCaracteres = fraseminuscula.split('') ; //split convierte la frase en un arreglo de letras

let vocales = cadenaDeCaracteres.filter(letra => "aeiou".includes(letra)); //Recorre cada letra del arreglo anterior y filtra (deja pasar) solo las que son vocales

let mostrarVocales = vocales.join('');// Junta las letras del arreglo en una sola cadena, sin espacios ni comas.

console.log (mostrarVocales);
