/* contar apariciones de una letra especifica:
Entrada: leer(palabra),letra(leer),n(leer)
Proceso:escribir palabra
leer palabra
escribir ingrese la letra
leer letra
Para i Desde 1 Hasta palabra Hacer
si palabra=letra
n=n+1
Salida: escribir la letra aparece n veces
*/
function letras(){
let palabra="",letra="",n=0,i=0
palabra=prompt("Escribe una palabra")
letra=prompt("Ingrese una letra a buscar")
for (i=0;i<palabra.length;i++){
    if (palabra[i]===letra){
      n=n+1
    }else{
        alert("La letra no aparece")
    }
}
alert(`La letra "${letra}" aparece ${n} veces.`)
}
debugger
letras()