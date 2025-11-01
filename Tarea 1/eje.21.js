/*Escribir un programa que lea el nombre de un estudiante y muestre “Bienvenido”
únicamente si no está vacío. 
Entrada:nombre(leer)
Proceso:leer nombre
si nombre!="" //!= significa diferente de
Salida:escribir "bienvenido",Nombre
sino
escribir "no se ingreso un nombre"
finsi
*/
function bienvenidoEstudiante() {
let nombre=""
nombre=prompt("Ingrese un nombre")
if (nombre!=""){
    console.log("Bienvenido:",nombre)
}else {
console.log("No se ha ingresado ningún nombre")
    }
}
bienvenidoEstudiante()