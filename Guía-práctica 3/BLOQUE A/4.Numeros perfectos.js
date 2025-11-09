/* . Verificar si un número es perfecto
Descripción:
Un número es perfecto si la suma de sus divisores (sin incluir él mismo) es igual al número.
Proceso:
1. Calcular los divisores hasta n - 1.
2. Sumar esos valores.
3. Comparar con n.
Ejemplo:
n = 6
Divisores (sin incluir 6): 1 + 2 + 3 = 6
→ 6 es un número perfecto.
Salida:
6 es un número perfecto.
*/
function numerosPerfectos () {
    let numeros = 6, suma = 0, i = 0
    console.log('Comprobar si', numeros, 'es perfecto')
    for (i = 1; i < numeros; i++) {
        if (numeros % i === 0) {
            suma += i
        }
    }
    if (suma == numeros) {
        console.log(numeros + ' Es perfecto')
    } else {
        console.log(numeros + ' No es perfecto')
    }
}
numerosPerfectos()