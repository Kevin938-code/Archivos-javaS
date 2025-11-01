/*Elaborar un programa que lea los nombres de 5 materias en un arreglo y los muestre
en una sola línea separados por comas.
ENT:materias(leer),lista(leer),m1(leer),m2(leer),m3(leer),m4(leer),m5(leer)
PRO:leer m1,m2,m3,m4,m5
materias=m1,m2,m3,m4,m5
lista=materias
SAL:escribir lista
*/
function materias(){
  let materias =[""]
  let m1="",m2="",m3="",m4="",m5="",lista=""
  m1=prompt("Ingrese el nombre de la materia 1:")
  m2=prompt("Ingrese el nombre de la materia 2:")
  m3=prompt("Ingrese el nombre de la materia 3:")
  m4=prompt("Ingrese el nombre de la materia 4:")
  m5=prompt("Ingrese el nombre de la materia 5:")
  materias=[m1,m2,m3,m4,m5]
  lista=materias.join(", ")
  console.log(`Las materias ingresadas son: ${lista}`)
}
debugger
materias()
    