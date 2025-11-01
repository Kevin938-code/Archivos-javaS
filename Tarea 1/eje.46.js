/*Leer un arreglo de n materias y mostrar todas las que tengan más de 5 caracteres.
entrada:materias(leer),n(leer),materia(leer),i(leer)
proceso:leer n
mientras i<n 
leer materia
materias=materia
si materia > 5 caracteres
salida:escribir materias
sino escribir la materia tiene menos de 5 caracteres
i=i+1
*/
function Materiaslargas (){
    let materias=[""],materia=""
    let n=2,i=0
    n=prompt("Ingrese cuantas materias son")
    while(i<n){
        materia=prompt("Ingrese una materia")
       materias.push(materia)
        if (materia.length>5){
        console.log(`La materia es :${materia}`)
    } else {
        console.log(`La materia "${materia}" tiene menos de 5 letras`)
    }
    i=i+1
    }

}
Materiaslargas ()