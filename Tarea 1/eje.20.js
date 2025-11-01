/*Crear un programa que lea un arreglo con 5 nombres y los concatene en una sola
cadena de texto.
Entrada: nombres(asignar),n1,n2,n3,n4,n5(leer),cadenadetexto(leer)
Proceso:leer n1,n2,n3,n4,n5
nombres=n1,n2,n3,n4,n5
cadenadetexto=nombres
Salida:escribir cadenadetexto
*/
function cadenaNombres() {
let n1="",n2="",n3="",n4="",n5="",cadenadetexto=""
let nombres=[""]

n1=prompt("Imgrese un nombre")
n2=prompt("Imgrese un nombre")
n3=prompt("Imgrese un nombre")
n4=prompt("Imgrese un nombre")
n5=prompt("Imgrese un nombre")
nombres.push(n1)
nombres.push(n2)
nombres.push(n3)
nombres.push(n4)
nombres.push(n5)
cadenadetexto=nombres.join(" ")
console.log(cadenadetexto)
}
cadenaNombres()