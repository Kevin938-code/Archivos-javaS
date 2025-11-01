/* Desarrollar un programa que lea dos números y muestre cuál de ellos es mayor.
Entrada:n1(leer),n2(leer)
Proceso:leer n1,n2
si n1>n2
Salida:escribir n1 es mayor
sino 
si n1=n2
escribir son iguales
 sino
 escribir n2 es mayor
*/
function numMayor() {
    let n1=0,n2=0
    n1=parseInt(prompt("Ingrese un número"))
    n2=parseInt(prompt("Ingrese otro número"))
    if (n1>n2){
        console.log(n1,"Es mayor")
    } else { if (n1==n2) {
        console.log(`${n1},${n2} Son iguales`)
    } else {
        console.log(n2,"Es mayor")
    }
    }
}
numMayor()