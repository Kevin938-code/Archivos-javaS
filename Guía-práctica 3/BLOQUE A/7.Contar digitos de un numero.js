/*  Contar dígitos de un número
Descripción:
Determinar cuántos dígitos tiene un número entero.
Proceso:
1. Mientras n > 0, dividir entre 10 y aumentar un contador.
Ejemplo:
n = 9876
Iteraciones: 9876 → 987 → 98 → 9 → 0
→ Cantidad de dígitos: 4
Salida:
Cantidad de dígitos: 4
*/
function contarDigitos () {
    let numero = 9876, digitos = 0, i = 0
    while (numero > 0) {
        digitos = numero % 10
        numero = Math.floor(numero / 10)
        i=i+1
    }
    console.log('Cantidad de digitos:', i)
}
contarDigitos ()