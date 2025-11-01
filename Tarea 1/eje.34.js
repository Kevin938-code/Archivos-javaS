/*Leer un arreglo con 3 sueldos y verificar si el tercero es menor al salario básico (450).
entrada: sueldos(leer),s1,s2,s3(leer)
proceso:leer s1,s2,s3
sueldos=s1,s2,s3
si s3<450
salida:escribir el tercer sueldo es menor al salario basico
sino si s3=450 
escribir el tercer sueldo es igual al salario basico
sino 
escribir el tercer sueldo es menor al salario basico
*/
function tecerSueldo () {
    let sueldos=[]
    let s1=0,s2=0,s3=0
    s1=parseInt(prompt("Ingrese el primer sueldo"))
    s2=parseInt(prompt("Ingrese el segundo sueldo"))
    s3=parseInt(prompt("Ingrese el tercer sueldo"))
    sueldos.push(s1)
    sueldos.push(s2)
    sueldos.push(s3)
    if (sueldos[2]>450){
        console.log("El tercer sueldo es mayor al salario basico")
    } else if (sueldos[2]<450){
        console.log("El tercer sueldo es menor al salario basico")
    } else {
        console.log("El tercer salario es igual al salario basico")
    }
}
tecerSueldo ()