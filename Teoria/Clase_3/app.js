let texto = "Hola Mundo";

console.log (texto.length);//Muestra la longitud del string, contando los espacios
console.log (texto.toUpperCase()); //Convierte todos los caracteres del string en mayuscula
console.log (texto.toLowerCase());//Convierte todos los caracteres del string en minuscula
console.log (texto.includes("Mundo")); //Busca un caracter o palabra en el string
console.log (texto.indexOf("M")); //Busca la posicion de un caracter en el string (empieza a contar desde 0)
console.log (texto.slice(0,4)); //Extrae parte del texto desde la posicion indicada
console.log (texto.replace("Mundo", "Bruno")); //Extrae parte indicada, por lo que nosotros le indiquemos en el seg string
console.log (texto.trim()); //Extrae los espacios al principio y al final

//OBJETO MATH
 let numA = 10;
 let numB = 27;
 let numC = 100;
 let numD = -5;

console.log (Math.min(-55,100,25,5,7,3,9,20)); //devuelve el numero mas chico

console.log (Math.max(-55,100,25,5,7,3,9,20)); //devuelve el numero mas grande

console.log (Math.floor(7.8)); //redondea hacia abajo (siempre escribir el decimalcon punto)

console.log (Math.ceil(7.5)); //redondea hacia arriba (siempre escribir el decimal con punto)

console.log (Math.round(7.5)); //redondea el numero (siempre escribir el decimal con punto)

console.log (Math.random());//Genera un numero aleatorio entre 0 y 1

console.log (Math.random()*10);//Genera un numero aleatorio entre 0 y 10

console.log (Math.round(Math.random()*100));//Genera un numero aleatorio entre 0 y 100. Y lo redondea