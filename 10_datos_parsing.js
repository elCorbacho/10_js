//TODO Crea una función llamada sumarDatos que reciba un arreglo y muestre en consola la suma de los elementos del arreglo recibido. Si hay algún elemento que no sea un número, debes transformarlo antes de sumarlo.

function sumarDatos1(arreglo) {
    let suma = 0;
    for (let i = 0; i < arreglo.length; i++) {
        // Convertir el elemento a número y sumarlo
        suma += Number(arreglo[i]);
    }
    console.log(suma);
}
/* Fin */
sumarDatos1([4,"6",8,"2",3])
sumarDatos1([1,2,"3","4",5,"6",7,8])
sumarDatos1([10,"11","12",13])

//TODO Ejercicio Crea una función llamada promediarDatos que reciba un arreglo y muestre en consola el promedio de los elementos del arreglo recibido. Dentro del arreglo pueden haber números y cadenas de texto que representen números.

function promediarDatos (arreglo) {
    suma = 0
    for (i=0; i < arreglo.length; i++) {
    suma += Number(arreglo[i])
  }
  return console.log(suma/arreglo.length)
}
promediarDatos([10,"2","1","3",9])
promediarDatos(["4",5,"6"])
promediarDatos([5,"11",14])


console.log("-----------------------------")


//TODO Crea una función llamada sumarDatos que reciba un string, lo convierta en un arreglo y luego sume los elementos del arreglo. La función debe mostrar en consola la suma de los elementos.

function sumarDatos (string) {   //recibe un string
    arreglo = string.split(",") //lo convierte en un arreglo
    suma = 0                    //inicializa la variable suma
    for (i = 0; i < arreglo.length ; i++ ) { //recorre el arreglo
        suma += Number(arreglo[i])  //suma los elementos del arreglo convertidos a número
    }
    return console.log(suma) //muestra la suma
}
sumarDatos("10,2,1,3,9")   //25
console.log("-----------------------------")
console.log("-----------------------------")

//TODO Crea la función contadorDeNaN que reciba un string como parámetro. La función debe convertir el string recibido en un arreglo y luego, contar cuántos elementos del arreglo son NaN. La función debe mostrar en consola el número de elementos NaN.
function contadorDeNaN (string) {
    arreglo = string.split(",")
    cuenta = 0
    for (i=0; i< arreglo.length; i++) {
        if (isNaN(arreglo[i]) == true) {
            cuenta ++
        }        
    }
    return console.log(cuenta)
}

contadorDeNaN("hola,123,3.14,0,texto")
console.log("-----------------------------")
console.log("-----------------------------")

//TODO Crea una función llamada retornarPrimerNumero que reciba un arreglo y muestre en consola el primer elemento que sea un número. El número puede venir en formato de texto o en formato de número.
function retornarPrimerNumero(arreglo) {
    for (let i = 0; i < arreglo.length; i++) {   // Recorremos cada elemento del arreglo
        if (!isNaN(arreglo[i])) {                // Verificamos si el elemento actual es un número
            console.log(arreglo[i]);            // Imprimimos el primer número encontrado
            return;                             // Salimos de la función ya que hemos encontrado el primer número
        }
    }
}

