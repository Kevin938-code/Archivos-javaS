/* Dadas n calificaciones de estudiantes, calcular el promedio solo de aquellas que sean mayores o iguales a 70.
E:leer(nota),calcular(promedio),leer(i),leer(n),leer(notas)
P:escribir n
leer nota
para i=0 hasta i<n con paso i++ hacer
si nota ≥ 70 entonces
nota+=n
promedio=nota/n
S:escribir promedio
*/
function promedio(){
    let n=0, notas=0, promedio=0, i=0, nota=0,np=0
    n = parseInt(prompt("Ingrese la cantidad de notas"))
    for (i = 0;i < n;i ++){
        nota = parseInt(prompt('Ingrese su calificación'))
        if (nota >= 70){
            notas += nota
            np=np+1
        }
    }
    promedio = notas / np
    console.log(`Promedio de notas ≥ 70: ${promedio}`)
}
debugger
promedio()