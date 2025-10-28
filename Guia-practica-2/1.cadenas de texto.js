/*Crear un programa que me permita leer el nombre de una persona 
y me cuente cuantas letras tiene
Entrada: leer(nombre), leer(cantidadcaracteres)
Proceso: escribir ingrese un nombre
leer nombre
cantidadcaracteres=longitud(nombre)
Salida:escribir el nombre tiene cantidad caracteres
*/
function nombre(){
let nombre=""
nombre=prompt("Ingrese un nombre")
alert(`El nombre ingresado tiene ${nombre.length}, letras`)
}

debugger
nombre()
