function getDiscounts(precio,descuento){
    let precioDescuento = precio * ( 100 - descuento) /100
    return precioDescuento
}


//Función en HTML 

function calcularDescuento(){
    let inputPrecio = document.getElementById("inputPrecio")
    let Precio = inputPrecio.value 

    let inputDescuento = document.getElementById("inputDescuento")
    let Descuento = inputDescuento.value
    
    let inputCupones = document.getElementById("cupones")
    let cupones = inputCupones.value

    let resultadoSinCupon = getDiscounts(Precio,Descuento)
    let resultado = getDiscounts(resultadoSinCupon,cupones)

    const resultP = document.getElementById("resultP")
    return resultP.innerText = "El precio con descuento es: $" +  resultado

}