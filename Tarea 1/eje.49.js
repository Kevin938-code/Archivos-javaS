/* Leer un arreglo de n sueldos y mostrar cuántos son menores al salario básico (450).
entrada:n,i,s(leer),sueldos(leer),listasueldos(leer)
proceso:leer n
mientras i<n
leer sueldos
listasueldos=sueldos
si sueldo<450
s=s+1
salida:escribir s
sino escribir sueldo 
i=i+1
*/
function Sueldosbajos () {
let n=2,i=0,s=0,sueldo=500
let listsueldos=[]
n=parseInt(prompt("Ingrese la cantidad de sueldos"))
while (i<n){
    sueldo=parseInt(prompt("Ingrese un sueldo"))
    listsueldos.push(sueldo)
    if (sueldo<450){
        s=s+1
        console.log(`Hay ${s} menores al básico.`)
    }else{
        console.log("usted gana más que el básico.")
    }
    i=i+1
}
}
Sueldosbajos ()