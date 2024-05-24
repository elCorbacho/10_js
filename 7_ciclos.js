// Crea una función llamada contarHasta que reciba un número como parámetro y que muestre en consola los números del 1 al número ingresado.

function contarHasta (numero) {
    i=1
    while (i <= numero) {
        console.log(i)
        i = i + 1
        
    }
}

/* Fin */
contarHasta(4)
contarHasta(12)

// Crea una función llamada desdeHasta que reciba 2 parámetros, desde y hasta.

// Muestra en consola todos los números entre medio. Por ejemplo:

// desdeHasta(5, 10)
// 5
// 6
// 7
// 8
// 9
// 10

function desdeHasta (desde,hasta) {
    i = desde
    while (i <= hasta) {
        console.log(i)
        i = i +1
    }
}
desdeHasta(4, 9);

console.log("-----")


// Crea una función llamada contarDeDosEnDos que reciba un número como parámetro. La función debe mostrar todos los números pares entre 1 y el número dado.
// contarDeDosEnDos(10) // 2, 4, 6, 8, 10
// contarDeDosEnDos(20) // 2, 4, 6, 8, 10, 12, 14, 16, 18, 20


function contarDeDosEnDos (numero) {
    i=1
    while (i<=numero) {
        if (i % 2 == 0) {
            console.log(i)
        }
        i = i + 1
    }
}

contarDeDosEnDos(5)

console.log("-----")


// Ejercicio
// Crea una función llamada sumarHasta que reciba un número como parámetro.

// La función debe retornar la suma de los números del 1 al número ingresado.

// Por ejemplo, si el número ingresado es 5, la función debe retornar 15. Si el número ingresado es 10, la función debe retornar 55.
function sumarHasta (numero) {
    contador = 1
    suma = 0
    while (contador <= numero) {
        suma = suma + contador
        contador = contador + 1
    }
    return suma
}

console.log(sumarHasta(5))

console.log("-----")

// Ejercicio
// Crea una función llamada sumarDesdeHasta que reciba dos números como parámetros y retorne la suma de los números desde el primer número hasta el segundo número.

function sumarDesdeHasta (numero1, numero2) {
    contador = numero1
    suma = 0
    while (contador <= numero2) {
        suma = suma + contador
        contador = contador + 1
    }
    return suma
}
console.log(sumarDesdeHasta(1,5))

console.log("-----")   

// Crea una función llamada sumarDeDosEnDos que reciba dos parámetros, desde y hasta. La función debe retornar la suma de los números.

// Ejemplo
// sumarDeDosEnDos(5, 10) // 5 + 7 + 9 = 21
// sumarDeDosEnDos(10, 20) // 10 + 12 + 14 + 16 + 18 + 20 = 90
// sumarDeDosEnDos(3, 7) // 3 + 5 + 7 = 15
function sumarDeDosEnDos (desde, hasta) {
    contador = desde
    suma = 0
    while (contador <= hasta) {
        suma = suma + contador
        contador = contador + 2
    }
    return suma
}
console.log(sumarDeDosEnDos(5,10))

console.log("-----")


// Crea una función llamada productoria que reciba un número como parámetro y retorne la productoria de los números del 1 al número ingresado.

// Por ejemplo, si el número ingresado es 5, la función debe retornar 120. Si el número ingresado es 10, la función debe retornar 3628800.
function productoria (numero) {
    contador = 1
    producto = 1
    while (contador <= numero) {
        producto = producto * contador
        contador = contador + 1
    }
    return producto
}

console.log(productoria(5))

console.log("-----")

// Ejercicio
// Crea una función llamada introduccionAFor que muestre en consola los números del 1 al 15 utilizando la instrucción for.
function introduccionAFor () {
    for (contador = 1; contador <=15; contador += 1) {
        console.log(contador)
    }

}
introduccionAFor()

console.log("-----")


// Crea la función mostrarNumeros que reciba dos parámetro, inicio y fin.
// La función debe mostrar en consola todos los números desde el inicio hasta el fin.
function mostrarNumeros (inicio, fin) {
    for (contador = inicio; contador <= fin; contador += 1) {
        console.log(contador)
    }
}

mostrarNumeros(4,9)

// Ejercicio
// Modificando sólo la línea de instrucción de for, cambia el valor de la variable contador para que muestre en consola los números impares del 1 al 10.
for (contador = 1; contador <= 10; contador = contador + 2) {
    console.log(contador)
}

console.log("-----------------------------------")




console.log("-----------------------------------")  


function sumatoriaPares (numero) {
suma = 0
    for (contador = 1; contador <= numero; contador = contador + 1) {
        if (contador % 2 == 0) {        
            suma = suma + contador
        }
    }
    return suma
}


console.log(sumatoriaPares(5))