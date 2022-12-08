/*Si la puntuación es mayor o igual a 60 puntos, la salida se "pasa". Si la puntuación es inferior a 60, el resultado es "no calificado".*/

let puntos = Number(prompt("Ingresar los puntos obtenidos"))

if(puntos >= 60)
    resultado = "Pasa"
else if(puntos <= 60)
    resultado = "no calificado"

alert("El resultado: " + resultado)