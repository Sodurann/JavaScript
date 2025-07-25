// 🧪 Ejercicio 3: Menú interactivo
// ✅ Tipo: do...while
// 🎯 Objetivo: Menú que se repite hasta salir
// 🧠 Habilidades: estructuras de control, interacción con el usuario
// Consigna:
// Crear un menú que se repite hasta que el usuario elija salir. Las opciones pueden ser:
// 1- Consultar Saldo 
// 2- Realizar extraccion 
// 3- Salir
let Menu;
do {
    Menu = parseInt(prompt("Elija una opción:\n1- Consultar Saldo\n2- Realizar extracción\n3- Salir"));

    if (Menu === 1) {
        console.log("💰 Su saldo es de ...");
    } else if (Menu === 2) {
        console.log("💸 Realizando extracción...");
    } else if (Menu === 3) {
        console.log("👋 Saliendo...");
    } else {
        console.log("❌ Número inválido");
    }

} while (Menu !== 3);
