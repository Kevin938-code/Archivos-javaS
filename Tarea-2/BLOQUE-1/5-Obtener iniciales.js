/* Obtener iniciales de un cargo de trabajo 
Entrada: Leer(cargo),leer(i),leer(iniciales)
Proceso: Escribir cargo
leer cargo
para i=0 hasta i<cargo con paso i++ hacer
si cargo[i]=Iniciales entonces
Iniciales+=cargo[i]
FinSi
Salida:escribir iniciales
*/
function iniciales(){
    let nombre = "Director General Academico", iniciales = "", i = 0
    //nombre=prompt("Ingrese un nombre")
    for (i = 0;i < nombre.length;i ++){
        if (i == 0 || nombre[i-1]==" "){
            iniciales += nombre[i] + "."
        }
    }
    console.log(`"${iniciales}"`)
}
iniciales()