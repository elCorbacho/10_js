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


// Crea una función llamada izqDerecha que reciba un parámetro llamado arreglo y otro llamado num.

// Si num es menor que 100, el valor se ingresará por la derecha del arreglo, como normalmente se ingresan todos los valores.
// Si el valor es mayor o igual a 100, el valor se ingresará por la izquierda del arreglo.
// La función debe retornar el arreglo modificado.

// Ejemplo:

// izqDerecha([1,2,3,4], 5) // [1,2,3,4,5]
// izqDerecha([1,2,3,4], 100) // [100,1,2,3,4]
// izqDerecha([1,2,3,4], 101) // [101,1,2,3,4]
function izqDerecha (arreglo, num) {
    if (num < 100) {
        arreglo.push(num)
        return arreglo
    } else if (num >= 100) {
        arreglo.unshift(num)
        return arreglo
    }
}