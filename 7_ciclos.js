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
