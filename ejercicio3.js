/*En un municipio se desea cobrar el paso de vehículos por su nuevo Puente, con los siguientes datos Vehículo Particular	$0.75, Autobús	$1.50, Microbús	$1.25, Moto taxi $0.50, Moto $0.30, Otros $3.00 

Mostrar el impuesto a pagar en base al tipo de vehículo que se ingrese por medio de una variable, utilizando la estructura switch.*/

let vehiculo = Number(prompt("ingrese el número en base al vehículo que pase por el puente:\n1. Vehículo Particular\n2. Autobús\n3. Microbús\n4. Moto taxi\n5. Moto\n6. Otros"))

switch(vehiculo){

    case 1: 
       alert('Vehículo Particular el impuesto a pagar es: $0.75')
    break;
    case 2: 
        alert('Autobús el impuesto a pagar es: $1.50')
    break;
    case 3: 
        alert("Microbús	el impuesto a pagar es: $1.25")
    break;
    case 4: 
        alert("Moto taxi el impuesto a pagar es: $0.50")
    break;
    case 5: 
        alert("Moto el impuesto a pagar es: $0.30")
    break;
    case 6: 
        alert("Otros el impuesto a pagar es: $3.00 ")
    break;    
    default: 
        alert("Ingrese un numero del 1 al 6")
}

