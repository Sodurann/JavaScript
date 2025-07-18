// 📚 Clase 27 - JavaScript: Strings y Math

// ✅ Ejercicio 1: Verificando una palabra secreta
// 1. Declarar una variable llamada `clave` con el valor "rollingcode".
// 2. Pedir al usuario que escriba una palabra (usá prompt si es en navegador).
// 3. Mostrar en consola si la palabra que escribió el usuario coincide con la clave (sin importar mayúsculas o minúsculas).

let clave = "rollingcode"
//Necesitamos que el usuario ingrese su contraseña
let claveIngresada = prompt("Ingrese su contraseña").trim();
let exito = claveIngresada == clave;
//Clave correcta?
console.log ("Clave correcta?",exito);

// ✅ Ejercicio 2: Convertir edad y sumar
// 1. Guardar en una variable el string "30".
// 2. Convertirlo a número y sumarle 5.
// 3. Mostrar el resultado por consola.

let numeroOriginal = "30";
let numeroFinal = Number(numeroOriginal) ;
numeroFinal += 5;

console.log (numeroFinal);

// ✅ Ejercicio 3: Cortar un saludo
// 1. Crear una variable `saludo` que diga "Hola, estudiante de JavaScript".
// 2. Extraer solo la palabra "Hola" y guardarla en otra variable.
// 3. Mostrar esa nueva variable por consola.

let saludo = "Hola, estudiante de JavaScript";
let parteSaludo = saludo.slice(0, 4);
console.log (parteSaludo);

// ✅ Ejercicio 4: Número aleatorio personalizado
// 1. Generar un número aleatorio entre 1 y 10 (entero).
// 2. Mostrarlo por consola.

console.log (Math.floor(Math.random()*10 + 1));

// ✅ Ejercicio 5: Limpiar y reemplazar
// 1. Crear una variable `mensaje` con el valor "   Bienvenidos al curso   ".
// 2. Eliminar los espacios en blanco del principio y el final.
// 3. Reemplazar la palabra "curso" por "módulo".
// 4. Mostrar el resultado por consola.

let mensaje = "   Bienvenidos al curso   ";
let mensajesinEspacio = mensaje.trim();
let mensajeFinal = (mensajesinEspacio.replace("curso", "módulo"));

console.log (mensajeFinal);

// ✅ Ejercicio 6: Extra
//Crear una variable que pida un nombre de personaje de pelicula 
//Pedir al usuario que ingrese el nombre de un personaje de pelicula
//Mostrar por consola si el personaje esta en la base de datos

let personaje = "Spiderman";

let personajeUsuario = prompt ("Ingrese el nombre del personaje a buscar");

let encontrado = personajeUsuario.toLowerCase() === personaje.toLowerCase();

console.log ("Se encontro el personaje?", encontrado);