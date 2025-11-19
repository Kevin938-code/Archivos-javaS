/* Entrada: el alumno ya tiene un texto en el textarea.
o Debe pedir una palabra a buscar.
o Salida: mostrar si la palabra existe o no en el texto.
o Ejemplo:
1. Texto: "Me gusta programar en JavaScript"
2. Palabra: "programar"
3. Salida: "La palabra 'programar' sí se encuentra en el texto."
*/
function buscarPalabra () {
    let texto ="hola que tal estas", i = 0, palabra ="", encontrado=false
    // texto = prompt("Ingrese un texto")
    // palabra = prompt("Ingrese una palabra a buscar")
    for (i = 0; i < texto.length; i++) {
        if ((texto[i] !== " " && texto[i]!== " ")&&(texto[i] === palabra)) {
            encontrado=true
        }
    }
    if (encontrado = true) {
        console.log("La palabra existe")
    } else {
        console.log("La palabra no existe")
    }
}
buscarPalabra ()