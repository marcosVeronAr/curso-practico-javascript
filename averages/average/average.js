


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
