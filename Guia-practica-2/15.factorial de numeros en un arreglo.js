/*Factorial de números en un arreglo 
e:leer(numeros),leer(factorial),leer(i)
p:para i hasta i<numeros con paso i++ hacer
numero=numeros
factorial*=i
s:escribir factorial
*/
function numerofactorial (){
    let numeros=[3,5],numero=0,Factorial=0,i=0,j=0
    for(i = 0;i < numeros.length; i++){
        numero=numeros[i]
        Factorial=1
        for (j = 1; j <= numero; j++){
            Factorial *= j
        }
        alert(`el factorial de ${numero} es: ${Factorial}`)
        Factorial=0
    }
}
debugger
numerofactorial()