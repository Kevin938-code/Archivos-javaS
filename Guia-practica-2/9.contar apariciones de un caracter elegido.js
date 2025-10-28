/* contar apariciones de un caracter elegido:
Entrada: leer(palabra),letra(leer),n(leer),leer(i) 
Proceso:escribir palabra
leer palabra
escribir ingrese la letra
leer letra
para i=0 hasta i<palabra.length con paso i++ hacer
si palabra=letra
n=n+1
Salida: escribir la letra aparece n veces
*/
function escogerletra(){
let palabra="",letra="",n=0,i=0
palabra=prompt("Escribe una frase")
letra=prompt("Ingrese una letra a buscar")
for (i=0;i<palabra.length;i++){
    if (palabra[i]===letra){
      n=n+1
    }
}
alert(`La letra "${letra}" aparece ${n} veces.`)
}
debugger
escogerletra()