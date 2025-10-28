/* Dada una lista de números, mostrar la tabla de multiplicar del 1 al 10 para cada uno.
E:leer(tabla),leer(numeros),leer(i),leer(n),calcular(resultado)
P:leer numeros
Para i = 0 hasta i < numeros con paso i ++ hacer
    leer tabla 
    Para n = 1 hasta n <= 10 con paso n ++ hacer
        resultado = tabla * n
    FinPara
    escribir tabla
FnPara
S:escribir resultado
*/
function arreglotablamultiplicar () {
    let numeros = [3,5], tabla = 0, i = 0,n = 0,resultado = 0
    for (i = 0;i < numeros.length;i ++) {
        tabla = numeros[i]
        console.log('tabla del',tabla,':')
        for (n = 1;n < 10;n ++) {
            resultado = tabla * n
            console.log( `${resultado}`)
        }
    }
}
arreglotablamultiplicar ()