/*Iniciales de un nombre completo
entrada:leer(nombre),leer(iniciales),leer(i)
Proceso:escribir nombre
leer nombre
para i=0 hasta i<nombre.length con paso i++ hacer
iniciales+=nombre[i][0]
salida:escribir iniciales
*/
function Iniciales(){
    let nombre="",iniciales="",i=0
    nombre=prompt("Ingrese su nombre completo")
    for(i=0;i<nombre.length;i++){
      if (i==0||nombre[i-1]==" "){
            iniciales+=nombre[i]+","
            }
    }
    alert(`"${iniciales}"`)
}
debugger
Iniciales()