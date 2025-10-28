/*Frase con mayor cantidad de caracteres
e:leer(frase1),leer(frase2)
p:escribir frase1
leer frase1
escribir frase2
leer frase2
si frase1>frase2 entonces
escribir frase1
sino escribir frase2
s: escribir frase mayor
*/
function frasemayor() {
    let frase1="",frase2=""
    frase1=prompt("Ingrese la primer frase")
    frase2=prompt("Ingrese la segunda frase")
    if (frase1.length>frase2.length){
        alert(`La frase "${frase1}" tiene más caracteres`)
    }else{
        alert(`La frase "${frase2}" tiene más caracteres`)
    }
}
debugger
frasemayor()