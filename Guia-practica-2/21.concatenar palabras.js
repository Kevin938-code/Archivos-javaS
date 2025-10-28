/* concatenar palabras en un arreglo 
e:leer(palabras),leer(unirpalabras),leer(unir)
p:escribir palabras
leer palabras
unirpalabras=palabras
s:escribir palabras
*/
function concatenararreglo(){
    let palabras=["Me","gusta","programar"], palabrasunidas=""
    alert(`["${palabras},"]`)
    palabrasunidas=palabras.join(" ")
    alert(palabrasunidas)
}
debugger
concatenararreglo()