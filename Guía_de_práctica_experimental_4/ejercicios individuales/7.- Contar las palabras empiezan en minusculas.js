/* Igual que el anterior, pero verificando minúscula.
 Ejemplo entrada: "hola Mundo bonito"
 Salida: "Palabras con minúscula inicial: 2
*/
function contarMinusculas () {
    let texto = "hola mundo bonito", i = 0, c = 0
    //texto = prompt("Ingrese una frase")
    for (i = 0; i < texto.length; i++) {
        if ((i == 0 || texto[i-1] == " ") && (texto[i] >= 'a' && texto[i] <= 'z')) {
            c = c + 1
        }
    }
    console.log("Hay", c,"palabras que empiezan con minuscula")
}
contarMinusculas ()