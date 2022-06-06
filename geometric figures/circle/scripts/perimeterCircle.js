
function circlePerimeter(diametro){
    perimeter = diametro * Math.PI
    return "El perimetro es: " + perimeter
}

// Creamos la función para HTML 

function calcularPerimetroCirculo() {
    const INPUT = document.getElementById("INPUT_CIRCULO")
    const VALUE = INPUT.value 
    const PERIMETRO = circlePerimeter(VALUE)

    return PERIMETRO
}