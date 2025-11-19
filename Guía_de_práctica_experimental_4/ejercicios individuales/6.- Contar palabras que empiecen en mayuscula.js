/* Detectar la primera letra de cada palabra.
 Ejemplo entrada: "Hola mundo Bonito"
 Salida: "Palabras con mayúscula inicial: 2"
*/
function contarMayusculas () {
    let texto = "Hola Mundo Bonito", i = 0, c = 0
    //texto = prompt("Ingrese una frase")
    for (i = 0; i < texto.length; i++) {
        if ((i == 0 || texto[i-1] == " " ) && (texto[i] >= 'A' && texto[i] <= 'Z')) {
            c = c + 1
        }
    }
    console.log('Hay', c, 'palabras que empiezan con mayusculas')
}
contarMayusculas ()