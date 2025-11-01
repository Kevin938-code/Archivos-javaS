/*Leer 10 pares de números y mostrar cuál es el mayor en cada caso.
entrada: n1,n2(leer)
proceso: mientras n<10
leer n1,n2
si n1<n2 
salida:escribir mayor n2
sino 
escribir mayor n1
*/
function mayorPar() {
let n1=0,n2=0,n=0
while(n<10){
n1=parseInt(prompt("Ingrese el primer numero"))
n2=parseInt(prompt("Ingrese el segundo numero"))
if (n1>n2){
    console.log(`El numero mayor del par ${n+1} es: ${n1}`)
}else if (n2>n1){
    console.log(`El numero mayor del par ${n+1} es: ${n2}`)
} else{
    console.log(`Los números del par ${n+1} son iguales: ${n1} y ${n2}`)
  }
n=n+1
 }
}
mayorPar ()