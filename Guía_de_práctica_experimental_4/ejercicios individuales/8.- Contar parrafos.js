/* Un párrafo termina con salto de línea \n.
 Ejemplo entrada:
 Hola mundo
 Esto es un segundo párrafo
 Salida: "Número de párrafos: 2"
*/ 
function contarParrafos () {
    let texto = "hola.\nQue tal." , i = 0, c = 0
    //texto = prompt("Ingrese un numero")
    for (i = 0; i < texto.length; i++) {
        if (texto[i-1] == '\n' || texto[i] =='\n') {
            c = c + 1
        }
    }
    console.log(texto)
    console.log('hay', c, 'parrafos')
}
contarParrafos ()