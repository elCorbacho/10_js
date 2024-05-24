
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


/* Escribe tu código aquí */

function mostrarLasPalabrasQueEmpiezanConA (arreglo) {
    for (i=0; i <= arreglo.length; i++) {
        primeraletra = arreglo[i];
        if (primeraletra = "a") {
            console.log(arreglo[i])
        }
    }
}

mostrarLasPalabrasQueEmpiezanConA(["manzana", "arándanos", "naranja", "pera", "uva"])
mostrarLasPalabrasQueEmpiezanConA(["gato", "perro", "ardilla", "pez", "conejo", "alce"])
mostrarLasPalabrasQueEmpiezanConA(["rojo", "azul", "verde", "amarillo"])



let arreglo = ["Manzana", "Banana", "Cereza"];
let primeraLetra;

for (let i = 0; i < arreglo.length; i++) {
    primeraLetra = arreglo[i].substring(0, 1);
    console.log("La primera letra de " + arreglo[i] + " es " + primeraLetra);
}


nombres = ["Juan", "Pedro", "Ana", "Luis", "Carlos", "Maria"]
console.log(nombres[0][0]) // Maria