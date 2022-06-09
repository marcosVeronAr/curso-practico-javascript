function getDiscounts(precio,descuento){
    precioDescuento = precio * ( 100 - descuento) /100
    return `El precio original es: ${precio}
    Su descuento es de: ${descuento}
    Total: ${precioDescuento}`
}

//Función en HTML 

function calcularDescuento(){
    let inputPrecio = document.getElementById("inputPrecio")
    let Precio = inputPrecio.value 

    let inputDescuento = document.getElementById("inputDescuento")
    let Descuento = inputDescuento.value

    return getDiscounts(Precio,Descuento)
}