/* Leer n nombres y mostrar “Bienvenido” únicamente a los que no estén vacíos.
Entrada: n(leer),nombres(leer)
Proceso: c=1
mientras c <= n 
leer nombre
si nombre != ""
Salida: escribir "bienvenido", nombre
finsi 
c=c+1 
*/
function bienvenidoNombre () {
    let n=0,c=1,nombre=""
    n=parseInt(prompt("Ingrese la cantidad de nombres a ingresar"))
    while (c<=n) {
    nombre=prompt("Ingrese un nombre")
    if (nombre!=""){
        console.log("Bienvenido", nombre)
    }
    c=c+1    
}
console.log("Gracias por ingresar nombres")
}
bienvenidoNombre ()