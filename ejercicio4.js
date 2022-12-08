/*Mostrar la estación del año ingresado por el usuario, utilizando la estructura if-else if-else. */

let estacion = Number(prompt("Ingrese el número de la Estación para saber la Fecha que Inicia:\n1. Primavera\n2. Verano\n3. Otoño\n4. Invierno"))

if(estacion == 1){
    alert("Primavera Inicia el 20 de Marzo")
}else if(estacion == 2){
    alert("Verano Inicia el 21 de Junio")
}else if(estacion == 3){
    alert("Otoño Inicia el 22 de Septiembre")
}else if(estacion == 4){
    alert("Invierno Inicia el 21 de Diembre")
}else{
    alert("La opció que ingreso es incorrecta")
}