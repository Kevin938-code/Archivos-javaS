/*Leer 10 triángulos (base y altura) y calcular su área únicamente si ambos valores son
positivos.
entrada:triangulos(leer),base(leer),altura(leer),area(calcular)
proceso:mientras triangulos<10
leer base,altura
si base & altura > 0
area=(base*altura)/2
salida: escribir area
sino escribir un valor es negativo o nulo
triangulos=triangulos+1
*/
function tirangulosBasealtura(){
let t=0,b=0,h=0,a=0
while (t<10){
b=parseInt(prompt("Ingrese la base"))
a=parseInt(prompt("Ingrese la altura"))
if (b & h>0) {
    a=(b*h)/2
    console.log(`El area del triangulo ${t+1} es:${a}`)
}else{
    console.log(`Un valor es nulo o negativo`)
   }
t=t+1
  }
}
tirangulosBasealtura ()