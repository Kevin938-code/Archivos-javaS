/* Verificar si un número es primo
Descripción:
Un número primo solo tiene dos divisores: 1 y él mismo.
Proceso:
1. Recorrer del 2 hasta n-1.
2. Si n % i == 0, no es primo.
Ejemplo:
n = 11
Divisores: 1 y 11 → primo
n = 12
Divisores: 1, 2, 3, 4, 6, 12 → no primo
Salida:
11 es un número primo.
*/
function numerosPrimos () {
    let numero = 12, i = 0, cont = 0
    for (i = 2; i < numero; i++) {
        if (numero % i === 0) {
            cont++
        }
    }
    if (cont == 0) {
        console.log(numero + ' es primo')
    } else {
        console.log(numero + ' no es primo')
    }
}
numerosPrimos ()