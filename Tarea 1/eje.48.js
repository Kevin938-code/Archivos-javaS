/*Leer un arreglo con n notas y mostrar cuántas son ≥70.
entrada:listanotas(leer),notas(leer),i,n(leer)
proceso:leer n
mientras i<n
leer notas
listanotas=notas
si notas>=70
salida: escribir notas
sino escribir todas son menor a 70
i=i+1
*/
function notasAprobadas () {
let listanotas=[]
let n=0,i=0,notas=0,l=0
n=parseInt(prompt("Ingrese la cantidad de notas"))
while (i<n){
    notas=parseInta(prompt("Ingrese una nota"))
    listanotas.push(notas)
    if (notas>=70){
        l=l+1
        console.log(`${l}>=70 `)
    }else {
        console.log(`ninguna nota es mayor o igual a 70`)
    }
    i=i+1
}
}
notasAprobadas ()