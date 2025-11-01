//Desarrollar un programa que lea el precio de un producto y calcule el valor final
//aplicando un descuento del 5% y luego un IVA del 12%.
/*ENT:producto(leer),descuento(asignar),IVA(asignar),valorIVA(calcular),valorproducto(calcular),valordescuento(calcular),valorfinal(calcular)
PRO:leer producto
valordescuento=producto*descuento/100
valorproducto=producto-valordescuento
valorIVA=valorproducto*IVA/100
valorfinal=valorproducto+valorIVA
SAL: escribir valorfinal
*/
function descuentoIVA(){
    let precio=0,descuento=5,IVA=12,valordescuento=0,valorfinal=0,valorIVA=0,valorprecio=0
    producto=parseInt(prompt("ingrese el valor del producto"))
    valordescuento=precio*descuento/100
    valorprecio=precio-valordescuento
    valorIVA=valorprecio*IVA/100
    valorfinal=valorprecio+valorIVA
    console.log("El valor final del producto es: ", valorfinal)
}
descuentoIVA()