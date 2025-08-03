// 2-  Crear un script que solicite al usuario mediante un prompt el nombre de ciudades y almacenarlas en un arreglo, cuando el usuario selecciona cancelar se debe mostrar el arreglo generado, luego realizar las siguientes acciones:
let ciudades = [];

do {
  let ciudad = prompt("Ingrese una ciudad  Ej: Nueva York, Estados Unidos");
  ciudades.push(ciudad);
} while (confirm("Quiere continuar?"));
// Mostrar la longitud del arreglo.
console.log("El arreglo de ciudades tiene",ciudades.length, "elementos");
// Mostrar en el documento web los ítems de las posiciones primera, tercera y última.
let primerE = ciudades[0];
console.log ("Elemento en 1era posicion:",primerE);
let tercerE = ciudades[2];
console.log ("Elemento en 3ra posicion:", tercerE);
let ultimoE = ciudades[(ciudades.length)-1];
console.log ("Elemento en ultima posicion:", ultimoE);
// Añade en última posición la ciudad de París.
ciudades.push('Paris, Francia');
console.log ("Luego de la modificacion el ultimo elemento es:", ultimoE = ciudades[(ciudades.length)-1]);
// Escribe por pantalla el elemento que ocupa la segunda posición.
console.log ("Elemento en la segunda posicion", ciudades[1]);
// Sustituye el elemento que ocupa la segunda posición por la ciudad de 'Barcelona'.
ciudades.splice(1,1,"Barcelona,España");
console.log ("Luego de la modificacion el segundo elemento es:", ciudades[1]);
