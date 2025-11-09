/* Dividir cada número entre 10 y contar iteraciones.
numeros = [45, 678, 12345]
45 → 2 dígitos
678 → 3 dígitos
12345 → 5 dígitos
*/
function contarDigitosarreglo () {
    let numeros = [45, 678, 12345], numero = 0, digito = 0, i = 0, n = 0
    for (i = 0; i < numeros.length; i++) {
        numero = numeros[i]
        n = 0
        while (numero > 0) {
            digito = numero % 10
            numero = Math.floor(numero / 10)
            n = n + 1
        }
        console.log('El numero', numeros[i], 'tiene', n, 'digitos' )
    }
}
contarDigitosarreglo ()