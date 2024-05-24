console.log("-----")    

//RECORRIENDO ARREGLOS

nombres = ["Juan", "Pedro", "Ana", "Luis"]
for (indice = 0; indice < nombres.length; indice = indice + 1) {
  console.log(nombres[indice])
}
console.log("-----")    

nombres = ["Juan", "Pedro", "Ana", "Luis"]
indice = 0
while (indice < nombres.length) {
  console.log(nombres[indice])
  indice = indice + 1
}

console.log("-----")
// /Crea una función llamada mostrar que reciba un arreglo de números y que muestre en consola los primeros 3 números del arreglo. Considera que todos los casos de prueba tienen al menos 3 elementos./ 

function mostrar (arreglo) {
    for (indice = 0; indice < 3; indice = indice + 1) {
        console.log(arreglo[indice])
    }
}

mostrar([4,6,8,2,3]);

console.log("-----")

datos = [1, 2, 3, 4, 5]
for (i = 0; i < datos.length; i = i + 1) {
  console.log(datos[i])
}

console.log("-----")

//Utilizando for o while, crea una función llamada mostrarDatos que reciba un arreglo y un número n como parámetros y muestre en consola los primeros n elementos del arreglo donde n es el parámetro. 

function mostrarDatos (arreglo, n) {
    i=0
    for (i=0; i < n; i+=1) {
        console.log(arreglo[i])
    }
}


/* Fin */
mostrarDatos([4,6,8,2,3],2)
mostrarDatos([1,2,3,4,5,6],4)

console.log("-----")


//Crea una función llamada mostrarDatos que reciba un arreglo y dos números como parámetros. La función debe mostrar en consola los elementos del arreglo desde la posición indicada por el primer número hasta, pero sin incluir, la posición del segundo número.
function mostrarDatos (arreglo, a, b) {
    for (i=a; i < b; i++  ) {
        console.log(arreglo[i])
    }
}

mostrarDatos([1, 2, 3, 4, 5], 1, 3);
mostrarDatos([1, 2, 3, 4, 5, 6, 7, 8], 4, 7);
mostrarDatos([4, 6, 8, 2, 3], 2, 4);


console.log("-----")
//Crea una función llamada mostrarDatosAlReves que reciba un arreglo y que muestre en consola los datos del arreglo en orden inverso.
//
function mostrarDatosAlReves (arreglo) {
    for (i= arreglo.length -1; i >= 0; i--) {
        console.log(arreglo[i])
    }
}


/* Fin */
mostrarDatosAlReves([4,6,8,2,3])
mostrarDatosAlReves([1,2,3,4,5,6,7,8])
mostrarDatosAlReves([10,11,12,13])



//CONTACTENAR POSICION Y DATO
  /* Escribe tu código aquí */
function mostrarDatoEIndice(datos) {
    for (i = 0; i < datos.length; i = i + 1) { 
      console.log("El valor en la posición " + i + "es " + datos[i]) 
    }
  }
  mostrarDatoEIndice(["Galleta", "Chocolate", "Caramelo"])

console.log("-----")
console.log("-----")
console.log("-----")

  //Crea una función llamada mostrarPares que reciba un arreglo y muestre los números pares del arreglo recibido.

  function mostrarPares (arreglo) {
    for (i=0; i <= arreglo.length; i++) {
        if ( arreglo[i] % 2 == 0) {
            console.log(arreglo[i])

        }
    }

}
mostrarPares([4,6,8,2,3])

console.log("-----")
console.log("-----")
console.log("-----")
/* Escribe tu código aquí */



//Crea una función llamada mostrarLasPalabrasQueEmpiezanConA que reciba un arreglo de palabras y muestre las palabras que empiezan con la letra "a".
function mostrarLasPalabrasQueEmpiezanConA(arreglo) {
    for (let i = 0; i < arreglo.length; i++) {
        let primeraLetra = arreglo[i][0];
        if (primeraLetra === "a") {
            console.log(arreglo[i]);
        }
    }
}
mostrarLasPalabrasQueEmpiezanConA(["manzana", "arándanos", "naranja", "pera", "uva"]);
mostrarLasPalabrasQueEmpiezanConA(["gato", "perro", "ardilla", "pez", "conejo", "alce"]);
mostrarLasPalabrasQueEmpiezanConA(["rojo", "azul", "verde", "amarillo"]);


//Crea una función llamada palabras que reciba un arreglo de palabras y una letra. El programa debe mostrar en consola las palabras que empiecen con la letra recibida.
function palabras (arreglo, letra){
    for (let i = 0; i < arreglo.length; i++) {
        let primeraLetra = arreglo[i][0];
        if (primeraLetra == letra) {
            console.log(arreglo[i]);
        }
    }
}    

palabras(["manzana", "maracuyá", "naranja", "pera", "uva"], "m")
palabras(["gato", "perro", "ardilla", "pez", "conejo", "camello"], "c")
palabras(["rojo", "azul", "verde", "amarillo"], "a")


//Crea una función llamada mostrarCada2 que reciba un arreglo y que muestre una de cada dos palabras.
function mostrarCada2 (arreglo) {
    for (i=0; i<arreglo.length; i+=2) {
        console.log(arreglo[i])
    }
}
mostrarCada2(["manzana", "maracuyá", "naranja", "pera", "uva"])
mostrarCada2(["gato", "perro", "ardilla", "pez", "conejo", "camello", "caballo", "loro"])
mostrarCada2(["rojo", "azul", "verde", "amarillo"])

console.log("-----")

//Crea la función paresQueEmpiezenconA que reciba un arreglo de palabras y muestre las palabras que empiezan con la letra "a" siempre y cuando tengan un índice par en la posición del arreglo.
//Para motivos del ejercicio el cero es considerado un número par.

function paresQueEmpiezenconA (arreglo) {
    for (i=0; i < arreglo.length; i++) {
        primeraLetra = arreglo[i][0];
        if (i % 2==0 && primeraLetra =="a") {
            console.log(arreglo[i])
        }

    }
}
/* Fin */
paresQueEmpiezenconA(["manzana", "maracuyá", "naranja", "pera", "arándanos"])
paresQueEmpiezenconA(["gato", "perro", "ardilla", "alce", "conejo", "camello", "caballo", "loro"])
paresQueEmpiezenconA(["azul", "rojo", "verde", "amarillo"])