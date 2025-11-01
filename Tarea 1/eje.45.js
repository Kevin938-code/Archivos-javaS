/*Leer notas de 5 estudiantes (4 cada uno), calcular el promedio y mostrar si aprueban,
reprueban o van a recuperación.
entrada:n1,n2,n3,n4(leer),promedio(calcular) 
proceso:mientras estudiantes<5
leer n1,n2,n3,n4
promedio=(n1+n2+n3+n4)/4
si promedio <40 
salida:escribir reprueba
sino si promedio>=40,promedio<=69
escribir recuperacion
sino escribir aprueba
estudiantes=estudiantes+1
*/
function clasificacionEstudiantes () {
let n1=0,n2=0,n3=0,n4=0,promedio=0,est=0
while (est<5) { 
    n1=parseInt(prompt("Ingrese una nota"))
    n2=parseInt(prompt("Ingrese una nota"))
    n3=parseInt(prompt("Ingrese una nota"))
    n4=parseInt(prompt("Ingrese una nota"))
    promedio=(n1+n2+n3+n4)/4
    if (promedio<40){
        console.log(`Estudiante ${est+1} = ${promedio}, Reprueba`)
    }else if (promedio>=40,promedio<=69){
        console.log(`Estudiante ${est+1} = ${promedio}, va a recuperación`)
    }else {
        console.log(`Estudiante ${est+1} = ${promedio}, Aprueba`)
    }
    est=est+1
  }
}
clasificacionEstudiantes ()