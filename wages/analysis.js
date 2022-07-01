//utils

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

        const mediana = mediaAritmetica([personitaMitad1,personitaMitad2])
        return mediana

    } else {
        const personitaMitad = lista [mitad]
        return personitaMitad
    }

}

// Mediana General

const salariosCol = colombia.map(
    function (personita) {
      return personita.salary;
    }
  );
  
  const medianaGeneralCol = medianaSalarios(salariosColSorted);
  
  // Mediana del top 10%
  const spliceStart = (salariosColSorted.length * 90) / 100;
  const spliceCount = salariosColSorted.length - spliceStart;
  
  const salariosColTop10 = salariosColSorted.splice(
    spliceStart,
    spliceCount,
  );
  
  const medianaTop10Col = medianaSalarios(salariosColTop10);
  
  console.log({
    medianaGeneralCol,
    medianaTop10Col,
  });