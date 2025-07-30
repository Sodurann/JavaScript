// 7- Haz un script que escriba una pirámide inversa de los números del 1 al número que indique el usuario (no mayor de 50)  de la siguiente forma : (suponiendo que indica 30).
// 303030303030303030303030303030303030303030303030303030303030
// 2929292929292929292929292929292929292929292929292929292929
// 28282828282828282828282828282828282828282828282828282828
// …..
// 333
// 22
// 1
let numeroIngresado = parseInt(prompt("Ingrese un numero menor que 50:"));

if (numeroIngresado <= 50) {
    for (let i = numeroIngresado; i >= numeroIngresado; i--) {
    console.log (String(numeroIngresado).repeat(numeroIngresado));
    numeroIngresado--
}
} else {
    numeroIngresado = parseInt(prompt("Ingrese un numero menor que 50:"));
}


