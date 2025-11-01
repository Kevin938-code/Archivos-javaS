/*Elaborar un programa que lea tres números y determine si su promedio es mayor a 10. 
Entrada:n1,n2,n3(leer)
Proceso:leer n1,n2,n3
promedio=(n1+n2+n3)/3
si promedio>10
Salida:escribir promedio es mayor
sino si promedio=10
escribir promedio es igual
sino 
escribir promedio es menor 
*/
function promMayor() {
let n1=0,n2=0,n3=0,promedio=0
n1=parseInt(prompt("Ingrese el primer numero"))
n2=parseInt(prompt("Ingrese el segundo numero"))
n3=parseInt(prompt("Ingrese el tercer numero"))
promedio=(n1+n2+n3)/3
if (promedio>10) {
    console.log(promedio,"Es mayor")
} else { if (promedio=10) {
    console.log("Son iguales")
} else {
    console.log(promedio,"Es menor")
    }
  }
}
promMayor()