/* Extraer los dígitos en orden inverso usando ciclos
numeros = [123, 456, 780]
123 → 321
456 → 654
780 → 87
*/
function invertirNumeroarreglo () {
    let numeros = [123, 456, 780]
    let numero = 0, i = 0, digito = 0, invertir = 0
    for (i = 0; i < numeros.length; i++) {
        numero = numeros[i]
        invertir = 0
        while (numero > 0) {
           digito = numero % 10 
           invertir = invertir * 10 + digito
           numero = Math.floor(numero / 10)
        }
        console.log('El inverso de', numeros[i], 'es', invertir)
    }
}
invertirNumeroarreglo ()