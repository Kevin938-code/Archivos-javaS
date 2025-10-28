/* Comparar nombres de ciudades
E:leer(nombre1),leer(nombre2)
P:escribir nombre1
leer nombre1
escribir nombre2
leer nombre2
si nombre1>nombre2
escribir nombre1 mayor
sino escribir nombre2 mayor
S:escribir nombre mayor
*/
function compararnombre(){
    let nom1="quito",nom2="guayaquil"
   // nom1=prompt('ingrese el primer nombre')
    //nom2=prompt('ingrese el segundo nombre')
    if (nom1.length>nom2.length){
        console.log(`La palabra ${nom1} tiene mas letras`)
    } else{
        console.log(`La palabra ${nom2} tiene mas letras`)
    }
}
compararnombre()