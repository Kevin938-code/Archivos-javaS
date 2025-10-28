/* Ingresar n números y calcular el promedio de los números pares y de los números impares por separado.
E:leer(n),leer(numeros),calcular(promediopar),calcular(promedioimpar)
leer(contadorpar),leer(contadorimpar),leer(numeropar),leer(numeroimpar)
P:escribir n
leer n
para i = 0 hasta i < n con paso i++ hacer
escribir numeros
leer numeros
si numeros MOD 2 = 0 entonces
npar += numeros
cpar = cpar + 1
sino
nimpar += numeros
cimpar = cimpar + 1
FinSi
FinPara
promediopar = npar / cpar
promedioimpar = nimpar / cimpar
S:escribir promedio numeros
*/
function promParimpar () {
    let n=0,i=0,numeros=0,prompar=0,promimpar=0,cpar=0,cimpar=0,npar=0,nimpar=0
    n=parseInt(prompt('Ingrese la cantidad de números'))
     console.log(`Cantidad ingresada: ${n}`)
    for (i = 0;i < n;i ++) {
        numeros = parseInt(prompt('Ingrese un número'))
        if (numeros % 2 == 0) {
            npar += numeros 
            cpar = cpar + 1
        } else {
            nimpar += numeros
            cimpar = cimpar + 1
        }
        console.log(`Valores ingresados: ${numeros}`)
    }
    prompar = npar / cpar
    promimpar = nimpar / cimpar
    console.log(`Promedio de pares: ${prompar}`)
    console.log(`Promedio de impares: ${promimpar}`)
}
debugger
promParimpar ()