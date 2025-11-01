/* Leer 5 grupos de 3 números, calcular el promedio y mostrar si es mayor a 10.
entrada: g,(leer),promedio(calcular),n1,n2,n3 (leer)
proceso: mientras g<5 
leer n1,n2,n3
promedio=(n1+n2+n3)/3
si promedio>10
salida:escribir promedio 
sino si promedio=10
escribir su promedio es promedio
sino escribir su promedio es menor a 10, siga esforzandoce 
g=g+1
*/
function promGrupo () {
    let n1=0,n2=0,n3=0,g=0,promedio=0
    while (g<5) { 
        n1=parseInt(prompt("Ingrese el primer número"))
        n2=parseInt(prompt("Ingrese el segundo número"))
        n3=parseInt(prompt("Ingrese el tercer número")) 
        promedio=(n1+n2+n3)/3
        if (promedio>10){
            console.log(`Promedio del grupo ${g+1}: ${promedio}`)
        }else  if (promedio<10) { 
            console.log(`Promedio del grupo ${g+1}: es ${promedio}, siga esforzandose`)
        }else {
            console.log(`El promedio del grupo ${g+1} es 10`)
        }
        g=g+1
    }
}
promGrupo ()