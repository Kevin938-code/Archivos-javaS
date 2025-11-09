/* Recorrer cada número y calcular sus divisores
numeros = [6, 10, 15]
6 → 1, 2, 3, 6
10 → 1, 2, 5, 10
15 → 1, 3, 5, 15
*/
function listadivisores () {
    let numeros = [6,10,15], numero = 0, i = 0, n = 0
    for (i = 0; i < numeros.length; i++) {
        numero=numeros[i]
        console.log('divisores de', numeros[i])
        for (n = 0; n <= numero; n++) {
            if (numero % n == 0) {
                console.log(n)
            }
        }
    }
}
listadivisores ()