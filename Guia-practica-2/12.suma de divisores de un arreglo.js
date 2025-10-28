/* sumar los divisores de un arreglo
e: leer(numeros),leer(divisores),calcular(suma),leer(i)
p:para i=0 hasta i<numeros con paso i++
numero=numeros[i]
si numero%n==0
divisores(j)
suma+=divisores    
s:escribir divisores
*/
function sumardivisores(){
    let numeros=[6,12],divisores=[],i=0,j=1,suma=0
    for (i = 0;i < numeros.length; i++){
        for(j = 1; j <= numeros[i]; j++){
          if (numeros[i] % j === 0){
         divisores.push(j)
         suma+=j
          }
        }
        alert(`divisores de ${numeros[i]}: ${divisores}`)
        alert(`Suma de divisores de ${numeros[i]}: ${suma}`)
        suma=0
    }
}
debugger
sumardivisores()