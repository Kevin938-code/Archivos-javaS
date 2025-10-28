/* Dada una lista de calificaciones, calcular el promedio solo de aquellas que sean mayores o iguales a 70.
E:leer(calificaciones),calcular(promediomayor),leer(i),leer(calificacion),leer(c)
P:leer calificaciones 
Para i = 0 hasta i < calificaciones con paso i ++ hacer
Si calificaciones[i] ≥ 70 entonces
calificacion += calificaciones[i]
c = c + 1
FinSi
FinPara
promediomayor = calificacion / c
S:escribir promedio
*/
function proarreglomayor () {
    let calif = [65,80,90,50,75], i = 0, prom = 0, calificacion = 0, c = 0
    for (i = 0;i < calif.length;i ++) {
        if (calif[i]  >= 70) {
            calificacion += calif[i] 
            c = c + 1
        }
    }
    prom = calificacion / c
    console.log (`Promedio calificaciones ≥ 70: ${prom}`)
}
proarreglomayor ()