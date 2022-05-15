//Leer valores de usuario hasta que introduzca un 0
//El usuario puede introducir valores numericos, tanto positivos
//como negativos.
//Contar la cantidad de valores introducidos que sean mayores a 0
//y el porcentaje de positivos respecto el total.

let contadorPositivos = 0;
let cantidadDeNumeros = 0;
let porcentajePositivos = 0;


while (numero !== 0) {
  let numero: number = Number(prompt("ingrese su nuemero"));
  if (numero > 0) {
    contadorPositivos++;
  }
  cantidadDeNumeros++;
  let numero: number = Number(prompt("ingrese otro numero o 0 para terminar");
}

porcentajePositivos = (contadorPositivos * 100) / cantidadDeNumeros;

console.log(contadorPositivos,"positivos",porcentajePositivos, "% de positivos");


