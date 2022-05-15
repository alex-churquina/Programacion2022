//let sueldoOperario: number = Number(prompt("Ingrese sueldo"));
//let sueldoConAumento: number = 0;

//if (sueldoOperario > 0 && sueldoOperario <= 15000) {
  //sueldoConAumento = sueldoOperario * 0.2;
  //console.log("Su nuevo Aumento es:", sueldoConAumento);
//} else if (sueldoOperario >= 15001 && sueldoOperario <= 20000) {
 // sueldoConAumento = sueldoOperario * 0.1;
 // console.log("Su nuevo Aumento es:", sueldoConAumento);
//} else if (sueldoOperario >= 20001 && sueldoOperario <= 25000) {
//  sueldoConAumento = sueldoOperario * 0.05;
  //console.log("Su nuevo Aumento es:", sueldoConAumento);
//} else {
  //console.log("Usted no percibira aumento");
//} 


// Otra forma decodigo de programa//

let sueldo: number = Number(prompt("Ingrese su Sueldo"));
let sueldoConAumento: number = 0;
let sueldoAntiguo: number = 0;

if(sueldo > 0 && sueldo < 15000){
  sueldoAntiguo = 1;

}else if (sueldo > 15001 && sueldo < 20000){
  sueldoAntiguo = 2;

}else if (sueldo > 20001 && sueldo <= 25000){
  sueldoAntiguo = 3;
}

switch sueldoAntiguo{
  
  case 1:

  sueldoConAumento = sueldo * 0.2; 
    console.log("Su sueldo Actual es el siguiente:", sueldoConAumento);

  case 2:
  
  sueldoConAumento = sueldo * 0.1; 
    console.log("Su sueldo Actual es el siguiente:", sueldoConAumento);

  case 3:
   
  sueldoConAumento = sueldo * 0.05;
    console.log("Su sueldo Actual es el siguiente:", sueldoConAumento);

  default:
    console.log ("A usted no le corresponde ningun Aumento");

}























