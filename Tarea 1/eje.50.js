/*Leer un arreglo de n nombres y mostrar cuántos están vacíos.
 entrada:listanombres(leer),n,v,i(leer),nombres(leer)
 proceso:leer n
 mientras i<n
 leer nombres
 listanombres=nombres
 si nombres = ""
 v=v+1
 salida: escribir v estan vacios
 sino escribir gracias nombres
 i=i+1
*/
function nombresVacíos () {
let n=3,i=0,v=0,nombres=""
const listn=[]
n=parseInt(prompt("Ingrese la cantidad de nombres"))
while (i<n){
    nombres=prompt("Ingrese un nombre")
    listn.push(nombres)
    if (nombres==""){
        v=v+1
        console.log(`Hay ${v} vacíos.`)
    }else{
        console.log("Gracias por participar, tenga buen día.")
    }
    i=i+1
  }
}
nombresVacíos ()