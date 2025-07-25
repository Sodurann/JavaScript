// 🧪 Ejercicio 1: Contador de múltiplos
// ✅ Tipo: for
// 🎯 Objetivo: Usar bucle con condición
// 🧠 Habilidades: iteración, condición dentro del bucle
// Consigna:
// Mostrar por consola los números del 1 al 50 que sean múltiplos de 3. Al final, mostrar cuántos múltiplos de 3 hubo.

let numeroMaximo = 50
let cantidadMultiplos = 0;
 
for (let i = 1; i <= numeroMaximo; i++) {
    if (i % 3 == 0) {
        console.log(i,"es multiplo de 3 ");
        cantidadMultiplos++;
    }
    
 }
 console.log("Hay",cantidadMultiplos, "multiplos de 3");