/*Leer un arreglo con 5 nombres y verificar si el último está vacío.
Entrada:nombres(leer),n1,n2,n3,n4,n5
Proceso:leer n1,n2,n3,n4,n5
nombres=n1,n2,n3,n4,n5
si n5 =""
Salida:escribir el ultimo esta vacio
*/
function nombreVacio () {
    let nombres=[""]
    let n1="",n2="",n3="",n4="juan",n5="j" 
    n1=prompt("Ingrese el primer nombre")
    n2=prompt("Ingrese el segundo nombre")
    n3=prompt("Ingrese el tercer nombre")
    n4=prompt("Ingrese el cuarto nombre")
    n5=prompt("Ingrese el ultimo nombre")
    nombres.push(n1)
    nombres.push(n2)
    nombres.push(n3)
    nombres.push(n4)
    nombres.push(n5)
    if (nombres[4]===""){
    console.log("El ultimo esta vacio")
  }
}
nombreVacio ()