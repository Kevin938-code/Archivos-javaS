/* Caracteres numéricos 0–9.
Ejemplo entrada: "Mi clave es 1234"
Salida: "Cantidad de dígitos: 4"
*/
function contarDigitos() {
    let texto = "Mi clave es 1245", i = 0, digitos = 0
    //texto = prompt("Ingrese una frase")
    for (i = 0; i < texto.length; i++) {
        if (texto[i] >= "0" && texto[i] <= "9") {
            digitos = digitos + 1
        }
    }
    console.log ('Hay', digitos, 'digitos')
}
contarDigitos ()