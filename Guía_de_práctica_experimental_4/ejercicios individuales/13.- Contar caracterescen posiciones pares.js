/* Entrada: texto del textarea.
o Recorrer la cadena y contar caracteres en índices pares (0, 2, 4, …).
o Ejemplo:
1. Texto: "Hola"
2. Índices: H(0), o(1), l(2), a(3)
3. Salida: "Caracteres en posiciones pares: 2"
*/
function contarPares () {
    let texto="Hola", i = 0, pares = 0
    // texto=prompt("Ingrese una frase")
    for (i = 0; i < texto.length; i += 2) {
        pares++
    }
    console.log('"caracteres en posiciones pares:', pares+'"')
}
contarPares ()