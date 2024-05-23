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


//   Ejercicio
//   Crea una función llamada aMayusculas que reciba dos parámetros, texto1 y texto2. La función debe retornar un nuevo texto que sea la concatenación de texto1 y texto2 en mayúsculas sin espacios adicionales entre ambos textos.

//   Ejemplo:

 function aMayusculas (texto1, texto2) {
    return ((texto1 + texto2).toUpperCase())
}

console.log(aMayusculas("hola","pepo"))
/* Fin */




// ///Ejercicio
// Crea una función llamada aMinusculasPrimero que reciba dos parámetros, texto1 y texto2. La función debe retornar un nuevo texto que sea la concatenación de texto1 y texto2, en donde texto1 esté transformado a minúsculas y texto2 se mantenga sin transformación.
// aMinusculasPrimero("HOLA", "MUNDO") // holaMUNDO/// */

function aMinusculasPrimero (texto1, texto2) {
    return ((texto1.toLowerCase()) + texto2)
}

console.log(aMinusculasPrimero("TROMPETIN", "MojoNero"))


// Ejercicio
// Crea una función llamada transformar que reciba dos parámetros, texto1 y texto2. El primer parámetro debe ser transformado a mayúsculas y el segundo a minúsculas. La función debe retornar un nuevo texto que sea la concatenación de texto1 y texto2 sin espacios adicionales entre ambos textos.
// Ejemplo:
// transformar("hola", "MUNDO") // HOLAmundo
/* Escribe tu código aquí */

function transformar (texto1, texto2) {
    return (texto1.toUpperCase())+(texto2.toLowerCase())
}
/* Fin */
console.log(transformar("pompiron", "CORNETA"))


// Ejercicio
// Crea una función llamada limpiarTexto que reciba dos parámetros, texto y texto2. La función debe retornar un nuevo texto que sea la concatenación de texto y texto2 donde ambos textos estén limpios de espacios innecesarios al inicio y al final.
// Ejemplo:
// limpiarTexto("   hola", "mundo   ") // holamundo

function limpiarTexto (texto, texto2) {
    return ((texto+texto2).trim())
}

console.log(limpiarTexto("    h o la","m u ndo         "))
/* Fin */






// Ejercicio
// Crea una función llamada limpiarYMayusculas que reciba dos parámetros, texto y texto2. La función debe retornar un nuevo texto que sea la concatenación de texto y texto2 donde ambos textos estén en mayúsculas y limpios de espacios innecesarios al inicio y al final.
// Ejemplo:
// limpiarYMayusculas("   hola", "mundo   ") // HOLAMUNDO
/* Escribe tu código aquí */
function limpiarYMayusculas (texto, texto2) {
    return ((texto+texto2).trim().toUpperCase())
}

console.log(limpiarYMayusculas("    mision", "aeroplano         "))
/* Fin */






// Ejercicio
// Crea una función llamada largoTexto que reciba dos parámetros, texto y texto2. La función debe retornar la suma de los largos de texto y texto2.

// Ejemplo:

// largotexto("Hola", "Mundo") // 9
// largotexto("Passport", "1234567890") // 18
/* Escribe tu código aquí */
function largoTexto (texto, texto2) {
    return ((texto+texto2).length)
}
console.log(largoTexto("hola","hola"))



// Ejercicio
// Crea una función llamada primerosCaracteres que reciba un párametro texto y devuelva los primeros 3 caracteres del texto. Para simplificar, asumiremos que el texto siempre tiene al menos 3 caracteres.
// Ejemplo:
// primerosCaracteres("Hola Mundo") // Hol
// primerosCaracteres("JavaScript") // Jav
/* Escribe tu código aquí */
function primerosCaracteres (texto) {
    return texto.substring(0,3)
}
/* Fin */
console.log


// Ejercicio
// Crea una función llamada primerosCaracteresMayusculas que reciba un párametro texto y devuelva los 5 primeros caracteres del texto en mayúsculas. Para simplificar, asumiremos que el texto siempre tiene al menos 5 caracteres.
// Ejemplo
// primerosCaracteresMayusculas("Hola Mundo") // HOL
// primerosCaracteresMayusculas("JavaScript") // JAV
/* Escribe tu código aquí */

function primerosCaracteresMayusculas (texto) {
    return (texto.substring(0,5)).toUpperCase()
}
/* Fin */


// Ejercicio
// Crea una función llamada exceptoLosPrimeros que reciba dos parámetros: texto y cantidad. La función debe retornar el texto sin los primeros caracteres, donde la cantidad de caracteres a omitir es el segundo parámetro.

// Ejemplo:

// exceptoLosPrimeros("Hola Mundo", 5) // Mundo
// exceptoLosPrimeros("Hola Mundo", 2) // la Mundo
/* Escribe tu código aquí */

