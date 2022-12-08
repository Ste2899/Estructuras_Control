/*Crea una función que calcule la media del siguiente array, utilizando una estructura repetitiva como for, while, foreach.
array = [20,35,18,7,9,60]*/

let array = [20,35,18,7,9,60]

let total = 0

for (let i of array) total += i / array.length;

alert("La media del Array ["+ array + "] : " + Math.round(total))