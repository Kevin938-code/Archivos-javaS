/* tabla de multiplicar de elementos 
e:leer(numeros),leer(i),leer(tabla)
p:Para i Desde 1 Hasta i Hacer
resultado = tabla * i
Escribir tabla, " x ", i, " = ", resultado
s:escribir resultado
*/
function tablamultiplicar (){
    let numeros=[2,3,4],i=0,tabla=[],j=0,numero=0
    for(j = 0; j < numeros.length; j++){
        numero=numeros[j]
         for (i = 1; i <= 12; i++){
        console.log(`${numero} x ${i} = ${numero * i}`)
    }
        console.log(`Tabla de multiplicar del ${numero}`)
    for (i=0;i < tabla.length; i++){
        console.log(tabla[i])
      }
    }
}
debugger
tablamultiplicar()