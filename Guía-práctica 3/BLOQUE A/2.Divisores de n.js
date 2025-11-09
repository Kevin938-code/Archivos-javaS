/* Mostrar todos los números que dividen exactamente al número ingresado.
Proceso:
1. Recorrer de 1 a n.
2. Si n % i == 0, i es divisor.
Ejemplo:
n = 12
Divisores: 1, 2, 3, 4, 6, 12
Salida:
Divisores: 1, 2, 3, 4, 6, 12
*/
function div () {
    let n = 6, i = 1
    //n=parseInt(prompt('Ingrese un número'))
    for (i = 1; i < n; i ++) {
        if (n % i == 0) {
        console.log (i)            
        }
    }
}
div ()