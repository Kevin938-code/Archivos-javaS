/* comparar longitudes de cadenas
Entrada:leer(palabra1),leer(palabra2),leer(i)
Proceso:escribir ingrese palabra1 y palabra2
leer palabra1 y palabra2
si palabra1.lenght>palabra2.lenght
Salida: escribir palabra con más letras
*/
function compararlongitud (){
    let texto1="",texto2=""
    texto1=prompt("Ingrese el primer texto")
    texto2=prompt("Ingrese el segundo texto")
    if (texto1.length>texto2.length){
        alert(`El texto ${texto1} tiene más letras`)
    }else{
        alert(`El texto ${texto2} tiene más letras`)
    }
}
debugger
compararlongitud()