function exceptoLosPrimeros (texto, cantidad) {
    return texto.substring(cantidad)
}
console.log(exceptoLosPrimeros("hola_como_estas",3))


function obtenerTLD (texto) {
    return texto.substring(texto.length - 3)
}
console.log(obtenerTLD("triangulacion"))


// Ejercicio
// Crea una función llamada obtenerTLD que reciba un parámetro url. La función debe retornar los últimos 4 caracteres de la url.
// TLD (Top Level Domain) es la última parte de una url, por ejemplo en la url "https://www.google.com" el TLD es ".com". En algunos casos el TLD puede tener una cantidad de caracteres diferente a 4, pero para este ejercicio asumiremos que siempre tiene 4 caracteres y que la url siempre tiene al menos 4 caracteres.
/* Escribe tu código aquí */
function obtenerTLD (url) {
    return url.substring(url.length - 4)
}
/* Fin */






/* Escribe tu código aquí */
function espejo (texto){
    longitud = texto.length
    mitad = longitud / 2

    if (texto.substring(0,mitad) == texto.substring(mitad)) {
        return console.log(true)
    } else {
        return console.log(false)
    }
}

espejo("holahola")


function mix (palabra1,palabra2) {
    longitud1 = palabra1.length
    longitud2 = palabra2.length
    mitad1 = longitud1/2
    mitad2 = longitud2/2
    return palabra1.substring(0,mitad1).toLowerCase() + palabra2.substring(mitad2).toLowerCase()
}

console.log(mix("HOLA","TORO"))


function textoLargoCorto (texto) {
    if (texto.length >10) {
        return "Mucho texto"
    } else {
        return "Poco texto"
    }
}


// Ejercicio
// Crea una función llamada primerosCaracteresMayusculas que reciba un párametro texto y devuelva los primeros 3 caracteres del texto en mayúsculas. Si el texto tiene menos de 3 caracteres, debe retornar el mensaje error

// Ejemplo:
// primerosCaracteresMayusculas("Hola Mundo") // HOL
// primerosCaracteresMayusculas("JavaScript") // JAV
// primerosCaracteresMayusculas("JS") // error

function primerosCaracteresMayusculas (texto) {
    if (texto.length >=3) {
        return texto.substring(0,3).toUpperCase()
    } else {
        return "error"
    }
}


function transformacionCondicional (frase) {
    if (frase.substring(0,1) == "a") {
        return frase.toUpperCase()
    } else {
        return frase.toLowerCase()
    }
}

console.log(transformacionCondicional("moniaco"));


console.log("------------------------------------------------------------------")


    // ARREGLOS ARREGLOS  // ARREGLOS ARREGLOS  // ARREGLOS ARREGLOS  // ARREGLOS ARREGLOS  // ARREGLOS ARREGLOS  // ARREGLOS ARREGLOS  // ARREGLOS ARREGLOS  // ARREGLOS ARREGLOS  // ARREGLOS ARREGLOS  // ARREGLOS ARREGLOS

//     Ejercicio
// Crea una función llamada primerElemento que reciba un arreglo y retorne el primer elemento del arreglo.

// Ejemplo:

// primerElemento(["Juan", "Pedro", "Ana", "Luis"]) // Juan
// primerElemento([1, 2, 3, 4, 5]) // 1

function primerElemento (arreglo) {
    return arreglo[0]
}
arreglo = ["Juan", "Pedro", "Ana"];
console.log(primerElemento(arreglo))



function largoArreglo (nombres) {
    if (nombres.length >5) {
        return "muchos"
    } else {
        return "pocos"
    }
}

nombre = ["Juan", "Pedro", "Ana", "Luis"]
console.log(largoArreglo(nombre))





// Debido a que el primer elemento de un arreglo es el elemento en la posición 0, el último elemento de un arreglo es el elemento en la posición length - 1.
// nombres = ["Juan", "Pedro", "Ana", "Luis"]
// console.log(nombres[nombres.length - 1]) // Luis

// nombres = ["Juan", "Pedro", "Ana", "Luis", "Carlos", "Maria"]
// console.log(nombres[nombres.length - 1]) // Maria

// function ultimoYPrimero (arreglo) {
//     a = arreglo[arreglo.length -1]
//     b = arreglo[0]
//     return concateniacion = a + b
// }

// arreglo = ["perro", "gato", "delfin", "tortuga"]
// console.log(ultimoYPrimero(arreglo))



// Crea una función llamada agregarSi que reciba un arreglo y un parámetro llamado nombre. La función debe agregar el nombre al arreglo si el largo del arreglo es menor a 5. La función debe retornar el arreglo.

