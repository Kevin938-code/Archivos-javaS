/* Repetir la suma de cada número veces veces
Entrada:
numeros = [2, 3, 4]
veces = 4
Salida:
2 × 4 = 8
3 × 4 = 12
4 × 4 = 16
*/
function sumaSucesivaarreglo () {
    let numeros = [10, 8, 6], numero = 0, i = 0, suma = 0, n = 0, c = 3
    for (i = 0; i < numeros.length; i++) {
        numero = numeros[i]
      //  c = parseInt(prompt('Ingrese un numero a sumar'))
      suma = 0
        for (n = 0; n < c; n++) {
            suma += numero
        }
        console.log('Sumar', numero, 'un total de', c, 'veces')
        console.log('La suma es', suma)
    }
}
sumaSucesivaarreglo ()