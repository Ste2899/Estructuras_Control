/*Dado el siguiente array [“manzana”,”banana”,”fresa”]
1.	Agrega 3 frutas más al arreglo 
2.	Elimina el valor banana del arreglo*/

alert("Dado el siguiente array [manzana,banana,fresa], se eliminara banana y se van Ingresar tres frutas")
let i = 1
array = ['manzana','banana','fresa']

//Elimina el valor banana del arreglo
array.splice(1,1)

//Agrega 3 frutas más al arreglo
let agregar1 = prompt ("Ingresar una fruta")
let agregar2 = prompt ("Ingresar una fruta")
let agregar3 = prompt ("Ingresar una fruta")

//nuevo arreglo
nuevo = [agregar1,agregar2,agregar3]

//union de los arreglos
array = array.concat(nuevo)

alert("Array [ " + array + " ]")