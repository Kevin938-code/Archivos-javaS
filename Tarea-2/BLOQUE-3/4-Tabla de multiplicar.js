/* Dado un solo número, mostrar su tabla de multiplicar del 1 al 10.
E:Leer(i),leer(numero),calcular(resultado)
P:escribir numero
leer numero
para i=1 hasta i <= 10 con paso i++ hacer
resultado=numero*i
escribir numero, "x", i, "=", resultado 
FinPara
S:escribir resultado
*/
function tablamultiplicar () {
    let num = 3, resultado = 0, i = 0
    //num = parseInt(prompt('Ingrese un numero'))
    console.log('Tabla del: ',num)
    for (i = 1;i <= 10;i ++) {
        resultado = num * i 
        console.log(num,'x',i,'=',resultado)
    }
}
tablamultiplicar ()