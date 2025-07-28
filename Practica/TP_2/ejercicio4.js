// 4- Realiza un script que pida números hasta que se pulse “cancelar”. Si no es un número deberá indicarse con un «alert» y seguir pidiendo números. Al salir con “cancelar” deberá indicarse la suma total de los números introducidos.
let sumaTotal = 0;
do {
    let numero = parseInt(prompt("Escribe un numero:")) ;
    if (isNaN(numero)) {
    alert ("Ingrese un numero");
    numero = parseInt(prompt("Escribe un numero:"));
} else {
  sumaTotal = sumaTotal + numero;
}
} while (confirm("Quiere continuar?"));
console.log("La suma total de los numeros introducidos es:",sumaTotal);
