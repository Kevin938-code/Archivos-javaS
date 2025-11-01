/*Leer el radio de un círculo y calcular su área y perímetro únicamente si el radio es mayor a 0.
Entrada:radio(leer),area(calcular),perimetro(calcular)
Proceso:leer radio
si radio > 0 
area= Pi*radio^2
perimetro=2*pi*radio
Salida:escribir area,perimetro
sino 
escribir el radio es menor a cero 
*/
function areaperimetro () {
let radio=0, area=0, perimetro=0
const pi=3.14
radio=parseInt(prompt("Ingrese el valor de radio"))
if (radio>0){
    area=pi*radio^2
    perimetro=2*pi*radio
    console.log(`area:${area},perimetro:${perimetro}`)
} else {
    console.log("El valor del radio es muy bajo")
}
}
areaperimetro()