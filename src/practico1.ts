//INGRESO DEL PRECIO DEL PRODUCTO
let precioProducto: number = Number(prompt("ingrese Precio"));
//PORCENJE A DESCONTAR
let porcentajeDescuento: number = 0.1;
//DESCUENTO DEL PRODUCTO
let descuento: number = precioProducto*porcentajeDescuento;
//VALOR DEL PRODUCTO CON DESCUENTO AGREGADO
let precioFinal: number = precioProducto-descuento;


console.log(precioFinal);





