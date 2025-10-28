/*Divisores de números en un arreglo
e:leer(numeros),leer(divisores),leer(i),leer(numero),leer(n)
p:escribir n
leer n
para i=0 hasta i<=n con paso i++ hacer
escribir numero
leer numero
si numeros[i] MOD n=0 entonces
numeros[i]=divisores
s:escribir divisores
*/
function Divisores(){
    let numeros=[6,8,10],divisores=[],i=0,numero=0,j=0
    for (i=0;i<numeros.length;i++){
        numero=numeros[i]
        for (j=1;j<=numero;j++){
        if (numero % j===0){
            divisores.push (j)
        }
    }
        alert(`Divisores de ${numero}: ${divisores}`)
        }  
}
debugger
Divisores()