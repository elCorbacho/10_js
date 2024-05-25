//Antes de explicar cómo sumar los elementos de un arreglo, recordemos cómo sumar los números del 1 al 10.
//Previamente, aprendimos a sumar elementos con el ciclo for:
//! PRUEBA DE NOTAS
//? PRUEBA DE NOTAS
//TODO PRUEBA DE NOTAS

suma = 0
for (contador = 1; contador <= 10; contador = contador + 1) {
  suma += contador
}
console.log(suma)
console.log("-----------------------------")

//Podemos aplicar la misma lógica para sumar los elementos de un arreglo. Primero, recorremos el arreglo como hemos practicado en ejercicios anteriores:
datos = [1, 2, 3, 4, 5]
for (i = 0; i < datos.length; i = i + 1) {
  console.log(datos[i])
}
console.log("-----------------------------")

//Luego en lugar de mostrarlos simplemente tenemos que sumar los elementos del arreglo:

datos = [1, 2, 3, 4, 5]
suma = 0
for (i = 0; i < datos.length; i = i + 1) {
  suma += datos[i]
}
console.log(suma)
console.log("-----------------------------")

//todo Crea una función llamada sumarDatos que reciba un arreglo y retorne la suma de los elementos del arreglo recibido.
function sumarDatos (arreglo) {
  suma = 0
  for (i=0; i < arreglo.length; i++) {
    suma += arreglo[i]
  }
  return suma
}
console.log(sumarDatos([1, 2, 3, 4, 5]))// 15

console.log("-----------------------------") 

// //TODO Por ejemplo el promedio de 1, 2, 3, 4 y 5 es la suma de 1, 2, 3, 4 y 5 dividido entre 5, es decir 15/5 = 3.
function promediarDatos (arreglo) {
  suma = 0
  for (i=0; i < arreglo.length; i++) {
    suma += arreglo[i]
  }
  return suma / arreglo.length
}
console.log(promediarDatos([1, 2, 3, 4, 5]))

console.log("-----------------------------")
//todo Crea una función llamada contarPares que reciba un arreglo y retorne la cantidad de números pares que contiene el arreglo recibido.
//todo contarPares([1, 2, 3, 4, 5]) // 2
//todo contarPares([10, 20, 30, 40, 50, 60, 70]) // 4
function contarPares (arreglo) {
  pares = 0
  for (i=0; i<arreglo.length; i++){
      if (arreglo[i] % 2==0) {
          pares ++
      }
  }
  return pares
}
console.log(contarPares([1, 2, 3, 4, 5])) // 2

console.log("-----------------------------")
console.log("-----------------------------")

function contarPares (arreglo) {
  pares = 0
  i = 0
  while (i<arreglo.length) {
      if (arreglo[i] % 2==0) {
          pares ++
      }
      i++
  }
}
console.log(contarPares([1, 2, 3, 4, 5])) // 2

console.log("-----------------------------")

//todo Crea una función llamada contarPares que reciba un arreglo y retorne la cantidad de números pares que contiene el arreglo recibido.
//todo contarPares([1, 2, 3, 4, 5]) // 2
//todo contarPares([10, 20, 30, 40, 50, 60, 70]) // 4
function contarPares (arreglo) {
  impares = 0
  for (i=0; i<arreglo.length; i++){
      if (arreglo[i] % 2 !==0) {
        impares ++
      }
  }
  return impares
}
console.log(contarPares([1, 2, 3, 4, 5])) // 2

console.log("-----------------------------")
console.log("-----------------------------")

function contarImpares (arreglo) {
  impares = 0
  i = 0
  while (i<arreglo.length) {
    if (arreglo[i] % 2 !==0) {
      impares ++
    }
  i++
  }
  return impares
}
console.log(contarImpares([1, 2, 3, 4, 5])) // 2


//todo Dado un arreglo de números, crea una función llamada sumarPares que reciba un arreglo y retorne la suma de los números pares que contiene el arreglo recibido.
function sumarPares (arreglo) {
  suma = 0
  i = 0
  while (i <arreglo.length) {
      if (arreglo[i] % 2 == 0) {
          suma = suma + arreglo[i]
      }
      i++
  }
  return suma
}
console.log(sumarPares([1, 2, 3, 4, 5])) // 6

console.log("-----------------------------")

//imilar a cuando sumamos los números en un arreglo, podemos concatenar las palabras de un arreglo. El algoritmo para resolver el problema es casi idéntico pero en lugar de sumar los números, concatenamos las palabras.
palabras = ""
palabras = palabras + " " + "Hola"
palabras = palabras + " " + "Mundo" 
console.log(palabras) // Hola Mundo

console.log("-----------------------------")  

//TODO  Crea una función llamada juntarPalabras que reciba un arreglo de palabras y retorne un string con todas las palabras concatenadas con un espacio entre cada palabra. Al final del string no debe haber un espacio.

function juntarPalabras (arreglo) {
  i=0
  palabras = ""
  while (i<arreglo.length) {
      palabras += " "+ arreglo[i]
      i++
  }
  return palabras
}
console.log(juntarPalabras(["Hola", "Mundo"])) // Hola Mundo

console.log("-----------------------------")  
function juntarPalabras (arreglo) {
  palabras = ""
  for (i=0; i<arreglo.length; i++) {
      palabras += " "+ arreglo[i]
  }
  return palabras
}

console.log(juntarPalabras(["Hola", "Mundo"])) 



console.log("-----------------------------")
console.log("-----------------------------")  
console.log("-----------------------------")
console.log("-----------------------------")  


//todo Crea una función llamada mensajeOculto que reciba un arreglo y retorne un texto con el mensaje escondido en el arreglo utilizando solo la primera letra de cada elemento del arreglo.
function mensajeOculto1 (arreglo){
  palabra = ""
  i=0
  while (i<arreglo.length) {
      secreto = arreglo[i].substring(0,1)
      palabra += secreto
      i++
  }
  return palabra
}
console.log(mensajeOculto1(["ABCD", "EDFGH"])) // o a



console.log("-----------------------------")  
console.log("-----------------------------")  

//todo Crea una función llamada mensajeOculto que reciba un arreglo y retorne un texto con el mensaje escondido en el arreglo utilizando solo la primera letra de cada elemento del arreglo.

function mensajeOculto (arreglo) {
  palabra =""
  for (i=0; i < arreglo.length; i++) {
    if (i % 2 == 0) {
        secreto = arreglo[i].substring(0,1)
        palabra += " " + secreto
    }
  }
  return palabra
}

console.log(mensajeOculto(["Tronco", "Perro", "Oso", "Gato", "Perro", "Loro", "Onda"]))


