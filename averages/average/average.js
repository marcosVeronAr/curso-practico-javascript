


//mediaAritmetica utiliza la función sumarLista para recibir el array sumado y devolverá su media aritmetica
function mediaAritmetica(array) {
// función para el metodo reduce

    const acumularSuma = (acumulador, numero) => acumulador + numero;
//sumarLista recibe una lista de numeros que irá sumando por cada iteración en un nuevo array

    function sumarLista (array) {
        let suma = array.reduce(acumularSuma)
        return suma
    } 

    let lista = sumarLista(array)
    lista = lista/array.length
    return lista
}
 

function calcularPromedioHTML(lista){
    const resultadoPromedio = document.getElementById('resultadoPromedio')
    
    const inputPromedio = document.getElementById('inputPromedio')
    const valuePromedio = inputPromedio.value 

    let arrayPromedio = Array.from(valuePromedio.split(","), Number);

    const RESULTADOPROMEDIO= calcularMediaAritmetica(arrayPromedio) 

    return resultadoPromedio.innerText = `El promedio entre ${valuePromedio} es: ${RESULTADOPROMEDIO}`
}