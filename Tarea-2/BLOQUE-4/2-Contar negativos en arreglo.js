/* Dada una lista de números, contar cuántos son negativos.
E:leer(numeros),leer(i),leer(c)
P:leer numeros
Para i = 0 hasta i < numeros con paso i ++ hacer
Si numeros[i] < 0 entonces
c = c + 1
FinSi
FinPara
S:escribir numeros negativos
*/
function arreglonegativo () {
    let numeros = [3,-5,0,-7,-1,-8], i = 0, c = 0
    for (i = 0;i < numeros.length;i ++) {
        if (numeros[i] < 0) {
            c = c + 1
        }
    }
    console.log(`Cantidad de negativos: ${c}`)
}
arreglonegativo ()