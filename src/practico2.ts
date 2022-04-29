//Programa para seleccionar los puestos de la Carrera
let posicionCarrera: number = Number(prompt("ingrese posicion"));
if (posicionCarrera === 1) {
  console.log("entregar medalla de oro");
} else {
  if (posicionCarrera === 2) {
    console.log("entregar medalla de plata");
  } else {
    if (posicionCarrera === 3) {
      console.log("entregar medallas de bronce");
    } else {
      console.log("certificado de participacion");
    }
  }
}
//Me salio genial el programa
