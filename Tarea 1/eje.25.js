/* Leer el precio de un producto y aplicar un 10% de descuento solo si el precio es mayor o igual a 100.
Entrada:precio(leer),descuento(asignar),preciodescuento(calcular),total(calcular)
Proceso:leer precio
si precio>=100
preciodescuento=precio*descuento
total=precio-preciodescuento
Salida:escribir total
sino 
escribir precio
*/
function descuentoPrecio() {
let precio=0,descuento=0.1,preciodescuento=0,total=0
precio=parseInt(prompt("Ingrese el valor del producto"))
if ( precio>=100 ){
preciodescuento=precio*descuento
total=precio-preciodescuento
console.log("El valor total es: ",total)
} else{
    console.log("El precio del producto: ", precio)
  }
}
descuentoPrecio()