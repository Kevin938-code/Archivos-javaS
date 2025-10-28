/* cubo de elementos en un arreglo 
e:leer(numeros),calcular(cubo),leer(i)
p:para i hasta i<numeros con paso i++ hacer
cubo=numeros^3
s:escribir cubo
*/
function cuboelementos(){
    let elementos=[3,2,4],cubo=[],i=0
    for(i = 0;i < elementos.length; i++){
        cubo.push(elementos[i] ** 3)
    }
    alert(`elementos:${elementos} al cubo: ${cubo}`)
}
debugger
cuboelementos()