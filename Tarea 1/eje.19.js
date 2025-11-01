/*Elaborar un programa que lea un arreglo con 3 sueldos y calcule la suma de aportes
al IESS (9.45%).
Entrada:salario(asignar),s1,s2,s3(leer),ap1,ap2,ap3(calcular),IESS(asignar)aporte(calcular) 
Proceso:leer s1,s2,s3
ap1=s1*IESS
ap2=s2*IESS
ap3=s3*IESS
aporte=ap1+ap2+ap3
Salida:escribir aporte
*/
function aportesSueldos() {
let  s1=0,s2=0,s3=0,ap1=0,ap2=0,ap3=0,IESS=0.0945,aporte=0
let salario=[]
s1=parseInt(prompt("Ingrese un salario"))
s2=parseInt(prompt("Ingrese un salario"))
s3=parseInt(prompt("Ingrese un salario"))
salario.push(s1)
salario.push(s2)
salario.push(s3)
ap1=salario[0]*IESS
ap2=salario[1]*IESS
ap3=salario[2]*IESS
    aporte=ap1+ap2+ap3
    console.log("El aporte total es: ",aporte)
}
aportesSueldos()