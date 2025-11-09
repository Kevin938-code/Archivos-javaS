/* >
 Factorial de un número
Descripción:
Calcular el producto de todos los enteros desde 1 hasta n.
Proceso:
1. Iniciar fact = 1.
2. Multiplicar en cada paso fact = fact × i.
3. Repetir hasta i = n.
Ejemplo paso a paso:
5! = 5 × 4 × 3 × 2 × 1 = 120
Salida:
5! = 120
*/
function numeroFactorial () {
    let numero = 5, i = 0, factorial = 1
    for (i = numero; i > 1; i--) {
        factorial *= i
    }
    console.log('el factorial de', numero, 'es', factorial)
}
numeroFactorial ()