/* Ingresar n números y contar cuántos son negativos.
E: leer(n),leer(numeros),leer(i)
P: escribir n
leer n
para i = 0 hasta i < n con paso i++ hacer
escribir numeros
leer numeros
si numeros < 0 entonces
escribir positivo
sino escribir negativo
FinSi
FinPara
S:escribir numeros
*/
function contnegativos(){
    let numeros = 0, n = 0, i = 0, c = 0
    n=parseFloat(prompt("Ingrese la cantidad de números"))
    for (i = 0;i < n;i ++) {
        numeros=parseInt(prompt("Ingrese el número"))
        if (numeros < 0) {
            c=c+1
        }
    }
    console.log(`Hay ${c} números negativos`)
}
debugger
contnegativos()