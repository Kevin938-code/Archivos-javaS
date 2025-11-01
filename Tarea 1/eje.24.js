/*Leer el precio de un producto y aplicar IVA del 15% únicamente si el precio es mayor a 0. 
Entrada:precio(leer),IVA(asignar),total(calcular)
Proceso:leer precio 
IVA=precio*0.15
total=precio+IVA
Si precio > 0
Salida:escribir total
sino 
escribir precio 
*/
function precioIVA () {
let precio=29,IVA=0.15,total=0,vIV=0
precio=parseInt(prompt("Ingrese el precio del producto"))
if (precio>0) {
     vIV=precio*IVA
     total=precio+vIV
    console.log("El valor del producto aplicando el IVA es :", total)
}else{
    console.log("El precio es :", precio)
}
}
precioIVA()