/*buscar valores en arreglo
e:leer(numeros),leer(i),leer(valor)
p:escribir valor
leer valor
para i hasta i<numeros con paso i++ hacer
si numero=valor
escribir valor
sino escribir no hay valor
s: escribir valor
*/
function buscarvalor(){
    let numeros=[20,30,60],i=0,valor=0,j=Boolean
    valor=parseInt(prompt(`del arreglo:${numeros} Ingrese el valor a buscar`))
    for(i=0;i<numeros.length;i++){
        if (numeros[i] == valor){
            valor=numeros[i]
        }
    }
     if(j=true){
            alert(`el valor ${valor} si existe en el arreglo`)
        } else{
            alert(`el valor ${valor} no existe en el arreglo`)
        }
}
debugger
buscarvalor()