/*Dividir oraciones en palabras
e:leer(oracion), leer(palabra)
p:escribir oracion
leer oracion
para i=0 hasta i<oracion.length con paso i++ hacer
si oracion[i]!=" " entonces
palabra=oracion
sino si palabra!=""
escribir palabra
palabra=""
finsi
si palabra!=""
s: escribir palabras
*/
function Dividir(){
let oracion="",palabras="",i=0,n=0
oracion=prompt("Ingrese una oración")
for(i=0;i<oracion.length;i++){
    if(oracion[i]!==" "){
        palabras+=oracion[i]
    }else if(palabras!==""){
        alert(palabras)
        palabras=""
    }
}
if (palabras !==""){
    alert(palabras)
}
}
debugger
Dividir()