/* Solicitar un número entero, determine y muestre si dicho número es negativo, positivo o cero.*/
let numero = prompt("Digite un numero");

if(numero == 0){
    alert('El numero '+numero+' que ingreso es CERO')
}else if(numero < 0){
    alert('El numero '+numero+' que ingreso es NEGATIVO')
}else{
    alert('El numero '+numero+' que ingreso es POSITIVO')
}