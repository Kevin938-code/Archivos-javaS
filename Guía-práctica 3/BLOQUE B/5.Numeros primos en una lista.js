/* Verificar si cada número solo tiene dos divisores.
numeros = [5, 6, 7, 8, 11]
Primos: 5, 7, 11
*/
function numerosPrimosarreglo () {
    let numeros = [11, 12, 5], numero = 0, i = 0, n = 0, c = 0
    for (i = 0; i < numeros.length; i++) {
        numero = numeros[i]
        c = 0
        for (n = 2; n < numero; n++) {
            if (numero % n === 0) {
                c = c + 1 // c++
            }
        }
        if (c == 0) {
            console.log (numero + ' es primo')
        }
    }
}
numerosPrimosarreglo ()