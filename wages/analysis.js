//utilidad para funciones

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

// empieza

const salariosCoL = colombia.map(
    function(personita) {
        return personita.salary
    }
); 

const salariosColSorted = salariosCoL.sort((a,b)=> a-b)


function medianaSalarios(lista) {
    const mitad = parseInt(lista.length / 2)

    if (esPar(lista.length)) {
        const personitaMitad1 = lista[mitad - 1]
        const personitaMitad2 = lista[mitad]

        const promedio = mediaAritmetica([personitaMitad1,personitaMitad2])
        return promedio

    } else {
        const personitaMitad = lista [mitad]
        return personitaMitad
    }

}