/*Una empresa se dedica a la venta de impresoras, cada impresora tiene el precio de $70.00.
Crea una función que pida 2 parámetros, la cantidad de impresoras a vender y la forma de pago. En base a la forma de pago se va aplicar los siguientes descuentos:
Forma de pago Descuento Efectivo 10% Tarjeta de Crédito 5%
Vale 15% */

let parametro1 = Number(prompt('Ingrese la cantidad de impresoras que vendio'));

let parametro2 = Number(prompt('Ingrese la froma de pago: \n1. Efectivo \n2. Tarjeta de Crédito \n3.Vale'));

if(parametro2 == 1){
    parametro2 = "Efectivo"
    precio = parametro1 * 70     
    total = precio - (precio * 0.10)
}else if(parametro2 == 2){
    parametro2 = "Tarjeta de Crédito"
    precio = parametro1 * 70     
    total = precio - (precio * 0.05)
}else if(parametro2 == 3 ){
    parametro2 = "Vale"
    precio = parametro1 * 70     
    total = precio - (precio * 0.15)
}else{
 alert("Ingrese un metodo de pago eligiendo del 1 al 3")
}

alert('Cantidad de impresoras: '+ parametro1 +'\nPrecio sin descuento: $'+ precio + '\nForma de pago: '+ parametro2 +' \nDescuento Aplicado: 10% \nTotal a Pagar: $'+ total);