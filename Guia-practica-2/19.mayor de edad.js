/*mayores de edad en un arreglo 
e:leer(edades),leer(i),leer(contar)
p:para i hasta i<numeros con paso i++ hacer
si edades>18 entonces
contar=contar+1
s:escribir contar edades mayor
*/
function mayoredad(){
    let edades=[20,19,10,15,],i=0,j=0
    for(i = 0; i < edades.length; i++){
        if (edades[i] > 18){
            j=j+1
        }
    }  
    alert(`de las edades ${edades}: ${j} son mayores`)
}
debugger
mayoredad()