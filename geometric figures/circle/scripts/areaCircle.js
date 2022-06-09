function circleArea(diametro){
    radio = diametro/2
    area = Math.PI * (radio * radio)
    return area
}

// Creamos la función para HTML 

function calcularAreaCirculo(){
    const INPUT = document.getElementById("INPUT_CIRCULO")
    const VALUE = INPUT.value
    const AREA = circleArea(VALUE)

    let resultArea = document.getElementById("resultArea")
    
    return resultArea.innerText = "El area de tu circulo es: " + AREA
}