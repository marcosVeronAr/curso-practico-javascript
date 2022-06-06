function trianglePerimeter(lado1,lado2,lado3){
    perimeter = lado1 + lado2 + lado3
    return "El perimetro es: " + perimeter
}

// creamos la función para HTML 

function calcularPerimetroTriangulo(){
    const BASE = document.getElementById("INPUT_BASE")
    const VALUE_BASE= Number(BASE.value) 

    const LADO_A = document.getElementById("INPUT_LADO_A")
    const VALUE_A = Number(LADO_A.value)

    const LADO_B = document.getElementById("INPUT_LADO_B")
    const VALUE_B = Number(LADO_B.value)

    const PERIMETRO = trianglePerimeter(VALUE_A,VALUE_B,VALUE_BASE)
    
    return PERIMETRO
}