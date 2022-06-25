function encontrarModa (lista) {
    // necesitamos un objeto, así que lo declaramos vacio
    let listaCount = {}

    // usamos el metodo map para iterar cada elemento de nuestro array y llevarlo a nuestro objeto
    lista.map(function (elemento) {
        if (listaCount[elemento]) {
          listaCount[elemento] += 1 //en caso de que haya un elemento repetido, se sumara 1
        } else {
          listaCount[elemento] = 1 //eb caso de que no haya un elemento repetido, se añadira un nuevo elemento
        }
      })

      //Ahora volvemos a pasar nuestro objeto a un array, y lo ordenamos con sort
    let listaArray = Object.entries(listaCount).sort(function (elementoA, elementoB){
        return elementoA[1] - elementoB[1]; //ya que nos importa ordenarlo por la cantidad de veces que se repite, lo ordenamos por la posición 2 del objeto
    })

    const moda = listaArray[listaArray.length - 1] //buscamos la posición que más se repite

    return moda // retornamos la moda
}


// Javascript a HTML 

function encontrarModaHTML(lista) {
    const resultadoModa = document.getElementById('resultadoModa'); //* Obtenemos el id para otorgar un resultado en HTML

    const inputModa = document.getElementById('inputModa')
    const valueModa = inputModa.value  //* Obtenemos el id que usaremos como parametro

    let arrayModa = Array.from(valueModa.split(",")) //* de ese valor, lo cortamos y lo convertimos en un Array

    const RESULTADOMODA = encontrarModa(arrayModa)  //* Usamos la función que creamos antes y devolvemos la moda

    return resultadoModa.innerText = `La moda entre ${valueModa} es: ${RESULTADOMODA[0]} y se repitió ${RESULTADOMODA[1]} veces` //* retornamos el resultado

}