// Ejemplos de uso
retornarPrimerNumero(["hola", 123, 3.14, 0, "texto"]);  // Resultado: 123
retornarPrimerNumero([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);  // Resultado: 1
retornarPrimerNumero(["7", "mundo", 3, 4]);            // Resultado: 7

console.log("-----------------------------")
console.log("-----------------------------")
console.log("-----------------------------")


//TODO Se tienen datos guardados en un arreglo que tienen el siguiente formato: ["25 años", "30 años", "40 años", "50 años", "60 años", "70 años", "80 años", "90 años", "100 años"] Todos los datos están en el formato de "n años". Se pide crear una función llamada sumarAños que reciba un arreglo de strings y que muestre en consola la suma de todos los años en el arreglo.
function sumarAños (arreglo) {
    suma = 0
    for (i=0; i < arreglo.length;i++) {
        suma += (parseInt(arreglo[i]))
    }
    return console.log(suma)
}

sumarAños(["25 años", "30 años", "40 años", "50 años", "60 años", "70 años", "80 años", "90 años", "100 años"]); 



console.log("-----------------------------")   
/* Escribe tu código aquí */

function calcularCostoTotal(arreglo) {
    suma = 0                                            // Inicializa la variable suma en 0
    for (i = 0; i < arreglo.length; i++) {              // Itera sobre cada elemento del arreglo
        if (parseInt(arreglo[i]) >= 1) {                // Convierte el elemento actual a entero y verifica si es mayor o igual a 1
            suma += (parseInt(arreglo[i]))              // Si la condición se cumple, suma el valor convertido a la variable suma
        }
    }
    return console.log(suma)                            // Imprime el valor total de suma en la consola
}


/* Fin */
calcularCostoTotal(["0.25 kg", "0.75 kg", "1.25 kg", "1.75 kg", "2.25 kg"]);
calcularCostoTotal(["0.5 kg", "0.3 kg", "0.8 kg", "1.6 kg", "2 kg"]);
calcularCostoTotal(["0.1 kg", "0.4 kg", "1.9 kg", "2.3 kg", "3.7 kg"])


console.log("-----------------------------")
//TODO Los expertos del negocio se han dado cuenta que las personas aprovechan que los paquetes de menos de 1 kg son gratis para enviar los paquetes más pesados en partes. Por esta razón, han decidido cambiar la forma de cobrar:

//TODO Por un paquete de menos de 1kg se cobrará $1.00.
//TODO Por uno de 1kg o más (hasta menos de 2 kg) se cobrará $2.00.
//TODO Por uno de 2kg o más (hasta menos de 3kg) se cobrará $3.00.
//TODO Por uno de 3kg o más (hasta menos de 4kg) se cobrará $4.00.
//TODO Y así se debe repetir este patrón sucesivamente.

//TODO Crea una función llamada calcularCostoTotal que reciba un arreglo de pesos en kilogramos y muestre en consola el costo total de todos los paquetes.
function calcularCostoTotal(arreglo) {
    let suma = 0;                                       // Inicializa la variable suma en 0
    
    for (let i = 0; i < arreglo.length; i++) {          // Itera sobre cada elemento del arreglo
        let peso = parseInt(arreglo[i]);                // Convierte el elemento actual a número entero

        // Verifica el rango de peso y asigna el costo correspondiente
        if (peso < 1) {                                 // Si el peso es menor a 1 kg
            suma += 1;                                  // Cobra $1.00
        } else if (peso < 2) {                          // Si el peso es de 1 kg o más pero menor a 2 kg
            suma += 2;                                  // Cobra $2.00
        } else if (peso < 3) {                          // Si el peso es de 2 kg o más pero menor a 3 kg
            suma += 3;                                  // Cobra $3.00
        } else if (peso < 4) {                          // Si el peso es de 3 kg o más pero menor a 4 kg
            suma += 4;                                  // Cobra $4.00
        } else {                                        // Si el peso es de 4 kg o más
            suma += Math.floor(peso) + 1;               // Cobra $4.00 + $1.00 por cada kg adicional
        }
    }
    console.log(suma);                                  // Imprime el valor total de la suma en la consola
    return suma;                                        // Devuelve el valor total de la suma (opcional si se quiere usar el resultado fuera de la función)
}

calcularCostoTotal(["0.25 kg", "0.75 kg", "1.25 kg", "1.75 kg", "2.25 kg"]);
calcularCostoTotal(["0.5 kg", "0.3 kg", "0.8 kg", "1.6 kg", "2 kg"]);
calcularCostoTotal(["0.1 kg", "0.4 kg", "1.9 kg", "2.3 kg", "3.7 kg"])



//todo  Para simplificar la estructura de precios y hacerla más intuitiva para los clientes, los expertos del negocio han decidido que el costo de envío de los paquetes sea exactamente proporcional al peso registrado de cada paquete, incluyendo decimales. Nueva política de precios: El costo de envío será de $1.00 por cada kilogramo del peso del paquete, contando también las fracciones de kilogramo. Esto significa que el costo se calculará utilizando el peso exacto, sin redondear. Instrucciones: Crea una función llamada calcularCostoEnvio que acepte un arreglo de pesos de paquetes en kilogramos, y muestre en consola el costo total de envío de todos los paquetes. Ejemplo:
function calcularCostoEnvio(arreglo) {
    let suma = 0;                                       // Inicializa la variable suma en 0
    
    for (let i = 0; i < arreglo.length; i++) {          // Itera sobre cada elemento del arreglo
        let peso = parseFloat(arreglo[i]);              // Convierte el elemento actual a número decimal
        
        // Verifica el rango de peso y asigna el costo correspondiente
        if (peso < 1) {                                 // Si el peso es menor a 1 kg
            suma += peso;                               // Cobra $1.00
        } else if (peso < 2) {                          // Si el peso es de 1 kg o más pero menor a 2 kg
            suma += peso;                               // Cobra $2.00
        } else if (peso < 3) {                          // Si el peso es de 2 kg o más pero menor a 3 kg
            suma += peso;                               // Cobra $3.00
        } else if (peso < 4) {                          // Si el peso es de 3 kg o más pero menor a 4 kg
            suma += peso;                               // Cobra $4.00
        }
    } 
    console.log(suma);                                  // Imprime el valor total de la suma en la consola
    return suma;                                        // Devuelve el valor total de la suma (opcional si se quiere usar el resultado fuera de la función)
}
calcularCostoEnvio(["0.5 kg", "1.25 kg", "2.75 kg"]); 
calcularCostoEnvio(["0.75 kg", "1.5 kg", "2 kg", "2.25 kg"]); 
calcularCostoEnvio(["0.25 kg", "0.5 kg", "1.75 kg", "3 kg"]); 



//TODO Crea una función llamada contarVerdaderos que reciba un arreglo con diversos datos y cuente cuántos de esos datos son verdaderos truthy.
function contarVerdaderos(arreglo) {
    let suma = 0;  // Inicializa la variable suma en 0
    
    for (let i = 0; i < arreglo.length; i++) {  // Itera sobre cada elemento del arreglo
        if (arreglo[i]) {  // Verifica si el elemento actual es truthy
            suma++;  // Incrementa la suma si el elemento es truthy
        }
    }
    return suma;  // Devuelve el total de elementos que son truthy
}

contarVerdaderos([0, 1, "", "Hola", null, undefined, false, true, {}, [], "0"]); // Devuelve 6
contarVerdaderos([0, "", null, false]); // Devuelve 0
contarVerdaderos([1, "Hola", true, {}, []]); // Devuelve 5

console.log("-----------------------------")
//todo Se tiene un arreglo con los notas de algunos estudiantes. Crea una función llamada agregarPunto que reciba un arreglo de notas y que retorne el arreglo original modificado, agregando 1 punto a cada nota.
function agregarPunto (arreglo) {
    for (i=0;i<arreglo.length; i++) {
        arreglo[i] = arreglo[i] + 1
    }
    return arreglo
}


//todo Se tiene un arreglo con los pesos de varios paquetes, en kilogramos. Crea la función transformarCostos que retorne el arreglo original modificado, en el cual se registren los precios de cada paquete. La función debe recibir el parámetro pesos con arreglo de pesos y el parámetro costoPorKg El precio de cada paquete se calcula multiplicando el peso por el costo por kilogramo.

function transformarCostos (pesos, costoPorKg) {
    for (i=0;i<pesos.length; i++) {
        peso =parseFloat(pesos[i])
        pesos[i] = peso * costoPorKg
     }
    return pesos
}
console.log(transformarCostos(["0.5", "1.25", "2.75"], 3.5)) // [1.75, 4.375, 9.625]