/* Dada una lista con edades de personas, obtener el promedio de los mayores de edad (≥ 18) y de los menores de edad (< 18).
E:leer(edades),leer(i),calcular(promediomayor),calcular(promediomenor),leer(cmenor),leer(cmayor),leer(emayor),leer(emenor)
P:leer edades
Para i = 0 hasta i < edades con paso i ++ hacer
Si edades[i] >= 18 entonces 
emayor += edades[i] 
cmayor = cmayor + 1
SINO
emenor += edades[i]
cmenor = cmenor + 1
FinSi
FinPara
promediomayor = emayor / cmayor
promediomenor = emenor / cmenor
S:escribir promedio edades
*/
function arregloedades () {
    let edades = [17,20,35,15,18], i = 0, promayor = 0, promenor = 0, cmayor = 0, cmenor = 0, edmayor = 0, edmenor = 0
    for (i = 0;i < edades.length;i ++) {
        if (edades[i] >= 18) {
            edmayor += edades[i]
            cmayor = cmayor + 1
        } else {
            edmenor += edades[i]
            cmenor = cmenor + 1
        }
    }
    promayor = edmayor / cmayor
    promenor = edmenor / cmenor
    console.log(`Promedio de mayores de edad: ${promayor}`)
    console.log(`Promedio de menores de edad: ${promenor}`)
}
arregloedades ()