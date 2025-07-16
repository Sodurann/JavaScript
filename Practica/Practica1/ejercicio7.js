// Preguntale al usuario si tiene DNI y mostrá si puede ingresar al sistema. 
let edad =  parseInt (prompt("Ingrese su edad"));
let mayorEdad = 18 <= edad;

let tieneDNI = confirm ("Tiene DNI?");

let puedeEntrar = mayorEdad && tieneDNI;

console.log (puedeEntrar);

