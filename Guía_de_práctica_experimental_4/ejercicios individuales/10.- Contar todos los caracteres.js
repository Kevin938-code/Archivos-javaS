/* Contar absolutamente todo: letras, números, signos, espacios.
 Ejemplo entrada: "Hola 123!"
 Salida: "Total de caracteres: 9"
*/
function contarCaracteres () {
    let texto = "hola, como estas? 123!", i = 0, c = 0
    // texto=prompt("Ingrese un texto")
    for (i = 0; i < texto.length; i++) {
       if (texto[i] != "") {
        c = c + 1
       }
    }
    console.log("Hay", c,"caracteres")
}
contarCaracteres ()