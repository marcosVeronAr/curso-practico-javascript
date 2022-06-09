function triangleArea(base,altura){
    area = (base * altura)/2
    return area
}

// Conectamos con HTML 

function calcularAreaTriangulo(){
    const ALTURA = document.getElementById("INPUT_ALTURA")
    const VALUE_ALTURA = Number(ALTURA.value)

    const BASE = document.getElementById("INPUT_BASE")
    const VALUE_BASE = Number(BASE.value)

    const AREA = triangleArea(VALUE_BASE,VALUE_ALTURA)

    let resultArea = document.getElementById("resultArea")
    
    return resultArea.innerText = "El area es: " + AREA
}   