/*  Comparar cada número con la suma de sus divisores.
numeros = [6, 10, 28, 30]
Números perfectos: 6, 28
*/
function numerosPerfectosarreglo () {
    let numeros = [6, 496, 28, 30], numero = 0, i = 0, n = 0, suma = 0
    for (i = 0; i < numeros.length; i++) {
        numero = numeros [i]
        suma = 0
        for (n = 0; n < numero; n++) {
            if (numero % n == 0) {
                suma += n
            }
        }
        if (suma == numero) {
            console.log(numero + ' Es perfecto')
        }
    }
}
numerosPerfectosarreglo ()