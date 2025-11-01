// Realizar un programa que lea tres números reales y calcule su promedio aritmético//
/*
Ent: n1(leer),n2(leer),n3(leer),sum(calcular),promedio(calcular)
Pro:leer n1,n2,n3
sum=n1+n2+n3
promedio=sum/3
Sal:escribir promedio
*/
function promedio(){
    let n1=0, n2=0, n3=0, sum=0, promedio=0 ;
    n1=parseInt(prompt("Ingrese el primer valor"))
    n2=parseInt(prompt("Ingrese el segundo valor"))
    n3=parseInt(prompt("Ingrese el tercer valor"))
    sum=n1+n2+n3
    promedio=sum/3
    console.log("El resultado es: ", promedio )
}
promedio()