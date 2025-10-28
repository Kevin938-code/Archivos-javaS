/* contar impares en arreglo 
e.leer(numeros),leer(i),leer(contar)
p:para i hasta i<numeros con paso i++ hacer
si numero%2=1 entonces
contar=contar+1
s:escribir contar impares
*/
function contarimpares (){
    let numeros=[1,7,3,4,5],i=0,j=0
    for (i = 0;i < numeros.length ; i++){
        if(numeros[i] % 2 == 1){
            j=j+1
        }
    }
    alert(`hay ${j} impares`)
}
debugger
contarimpares()