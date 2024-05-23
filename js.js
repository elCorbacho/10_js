// // juego marco polo con funciones y condicionales

// function marcoPolo (texto) {
//     if (texto == "Marco")
//     return "Polo"
// }

// texto = "Marco"

// console.log(marcoPolo(texto))

// // NUMERO PARA E IMPAR
// function esDivisible (numero, divisor) {
//     if (numero % divisor === 0) {
//         return 1;
//     } else {
//         return 0;
//     }
// }

// esDivisible(10,2)




// function adivinaNumero (numero) {
//     if (numero == 7) {
//         console.log("Adivinaste el número secreto");
//     } else if (numero == 6) {
//         console.log("Casi, pero no es el número secreto");
//     } else {
//         console.log("Estas equivocado, el número secreto no es " + numero);
//     }
// }


/* Escribe tu código aquí */
function adivinaNumero(numero) {
    if (numero == 7) {
        return "Adivinaste el número secreto"
    } else if (numero == 6) {
        return "Casi, pero no es el número secreto"
    } else {
        return "Estas equivocado, el número secreto no es " + numero
    }
}

console.log(adivinaNumero(8))



/* Escribe tu código aquí */
function diaDeHoy(dia) {
    let nombreDia;
    if (dia === 0) {
        nombreDia = 'Domingo';
    } else if (dia === 1) {
        nombreDia = 'Lunes';
    } else if (dia === 2) {
        nombreDia = 'Martes';
    } else if (dia === 3) {
        nombreDia = 'Miércoles';
    } else if (dia === 4) {
        nombreDia = 'Jueves';
    } else if (dia === 5) {
        nombreDia = 'Viernes';
    } else if (dia === 6) {
        nombreDia = 'Sábado';
    } else {
        return "Valor inválido";
    }
    return nombreDia;
}
/* Fin */

/* Escribe tu código aquí % DESCUENTO EN TIENDA*/

function descuentos (cantidad, hora) {
    if (hora == "Mañana") {
        if (cantidad >=10) {
            return "Descuento del 25% en la compra matutina"
        } 
        else if (cantidad >=5 && cantidad <10) {
            return "Descuento del 15% en la compra matutina"
        }
        else if (cantidad <3) {
            return "Sin descuento en la compra matutina"
        } 
    }
    else if (hora == "Noche") {
        if (cantidad >=10) {
            return "Descuento del 15% en la compra nocturna"
        } 
        else if (cantidad >=5 && cantidad <10) {
            return "Descuento del 5% en la compra nocturna"
        }
        else if (cantidad >=3 && cantidad <5) {
            return "Descuento del 3% en la compra nocturna"
        } 
        else if (cantidad <3) {
            return "Sin descuento en la compra nocturna"
        } 
    }
}


// BOOLEANOS

/* Escribe tu código aquí */

usuarioRegistrado = "andres" /* Agrega el tipo de dato correcto */
usuarioPremium = "andres"/* Agrega el tipo de dato correcto */


/* Fin */
if (usuarioRegistrado) {
  console.log("El usuario está registrado")
  if (usuarioPremium) {
    console.log("El usuario es premium")
  }
} else {
  console.log("El usuario no está registrado")
}


/* Escribe tu código aquí */

function llevarLaContrario (expresion) {
    return !expresion
}

console.log(llevarLaContrario(true))

/* Fin */



/*Ejercicio
Se pide crear una función llamada revisarEdad que dependa de un parámetro edad. La función debe retornar "Realizar examen" si la edad es mayor que 40 y menor que 50. En caso contrario, la función debe retornar "No realizar examen"./

/* Escribe tu código aquí */

function revisarEdad (edad) {
    if (edad >40 && edad <50) {
        return "Realizar examen"
    } else {
        return "No realizar examen"
    }
}


/* Fin */






// function fizzBuzz (numero) {
//     if (numero % 3 === 0) {
//         return "Fizz"
//     } else if (numero % 5 === 0) {
//         return "Buzz"
//     } else if (numero % 3 === 0 && numero % 5 ===0) {
//         return "FizzBuzz"
//     } else {
//         return console.log(numero)
//     }
// }


// console.log(fizzBuzz(5))


function fizzBuzz (numero) {
    if (numero % 3 === 0 && numero % 5 ===0) {
        return "FizzBuzz"
    } else if (numero % 3 === 0) {
        return "Fizz"
    } else if (numero % 5 === 0) {
        return "Buzz"
    } else {
        return numero
    }
}

console.log(fizzBuzz(15))

/* Fin */



/* Escribe tu código aquí */

function verificarPuntaje (puntaje) {
    if (puntaje > 90 || puntaje <10) {
        return "Califica para bono"
    } else {
        return "No califica para bono"
    }
}


/* Fin */

codigo = "1234"
/* Escribe tu código aquí */

codigo == "1234"? console.log("Código correcto") : console.log("Código incorrecto")


/* Fin */



/* Escribe tu código aquí */

function atencionAlCliente (numero) {
    switch (numero) {
        case 1:
            return "Contactar a un vendedor"
        case 2:
            return "Esperar a ser atendido"
        case 3:
            return "Contactar a soporte"
        default:
            return "Opción inválida"
    }
}


// /* Fin */

function diaDeHoy (dia) {
    switch (dia) {
        case 0:
            nombreDia = "Domingo"
             break;
        case 1:
            nombreDia = "Lunes"
             break;
        case 2:
            nombreDia ="Martes"
             break;
        case 3:
            nombreDia ="Miércoles"
             break;
        case 4:
            nombreDia ="Jueves"
             break;
        case 5:
            nombreDia ="Viernes"
             break;
        case 6:
            nombreDia ="Sábado"
             break;
        default:
            nombreDia ="Valor inválido"
    }
    return nombreDia;
}

dia = 1
diaDeHoy(dia)

 /* Escribe tu código aquí */

 function mayorQue (a, b) {
    if (a > b) {
        return "El primer número es mayor que el segundo."
    } else if (a < b) {
        return "El segundo número es mayor que el primero."
    } else if (a === b ) {
        return "Ambos números son iguales."
    }
}


/* Fin */


function mayorDeTres (a, b, c) {
    if (a > b && a > c) {
        return "El primer número es el mayor"
    } else if (b > a && b > c ) {
        return "El segundo número es el mayor"
    } else if (c > a && a > b ) {
        return "El tercer número es el mayor"
    } else if ( a == b && b == c){
        return "Los tres números son iguales"
    }
}

console.log("--------------------------------------------")

  /* Fin */
