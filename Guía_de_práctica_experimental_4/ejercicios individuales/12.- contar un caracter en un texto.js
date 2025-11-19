/* Entrada: texto del textarea + un carácter a contar.
o Salida: número de veces que aparece.
o Ejemplo:
1. Texto: "Hola mundo"
2. Carácter: "o"
3. Salida: "El carácter 'o' aparece 2 veces."
*/
function contarCaracterestexto () {
    let texto = "hola a todos", i = 0, caracter = "o", c = 0
    // texto=prompt("Ingrese un texto")
    // caracter=prompt("Ingrese un caracter a buscar") 
    for (i = 0; i < texto.length; i++) {
        if (texto[i] == caracter) {
            c++
        }
    }
    console.log(`texto: "${texto}"\nCaracter: "${caracter}"\nEl caracter '${caracter}', aparece ${c} veces `)
}
contarCaracterestexto ()