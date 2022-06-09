//* Esta función recibe el lado de un cuadrado y te devuelve su area


function squareArea(lado){
    area = lado * lado
    return area
}

// Conectando función a HTML

function calcularAreaCuadrado(){
    const INPUT = document.getElementById("INPUT_CUADRADO")
    const VALUE = INPUT.value 
    const RESULTADO = squareArea(VALUE)
    let resultArea = document.getElementById("resultArea")

    
    return resultArea.innerText = "El area es: " + RESULTADO
}

