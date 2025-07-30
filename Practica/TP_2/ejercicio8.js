// 8- Crea script para generar pirámide siguiente con los números del 1 al número que indique el usuario (no mayor de 50) 
// 1
// 12
// 123
// 1234
// 12345
// 123456
// ……
let numeroIngresado = parseInt(prompt("Ingrese un numero menor que 50:"));


if (numeroIngresado <= 50) {
    for (let i = 1; i <= numeroIngresado; i++) {
        let linea = "";
        for (let j = 1; j <= i; j++) {
            linea += j;
        }
        console.log (linea);
    }
} else {
    numeroIngresado = parseInt(prompt("Ingrese un numero menor que 50:"));
}