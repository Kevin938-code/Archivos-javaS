/*Números perfectos 
e: leer(numeros),leer(i),leer(numero),calcular(suma)
p:para i hasta i<numeros con paso i++ hacer
numero=numeros
si numero%i=o entonces
 suma+=i
finsi si suma > numero
romper bucle
si suma=numero entonces
s:escribir numeros
*/
function numerosperfectos(){
    let numeros=[6,10,28], i=0, numero=0, j=0, sumaDivisores=0
    for(i = 0;i < numeros.length; i++){
        numero=numeros[i]
        for(j = 1;j < numero; j++){
            if(numero % j === 0){
                sumaDivisores += j
            }
            if(sumaDivisores > numero){
                break
            }
        }
        if (sumaDivisores === numero){
            alert(`${numeros[i]} es un número perfecto`)
        }
    }
}
debugger
numerosperfectos()