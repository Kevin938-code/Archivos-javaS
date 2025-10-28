/*Invertir números en un arreglo 
e:leer(numeros),leer(i),leer(invertir),leer(numero),leer(numeroinv)
p:para i hasta i<numeros con paso i++ hacer
numero=numeros
para i= numero-1 hasta i>=0 con paso i-- hacer
invertir+=numero
numeroinv=invertir
s:escribir invertir
*/
function Invertirnumero (){
    let numeros=[123,450],i=0,numeroinvertidos=[],j=0,numero,invertir=""
    alert(`numeros: ${numeros}`)
    for (i = 0; i < numeros.length; i++){
        numero=numeros[i].toString()
    for(j = numero.length - 1; j >= 0; j--){
        invertir+=numero[j]
    }
    numeroinvertidos.push(parseInt(invertir))
   alert(`numeros invertidos son: ${invertir}`)
   invertir=""
}
}
debugger
Invertirnumero()