/* Regla: una palabra termina cuando hay un espacio " " o un salto de línea.
 Ejemplo entrada: "Hola mundo desde Quito"
 Salida: "Número de palabras: 4"

*/
function contarPalabras () {
    let texto = "hola a todos desde Quito", palabras = 1, i = 0
    //texto=prompt('Ingrese una frase')
    for (i = 0; i < texto.length - 1; i++) {
        if (texto[i] === " " && texto[i + 1] !== " " && texto[i] !== "") {
            palabras++
        } else if (texto[i] == '') {
            palabras = 0
        }
    }
    console.log('Hay', palabras, "palabras")
}
contarPalabras ()