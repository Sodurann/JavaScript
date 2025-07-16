// Preguntale al usuario si tiene DNI y mostrá si puede ingresar al sistema. 
let edad =  parseInt (prompt("Ingrese su edad"));
let mayorEdad = 18 <= edad;

let tieneDNI = prompt ("Tiene DNI?");

tieneDNI = tieneDNI.toLowerCase();

let puedeEntrar = mayorEdad && tieneDNI;

console.log (puedeEntrar);

