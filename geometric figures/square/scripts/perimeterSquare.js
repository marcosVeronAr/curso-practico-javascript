//* Esta función recibe el lado de un cuadrado y te devuelve su perimetro

function squarePerimeter(lado){
    perimeter = lado * 4
    return perimeter
}

// Conectando función a HTML

function calcularPerimetroCuadrado(){
    const INPUT = document.getElementById("INPUT_CUADRADO")
    const VALUE = INPUT.value
    const RESULTADO = squarePerimeter(VALUE)

    let resultPerimetro = document.getElementById("resultPerimetro")

    return resultPerimetro.innerText = "El perimetro es: " + RESULTADO
}