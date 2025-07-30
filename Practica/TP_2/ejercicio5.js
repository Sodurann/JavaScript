// 5- Realizar una página con un script que calcule el valor de la letra de un número de DNI (Documento nacional de identidad).
// El algoritmo para calcular la letra del dni es el siguiente :
// El número debe ser entre 0 y 99999999
// Debemos calcular el resto de la división entera entre el número y el número 23.
// Según el resultado, de 0 a 22, le corresponderá una letra de las siguientes:  (T, R, W, A, G, M, Y, F, P, D, X, B, N, J, Z, S, Q, V, H, L, C, K, E)
// Si lo introducido no es un número deberá indicarse con un alert y volver a preguntar.
// Deberá de repetirse el proceso hasta que el usuario pulse «cancelar».
let letraDNI;

do {
  let DNI = parseInt(prompt("Escriba su numero de DNI:"));

  if (isNaN(DNI)) {
    alert("Ingrese un NUMERO de DNI!!!!!!!!!!");
    DNI = parseInt(prompt("Ingrese su numero de DNI:"));
  } else {
    if (DNI => 0 && DNI >= 99999999) {
      let resto = DNI % 23;
      switch (resto) {
        // (T, R, W, A, G, M, Y, F, P, D, X, B, N, J, Z, S, Q, V, H, L, C, K, E)
        case 0:
          letraDNI = "T";
          break;
        case 1:
          letraDNI = "R";
          break;
        case 2:
          letraDNI = "W";
          break;
        case 3:
          letraDNI = "A";
          break;
        case 4:
          letraDNI = "G";
          break;
        case 5:
          letraDNI = "M";
          break;
        case 6:
          letraDNI = "Y";
          break;
        case 7:
          letraDNI = "F";
          break;
        case 8:
          letraDNI = "P";
          break;
        case 9:
          letraDNI = "D";
          break;
        case 10:
          letraDNI = "X";
          break;
        case 11:
          letraDNI = "B";
          break;
        case 12:
          letraDNI = "N";
          break;
        case 13:
          letraDNI = "J";
          break;
        case 14:
          letraDNI = "Z";
          break;
        case 15:
          letraDNI = "S";
          break;
        case 16:
          letraDNI = "Q";
          break;
        case 17:
          letraDNI = "V";
          break;
        case 18:
          letraDNI = "H";
          break;
        case 19:
          letraDNI = "L";
          break;
        case 20:
          letraDNI = "C";
          break;
        case 21:
          letraDNI = "K";
          break;
        case 22:
          letraDNI = "E";
          break;
      }
    } else {
      alert("Ingrese un DNI valido");
      DNI = parseInt(prompt("Ingrese su numero de DNI:"));
    }
  }
 alert ("La letra de su DNI es:", letraDNI);
} while ( confirm("Quiere continuar?"));
