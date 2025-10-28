/*copiar pares a otro arreglo 
e:leer(numeros),leer(pares),leer(i),
p:escribir numeros
leer numeros
para i <- 1 Hasta numeros Con Paso 1 Hacer
si numeros%2=0 entonces
pares=numeros
s:escribir numeros pares
*/
function copiarPar(){
    let numeros=[1,2,3,4],pares=[],i=0
    for (i = 0; i < numeros.length ; i++){
        if (numeros[i] % 2 === 0){
            pares.push(numeros[i])
        }
    }
   alert(`Arreglo: ["${numeros}"], solo pares: ["${pares}"] `)
}
debugger
copiarPar()