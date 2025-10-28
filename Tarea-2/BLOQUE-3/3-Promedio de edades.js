/*Dadas las edades de un grupo de personas, obtener el promedio de los mayores de edad (≥ 18 años) y de los menores de edad (< 18 años).
Entrada: leer(n),leer(edades),leer(edadmayor),leer(i),calcular(promediomayor),calcular(promediomenor),leer(cmenor),leer(cmayor)
Proceso: escribir n
leer n 
para  i = 0 hasta i < n con paso i++ hacer
escribir edades
leer edades
si edades >= 18 entonces
edadmayor += edades
cmayor = cmayor + 1
sino 
edadmenor += edades
cmenor = cmenor + 1
FinSi
FinPara
promediomayor = edadmayor / cmayor
promediomenor = edadmenor / cmenor 
Salida:escribir edades
*/
function promedioedades () {
    let edadmayor = 0, edadmenor = 0, edades = 0, promenor = 0, promayor = 0, i = 0, cmayor = 0, cmenor = 0, n = 0
    n = parseInt(prompt('Ingrese la cantidad de edades'))
    for (i = 0;i < n;i ++) {
        edades = parseInt(prompt('Ingrese la edad'))
        if (edades >= 18) {
            edadmayor += edades
            cmayor = cmayor + 1
        } else {
            edadmenor += edades
            cmenor = cmenor + 1
        }        
    }
    promayor = edadmayor / cmayor
    promenor = edadmenor / cmenor
    console.log(`Promedio mayores de edad: ${promayor} `)
    console.log(`Promedio menores de edad: ${promenor} `)
}
promedioedades ()