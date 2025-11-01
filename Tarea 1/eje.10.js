/*Elaborar un programa que lea el precio de un producto y calcule el valor final con un descuento del 10%
Ent:precio(leer)
valorfinal(calcular)
descuento(asignar)
valordescuento(calcular)
Pro:leer precio
valordescuento=precio*descuento/100
valorfinal=precio-valordescuento
Sal:escribir valorfinal
*/
function Descuento(){
let precio=0, descuento=10, valordescuento=0, valorfinal=0
precio=parseInt(prompt("Ingrese el valor del producto"))
valordescuento=precio*descuento/100
valorfinal=precio-valordescuento
console.log("El precio final con el descuento es: ", valorfinal)
}
Descuento()
