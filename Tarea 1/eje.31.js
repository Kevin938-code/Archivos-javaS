/* Leer un arreglo con 5 materias y mostrar si la primera tiene más de 5 caracteres.
ENTRADA: materias(leer)
PROCESO:leer materias
si materias[0] > 5
SALIDA:escribir m1 tiene mas de 5 caracteres
sino 
escribir la primer materia tiene menos de 5 caracteres
*/
function caracteres () {
    let materias=["historia","ingles","fisica","lenguaje","matematicas"]
    
    if ( materias[0].length >5 ){
        console.log("La primer materia tiene mas de 5 caracteres")
    }else{
        console.log("La primer materia no tiene mas de 5 caracteres")
    }
}
caracteres()