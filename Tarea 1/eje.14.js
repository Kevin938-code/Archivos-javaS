/*Elaborar un programa que lea el sueldo de un empleado y calcule su aporte al IESS (9.45% del sueldo).
Ent:salario(leer),IESS(asignar),aporte(calcular)
Pro:leer salario
aporte=salario*IESS
Sal:escribir aporte
*/
function IESS(){
    let salario=0,IESS=0.0945,aporte=0
    salario=parseInt(prompt("Ingrese su salario"))
    aporte=salario*IESS
    console.log("el aporte es: ",aporte)
}
IESS()