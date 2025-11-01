/* Leer un arreglo con 4 notas y verificar si la segunda es mayor o igual a 7.
Entrada:notas(leer),n1,n2,n3,n4
Proceso:leer n1,n2,n3,n4
notas=n1,n2,n3,n4
si n2 >7 
Salida:escribir n2 es mayor a 7
sino si n2=7
escribir es igual a 7
sino
escribir n2 es menor que 7
*/
function Segundanota () {
    let notas=[]
    let n1=0,n2=0,n3=0,n4=0 
    n1=parseInt(prompt("Ingrese la primer nota"))
    n2=parseInt(prompt("Ingrese la segunda nota"))
    n3=parseInt(prompt("Ingrese la tercer nota"))
    n4=parseInt(prompt("Ingrese la cuarta nota"))
    notas.push(n1)
    notas.push(n2)
    notas.push(n3)
    notas.push(n4)
    if (notas[1]>7){
        console.log("la segunda nota es mayor que 7")
    } else if (notas[1]=7){
        console.log("La segunda nota es 7")
    } else { 
        console.log("La segunda nota es menor que 7")
    }
}
 Segundanota ()