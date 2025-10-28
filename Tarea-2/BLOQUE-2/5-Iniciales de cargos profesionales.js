/* Dado un arreglo con nombres de cargos profesionales, obtener las iniciales de cada uno.
E:leer(cargos),leer(cargo),leer(i),leer(n),leer(iniciales)
P:escribir cargos
leer cargos
para i =0 hasta i<cargos con paso i++ hacer
cargo=cargos[i]
iniciales=""
para n=0 hasta n<cargo con paso n++ hacer
si n=0 || nombre[n-1]=" " entonces
iniciales+=cargos[n]+"."
S:escribir iniciales
*/
function Arregloinicial(){
    let nombres = ["Director General Academico","Director de Proyectos","Jefe de Laboratorios"], iniciales = "", i = 0,nombre=""
    //nombre=prompt("Ingrese un nombre")
    for (i = 0;i < nombres.length;i ++){
        nombre=nombres[i]
        iniciales = ""
        for (n = 0;n < nombre.length;n ++){
        if (n == 0 || nombre[n-1] == " "){
            iniciales += nombre[n] + "."
        }
    }
    console.log(`"${nombres[i]}"-->${iniciales.toUpperCase()}`)
    }
}
Arregloinicial()