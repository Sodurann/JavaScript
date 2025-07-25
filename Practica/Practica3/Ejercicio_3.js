// 📌 3. Menú de cajero automático (con switch)
// Instrucciones:
// Mostrá al usuario un menú de opciones usando prompt() con este formato:
// 1 - Consultar saldo  
// 2 - Retirar dinero  
// 3 - Depositar dinero  
// 4 - Salir
// Convertí la opción ingresada a número usando parseInt().
// Usá una estructura switch para mostrar por consola el mensaje correspondiente a cada opción:
// Si elige 1, mostrar: "Mostrando saldo...".
// Si elige 2, mostrar: "Procediendo al retiro de dinero...".
// Si elige 3, mostrar: "Preparando depósito...".
// Si elige 4, mostrar: "Gracias por usar el cajero. ¡Hasta luego!".
// En cualquier otro caso, mostrar: "Opción inválida. Intente de nuevo."

let menuOpciones = Number (
    prompt( "Cajero Automatico 1 - Consultar saldo  2 - Retirar dinero 3 - Depositar dinero 4 - Salir"));

switch (menuOpciones) {
    case 1:
    console.log("Mostrando saldo...");
        break;
    case 2:
    console.log ("Procediendo al retiro de dinero...");
        break;
    case 3:
    console.log ("Preparando depósito...");
        break;
    case 4:
    console.log ("Gracias por usar el cajero. ¡Hasta luego!");
        break;

    default:
    console.log ("Opción inválida. Intente de nuevo.");
        break;
}