// Ejemplo:

// agregarSi(["Juan", "Pedro", "Ana", "Luis"], "Maria") // ["Juan", "Pedro", "Ana", "Luis", "Maria"]
// agregarSi(["Juan", "Pedro", "Ana", "Luis", "Carlos", "Maria"], "Jose") // ["Juan", "Pedro", "Ana", "Luis", "Carlos", "Maria"]


function agregarSi (arreglo, nombre) {
    if (arreglo.length < 5) {
        arreglo.push(nombre)
        return arreglo
    } else {
        return arreglo
    }


}
arreglo = ["Juan", "Pedro", "Ana", "Luis"]  
nombre = "maria"
console.log(agregarSi(arreglo,nombre))



// // Ejercicio
// Crea una función llamada limpiarYAgregar que reciba un arreglo y un parámetro llamado nombre. La función debe limpiar el nombre removiendo los espacios vacíos al inicio y al final del nombre y luego agregar el nombre al final del arreglo. La función debe retornar el arreglo.

// Ejemplo:

// limpiarYAgregar(["Juan", "Pedro", "Ana", "Luis"], "  Maria  ") // ["Juan", "Pedro", "Ana", "Luis", "Maria"]
function limpiarYAgregar (arreglo,nombre) {
    arreglo.push(nombre.trim())
    return arreglo
}


// Para modificar un elemento de un arreglo, utilizamos la notación de corchetes [] seguida del índice del elemento que queremos modificar.

// Por ejemplo, si queremos modificar el segundo elemento de un arreglo, utilizamos arreglo[1] y le asignamos un nuevo valor.

// A continuación, se presenta un ejemplo práctico:

// nombres = ["Juan", "Pedro", "Ana", "Luis"]
// nombres[1] = "Maria"
// console.log(nombres) // ["Juan", "Maria", "Ana", "Luis"]
// En este caso, el segundo elemento del arreglo, que originalmente era "Pedro", ha sido reemplazado por "Maria".
function reemplazar (arreglo, numero1, numero2) {
    arreglo[0] = numero1
    arreglo[arreglo.length -1] = numero2
    return arreglo
}




function modificarPorElMayor (arreglo, numero1, numero2) {
    if (numero1 > numero2) {
        arreglo[0] = numero1
    } else if (numero2 > numero1) {
        arreglo[0] = numero2
    }
    return arreglo
}

arreglo = [1,2,3,4,5]
numero1 = 6
numero2 = 7
console.log(modificarPorElMayor(arreglo,numero1,numero2))   



// Contenido
// Para borrar elementos en un arreglo, utilizamos el método splice.

// Este método recibe dos parámetros: el índice del elemento que queremos borrar y la cantidad de elementos que queremos borrar.

// Para hacerlo más sencilo de entender, primero estudiaremos casos en donde solo borraremos un elemento.

// nombres = ["Juan", "Pedro", "Ana", "Luis"]
// nombres.splice(3, 1) 
// console.log(nombres) // ["Juan", "Pedro", "Ana"]
// En este ejemplo, se eliminó un elemento en la posición 3, por lo tanto, el arreglo quedó sin el nombre "Luis".
/* Escribe tu código aquí */

function borrarAlFinal (arreglo) {
    arreglo.splice(arreglo.length -1,1)
    return arreglo

}
/* Fin */

// Crea una función llamada borrarYContarElementos que reciba un arreglo y un número (cantidad). La función debe eliminar la cantidad de elementos especificados desde la posición 0 del arreglo y luego retornar la cantidad de elementos del arreglo final.

// Ejemplo:

// borrarYContarElementos(["Juan", "Pedro", "Ana", "Luis"], 1) // 3
// borrarYContarElementos([73, 24, 56, 23, 12, 5, 97], 4) // 3
// borrarYContarElementos([73, 24, 56, 23, 12, 5, 97], 2) // 5
function borrarYContarElementos (arreglo, numero) {
    arreglo.splice(0,numero)
    return arreglo.length
}




// Crea una función llamada rotarALaIzquierda, la cual debe recibir como parámetro un arreglo.

// La función debe eliminar el primer elemento del arreglo y luego agregar este mismo elemento al final.

// Retorna el arreglo modificado.

// Tip: Utiliza una combinación de los métodos apendidos hasta ahora para lograrlo.

// Ejemplo:
// rotarALaIzquierda([1,2,3,4]) // 2,3,4,1
// rotarALaIzquierda(["Juan", "Pedro", "Ana", "Luis"]) // "Pedro", "Ana", "Luis",
function rotarALaIzquierda (arreglo) {
    nuevoarreglo = arreglo.splice(0,1)
    arreglo.push(nuevoarreglo[0])
    return arreglo

}