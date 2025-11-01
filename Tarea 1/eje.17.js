/*Desarrollar un programa que lea un arreglo de 3 precios, calcule el total aplicando
IVA del 12% y un descuento del 20%.
Entrada:IVA(asignar), Precios(leer),total(calcular),descuento(asignar),valorprecio(calcular),
valordescuento(calcular),valorIVA(calcular),valorfinal(calcular)
Proceso:total=precio[0]+precio[1]+precio[2]
valordescuento=total*descuento
valorprecio=total-valordescuento
valorIVA=valorprecio*IVA
valorfinal=valorprecio+valorIVA
Salida:escribir valorfinal
*/
function IVAdescuento (){
let IVA=0.12, t=0, d=0.20, vp=0,vd=0,valorfinal=0,vI=0,p1=0,p2=0,p3=0 
let precios=[]
p1=parseInt(prompt("Ingrese un precio"))
p2=parseInt(prompt("Ingrese un precio"))
p3=parseInt(prompt("Ingrese un precio"))
precios.push=(p1)
precios.push=(p2)
precios.push=(p3)
t=precios[0]+precios[1]+precios[2]
vd=t*d
vp=t-vd
vI=vp*IVA
valorfinal=vp+vI
console.log("El valor total es: ",valorfinal)
}
IVAdescuento()