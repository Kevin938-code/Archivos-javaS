/* Dada una lista de números, calcular el promedio de los pares y de los impares.
E:leer(numeros),leer(i),leer(npar),leer(nimpar),calcular(promedioimpar),calcular(promediopar),leer(cpar),leer(cimpar)
P:leer numeros
Para i = 0 hasta i < numeros con paso i ++ hacer
    Si numeros[i] MOD 2 = 0 entonces
        npar += numeros[i]
        cpar = cpar + 1
    SINO
        nimpar += numer[i]
        cimpar = cimpar + 1
    FinSi
FinPara
promediopar = npar / cpar
promedioimpar = nimpar / cimpar
S:escribir promedio
*/
function arregloParimpar () {
    let num = [2,5,8,9,4,7], i = 0, npar = 0, nimpar = 0, ppar = 0, pimpar = 0, cpar = 0, cimpar = 0
    for (i = 0;i < num.length;i ++) {
        if (num[i] % 2 == 0) {
            npar += num[i]
            cpar = cpar + 1
        } else {
            nimpar += num[i]
            cimpar = cimpar + 1
        }
    }
    ppar = npar / cpar
    pimpar = nimpar / cimpar
    console.log('Promedio de los Pares: '+ppar)
    console.log('Promedio de los Impares: '+pimpar)
}
arregloParimpar ()