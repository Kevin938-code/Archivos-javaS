/* Multiplicar valores consecutivos hasta n.
numeros = [3, 4, 5]
Ejemplo:
5! = 5 × 4 × 3 × 2 × 1 = 120
Salida: 
 3! = 6
 4! = 24
 5! = 120
*/
function numerosFactoralesarreglo () {
    let numeros = [5, 4, 6], numero = 0, i = 0, n = 0, factorial = 0
    for (i = 0; i < numeros.length; i++) {
        numero = numeros[i]
        factorial = 1
        for (n = numero; n > 1; n--) {
            factorial *= n 
        }
        console.log ('el factorial de', numero,'es', factorial)
    }
}
numerosFactoralesarreglo ()