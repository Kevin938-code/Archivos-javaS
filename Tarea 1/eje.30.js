/*Leer 4 notas, calcular el promedio y mostrar:
 Promedio < 40 → “Reprueba”
 40–69 → “Recuperación”
 ≥70 → “Aprueba”
 ENTRADA:n1,n2,n3,n4(leer),promedio(calcular)
 PROCESO:leer n1,n2,n3,n4
 promedio=(n1+n2+n3+n4)/4
 si promedio>=70
 SALIDA:escribir aprueba
 sino si promedio>40,promedio<69
 escribir recuperacion
 sino
 escribir reprueba
*/
function notascalif(){
    let n1=0,n2=0,n3=0,n4=0,promedio=0 
    n1=parseInt(prompt("Ingrese una nota"))
    n2=parseInt(prompt("Ingrese una nota"))
    n3=parseInt(prompt("Ingrese una nota"))
    n4=parseInt(prompt("Ingrese una nota"))
    promedio=(n1+n2+n3+n4)/4
    if (promedio>=70){
        console.log(promedio,"aprueba")
    }else{if (promedio<69&promedio>40) {
        console.log(promedio,"debe ir a recuperación")
    }else{ if(promedio<40) {
        console.log(promedio,"reprueba")
     }
    }
  }
}
notascalif()
