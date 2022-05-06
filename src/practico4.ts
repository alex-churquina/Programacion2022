let sueldoOperario: number = Number(prompt("Ingrese sueldo"));
let sueldoConAumento: number = 0;

if (sueldoOperario > 0 && sueldoOperario <= 15000) {
  sueldoConAumento = sueldoOperario * 0.2;
  console.log("Su nuevo Aumento es:", sueldoConAumento);
} else if (sueldoOperario >= 15001 && sueldoOperario <= 20000) {
  sueldoConAumento = sueldoOperario * 0.1;
  console.log("Su nuevo Aumento es:", sueldoConAumento);
} else if (sueldoOperario >= 20001 && sueldoOperario <= 25000) {
  sueldoConAumento = sueldoOperario * 0.05;
  console.log("Su nuevo Aumento es:", sueldoConAumento);
} else {
  console.log("Usted no percibira aumento");
}
