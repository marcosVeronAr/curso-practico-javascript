
function circlePerimeter(diametro){
    perimeter = diametro * Math.PI
    return perimeter
}

// Creamos la función para HTML 

function calcularPerimetroCirculo() {
    const INPUT = document.getElementById("INPUT_CIRCULO")
    const VALUE = INPUT.value 
    const PERIMETRO = circlePerimeter(VALUE)

    let resultPerimetro = document.getElementById("resultPerimetro")

    return resultPerimetro.innerText = "El perimetro es de: " + PERIMETRO
}