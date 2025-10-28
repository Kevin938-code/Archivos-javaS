/*promedio de un arreglo
e: leer(numeros),calcularr(promedio),calcular(suma),leer(i)
p:para i hasta i<numeros con paso i++ hacer
suma+=numero
promedio=suma/numero
s:escribir promedio
*/
function promedioarreglo(){
    let numeros=[10,20,30,40,50],promedio=0,i=0,suma=0
    for(i = 0; i < numeros.length; i++){
        suma += numeros[i]
    }
    promedio = suma / numeros.length
    alert(`arreglo: ${numeros}`)
    alert(`promedio: ${promedio}`)
}
debugger
promedioarreglo()