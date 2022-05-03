let numero1: number = Number(prompt("primer dato"));
let numero2: number = Number(prompt("segundo dato"));
let suma = 0;

if (numero1 < numero2) {
  for (let indice1: number = numero1; indice1 <= numero2; indice1++) {
    suma = suma + indice1;
  }

  console.log("El resultado de la suma Normal es:" + suma);
} else {
  for (let indice2: number = numero2; indice2 <= numero1; indice2++) {
    suma = suma + indice2;
  }

  console.log("El resultado de la suma Invertida es:" + suma);
}
