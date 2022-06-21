//!Función Media aritmetica

function calcularMediaAritmetica(lista) {  
  const sumaLista = lista.reduce(
    function (valorAcumulado = 0, nuevoElemento) {
      return valorAcumulado + nuevoElemento;
    }
  );

  const promedioLista = sumaLista / lista.length;

  return promedioLista;
}

//!Función Mediana

function calcularMediana(lista) {

  //* Nos ordena la lista de menor a mayor
  const listaOrdenada = lista.sort(function(a, b) {
      return a - b;
  });

  //* Nos devuelve al medio de la lista
  const mitadLista = parseInt(listaOrdenada.length / 2);

  //* Valida si el es par o inpar
  function esPar(numero) {
      if (numero % 2 === 0) {
          return true;
      } else {
          return false;
      }
  }

  let mediana;
      //* En caso de que la lista sea par, calcula la media aritmetica entre las dos posiciones centrales
      if (esPar(listaOrdenada.length)) {
          const elemento1 = listaOrdenada[mitadLista - 1];
          const elemento2 = listaOrdenada[mitadLista];

          const promedioElemento1Y1 = calcularMediaAritmetica([
              elemento1,
              elemento2,
      ]);

  mediana = promedioElemento1Y1;
  } else {
    //* si no es par, devuelve la posición central
  mediana = listaOrdenada[mitadLista];
  }

  return mediana;
}




function calcularMedianaHTML(lista){
  const resultadoP = document.getElementById("resultadoP"); //* Obtenemos el id para otorgar un resultado en HTML

  const input = document.getElementById("inputMediana") //* Obtenemos el id que usaremos como parametro
  const value = input.value //* de ese id, extraemos el valor
  let arrayMediana = Array.from(value.split(","), Number); //* de ese valor, lo cortamos y lo pasamos a Number

  
  const resultado = calcularMediana(arrayMediana) //* Usamos la función que creamos antes y devolvemos la mediana

  
  return resultadoP.innerText = `La mediana entre ${input.value} es: ${resultado}` //* retornamos el resultado
}
  