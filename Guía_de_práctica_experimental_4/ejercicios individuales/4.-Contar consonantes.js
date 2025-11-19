/* Letras alfabéticas que no sean vocales.
 Ejemplo entrada: "Hola"
 Salida: "Cantidad de consonantes: 2"
*/
function contarConsonantes () {
    let texto = "Hola como estas", i = 0, consonantes = 0, c = ""
    //texto= prompt("Ingrese una frase")
    for (i = 0; i < texto.length; i++) {
        c = texto[i] //.toLowerCase ()
        if ((c >= 'a' && c <= 'z') && !(c == 'a' || c == 'e' || c== 'i' || c == 'o' || c == 'u')) {
            consonantes = consonantes + 1
        } else if ((c >= 'A' && c <= 'Z') && !(c == 'A' || c == 'E' || c== 'I' || c == 'O' || c == 'U')) {
            consonantes = consonantes + 1
        }
    }
    console.log ('Hay', consonantes, 'consonantes')
}
contarConsonantes ()