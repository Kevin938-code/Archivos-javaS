/* Calcular los divisores y sumarlos para cada número.
numeros = [6, 12, 28]
6 → 12
12 → 28
28 → 56
*/
function sumarDivisoresarreglo () {
    let numeros = [3, 10, 15] 
    let i = 0, numero = 0, n = 0, suma = 0
    for (i = 0; i < numeros.length; i++) {
        numero=numeros[i]
        console.log ('suma de los divisores de', numeros[i])
        suma = 0
        for (n = 0; n <= numero; n++) {
            if (numero % n == 0) {
                suma += n
            }
        }
        console.log (suma)
    }
}
sumarDivisoresarreglo ()