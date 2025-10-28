/* sumar dos arreglos en uno aparte 
e:leer(numeros1),calcular(sumar),leer(numeros2)
p:Para i Desde 1 Hasta numeros Hacer
sumar=numeros1+numeros2
s:escribir suma
*/
function sumararreglos(){
    let numeros2=[2,3,4],sumar=[],numeros1=[1,5,6],i=0
    for (i = 0;i < numeros1.length;i++){
        sumar.push(numeros1[i] + numeros2[i])
    }
alert(`arreglo 1: "[${numeros1}]", arreglo 2: "[${numeros2}]" suma"[${sumar}]"`)
}
debugger
sumararreglos()