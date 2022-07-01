// utils 
function mediaAritmetica(array) {
    
    const acumularSuma = (acumulador, numero) => acumulador + numero;

    function sumarLista (array) {
        let suma = array.reduce(acumularSuma)
        return suma
    } 

    let lista = sumarLista(array)
    lista = lista/array.length
    return lista
}

function esPar(numerito) {
    return (numerito % 2 === 0); 
}
 
// analisis salarial 


// esta funcion extrae los salarios de el array
function salariosOrdenados (lista) {
    // recorremos el array extrayendo solo los salarios
    let salarioPais = lista.map(personita => personita.salary)
    // los ordenamos de menor a mayor
    let salariosPaisOrdenado = salarioPais.sort((a,b) => a - b)
    // retornamos el salario de forma ordenada
    return salariosPaisOrdenado
} 

function medianaSalarios(lista) {
    let mitad = parseInt(lista.length / 2)

    if(esPar(lista.length)) {
        let mitadLista1 = lista[mitad - 1]
        let mitadLista2 = lista[mitad]

        let mediana = mediaAritmetica([mitadLista1,mitadLista2])
        return mediana
    } else {
        let personaMitad = lista[mitad]
        return personaMitad
    }
}

// media General 

function mediaGeneral(lista){
    let listaOrdenada = salariosOrdenados(lista)
    let mediaGeneral = medianaSalarios(listaOrdenada)
    return mediaGeneral
}

function medianaTop10(lista){
    let listaOrdenada = salariosOrdenados(lista)
    let spliceStart = (listaOrdenada.length * 90) / 100
    let spliceEnd = listaOrdenada.length - spliceStart; 

    let top10 = listaOrdenada.splice(spliceStart,spliceEnd)
    
    let medianaTop10 = medianaSalarios(top10)
    return medianaTop10
}



// HTML 

function top10HTML(){
    let top10 = document.getElementById('top10HTML')

    let resultadoTop10 = medianaTop10(colombia)

    return top10.innerText = `La media general del top 10 es de: ${resultadoTop10}` 
}

function medianaGeneralHTML(lista) {
    let generalP = document.getElementById('generalP')

    let resultadogeneral = mediaGeneral(colombia)

    return generalP.innerText = `La media general es de: ${resultadogeneral}`
}



function agregarPersonaHTML(name,salario){
    let nuevaPersona = document.getElementById('AgregarPersona')

    let nameUser = document.getElementById('inputNombre')
    let salarioUser = document.getElementById('inputSalario')

    let nameValue = nameUser.value
    let salarioValue = Number(salarioUser.value)

    colombia.push({
        name: `${nameValue}`,
        salary: salarioValue,
      })
      
    return nuevaPersona.innerText = `${nameValue} se agregó correctamente`
} 

function mostrarListaCol(){
    let mostrarLista = document.getElementById('mostrarlista')
    let listaCol = colombia.map(function(personita) {return `Nombre: ${personita.name}
    Salario: ${personita.salary}
    
    `})

    return mostrarLista.innerText = listaCol
} 

