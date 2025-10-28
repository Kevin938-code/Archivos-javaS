/* Dado un arreglo con nombres de ciudades, identificar cuál tiene más letras.
E:leer(nombres),leer(nombre),leer(i)
P:escribir nombres
leer nombres
nombre=nombres[0]
para i=1 hasta i < nombres con paso i++ hacer
si nombres[i] > nombre
nombre=nombres[i]
S:escribir nombre
*/
function compararnomArreglo(){
    let nombres = ["Milagro","Quito","Guayaquil","Cuenca"], i = 0, nombre = 0
    // nom1=prompt('ingrese el primer nombre')
    //nom2=prompt('ingrese el segundo nombre')
    nombre = nombres[0]
    for (i = 1;i < nombres.length;i ++){
        
        if (nombres[i].length > nombre.length){
           nombre=nombres[i]
        } 
    }
     console.log(`La ciudad con más letras es "${nombre}"(${nombre.length} letras)`)
}
compararnomArreglo()