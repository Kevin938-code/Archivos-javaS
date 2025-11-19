/* Construir un nuevo texto recorriendo la cadena desde el final hasta el inicio.
 Ejemplo entrada: "Hola"
 Salida: "aloH"
*/
function invertirTexto () {
    let texto = "Hipopotámo?", i = 0, invertir = ""
    //texto = prompt ("Ingrese un texto")
    for (i = texto.length - 1; i >= 0; i--) {
        invertir += texto[i]
    }
    console.log(invertir)
}
invertirTexto ()