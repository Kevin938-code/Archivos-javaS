/*Leer n radios y calcular área/perímetro únicamente si el radio es mayor a 0.
entrada:i(leer),n(leer),radio(leer),area(calcular),perimetro(calcular)
proceso:leer n
mientras i<n
leer radio
si radio>0
area=Pi*radio^2
perimetro=2*Pi*radio      //Pi=3,14
salida:escribir area,perimetro
sino escribir radio menor a 0
i=i+1
*/
function areaperimetroCirculo(){
let i=0,c=0,rad=0,area=0,per=0
c=parseInt(prompt("Ingrese cuantas veces se va a calcular el area/perimetro"))
while (i<c){
    rad=parseInt(prompt("Ingrese el radio"))
    if (rad>0){
        area=3,14*rad^2
        per=2*3.14*rad
        console.log(`El area y perimetro del circulo ${i+1} es, Área:${area} Perímetro:${per}`)
    }else {
        console.log(`Radio del circulo ${i+1} es menor o igual a cero`)
    }
    i=i+1
}
}
areaperimetroCirculo()