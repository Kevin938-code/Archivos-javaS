/*Diseñar un programa que lea las calificaciones de 4 parciales y calcule el promedio
final del estudiante.
ENT:p1(leer),p2(leer),p3(leer),p4(leer),promedio(calcular),sumprom
PRO:leer p1,p2,p3,p4
sumprom=p1+p2+p3+p4
promedio=sumprom/4
SAL:escribir promedio
*/
function Promediop(){
let p1=0,p2=0,p3=0,p4=0,sumprom=0,promedio=0
p1=parseInt(prompt("Ingrese el valor del primer parcial"))
p2=parseInt(prompt("Ingrese el valor del segundo parcial"))
p3=parseInt(prompt("Ingrese el valor del tercer parcial"))
p4=parseInt(prompt("Ingrese el valor del cuarto parcial"))
sumprom=p1+p2+p3+p4
promedio=sumprom/4
console.log("el promedio del estudiante: ", promedio)
}
Promediop()