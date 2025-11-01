/*Leer base y altura de un triángulo y calcular el área únicamente si ambos valores son positivos.
Entrada:base(leer),altura(leer),area(calcular)
Proceso:leer base,altura
Si base & altura > 0
area=base*altura/2
Salida:escribir "los valores son positivos el area es "area
sino 
escribir "los valores son negativos"
*/
function areabase(){
let b=0,h=0,a=0
b=parseInt(prompt("Ingrese el valor de la base"))
h=parseInt(prompt("Ingrese el valor de la altura"))
if (b&h>0){
a=b*h/2
console.log("Los valores son positivos, el area es: ", a)
}else{  
console.log("Un valor no es positivo")
}
}
areabase()