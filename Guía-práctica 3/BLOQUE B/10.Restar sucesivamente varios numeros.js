/* Restar repetidamente hasta que el resultado sea menor que el valor restado.
numeros = [15, 22, 30]
valor_resta = 4
15 → 3
22 → 2
30 → 2
*/
function restarSucesivamentearreglo () {
    let numeros = [18, 23, 35], numero = 0, i = 0, r = 4, c = 0
    for (i = 0; i < numeros.length; i++) {
        numero = numeros[i]
        while (numero >= r) {
            numero -= r
            c = c + 1
        }
        console.log (numeros[i], 'resultado:', numero)
    } 
}
restarSucesivamentearreglo ()