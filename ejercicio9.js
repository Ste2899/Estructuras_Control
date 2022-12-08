/* Pedir una calificación de 0 a 10 y mostrar de la siguiente manera: Insuficiente, Suficiente, Bien, Excelente. */

let calificacion = Number(prompt("Ingresar una calificación de 0 a 10"))

if(calificacion >= 0 && calificacion <= 4)
    escala = "Insuficiente"
else if(calificacion >= 5 && calificacion <= 6)
    escala = "Suficiente"
else if(calificacion>= 7 && calificacion <= 8)
    escala = "Bien"
else if(calificacion >= 9 && calificacion <= 10)
    escala = "Excelente"

alert("La calificación es: " + calificacion + "\nLa calificacion Ingresada es " +escala)