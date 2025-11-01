/* Diseñar un programa que lea la base y la altura de un triángulo y calcule su área.
ENT:base(leer),altura(leer),area(calcular)
PRO:leer base,altura
area=base*altura/2
SAL:escribir area
*/
function Area(){
    let b=0,h=0,a=0
    b=parseInt(prompt("Ingrese el valor de la base"))
    h=parseInt(prompt("Ingrese el valor de la altura"))
    a=b*h/2
    console.log("El area del triangulo es: ", a)
}
Area()