/*numeros primos en arreglo 
e:leer(numero),leer(i),leer(numeros)
p:para i hasta i<numeros con paso i++ hacer
numero=numeros
si numero>1 entonces
numero%i=0
romper bucle
Finsi si i=numero-1
s:escribir numero 
*/
function numerosprimos(){
    let numeros=[7,8,13],i=0,numero=0,j=0
    for(i = 0;i < numeros.length; i++){
        numero = numeros[i]
        if (numero > 1){
            for(j = 2;j < numero; j++){
                if (numero % j == 0){
                    break
                }
                if (j === numero - 1){
                    alert(`${numero} es un número primo`)
                }
            }
        }
    }
}
debugger
numerosprimos()