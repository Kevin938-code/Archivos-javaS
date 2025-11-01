/*Crear un programa que lea un arreglo con 4 notas y calcule el promedio.
Entrada: notas(asignar),n1(leer),n2(leer),n3(leer),n4(leer), promedio(calcular),sumanotas(calcular)
Proceso:leer n1,n2,n3,n4
notas=n1,n2,n3,n4
promedio=(n1+n2+n3+n4)/4
Salida:escribir promedio
*/
function promedioNotas(){
    let n1,n2,n3,n4,promedio,sumanotas=0
    let notas=[]
    n1=parseInt(prompt("Ingrese la primer nota"))
    n2=parseInt(prompt("Ingrese la segunda nota"))
    n3=parseInt(prompt("Ingrese la tercer nota"))
    n4=parseInt(prompt("Ingrese la cuarta nota"))
    notas.push(n1)
    notas.push(n2)
    notas.push(n3)
    notas.push(n4)
    sumanotas=notas[0]+notas[1]+notas[2]+notas[3]
    promedio=sumanotas/4
    console.log("El promedio es: "+ promedio)
}
promedioNotas()
