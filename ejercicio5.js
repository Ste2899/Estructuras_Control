/*Mostrar la suma total de los números dado el siguiente arreglo.
array = [8,7,6,12,25,30]*/

let total = 0

array = [8,7,6,12,25,30]

for (let i of array) total += i;
alert("Total de la suma del Array ["+ array + "] : " + total)