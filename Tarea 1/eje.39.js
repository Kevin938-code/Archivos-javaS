/* Leer n precios y aplicar IVA del 15% con un descuento del 5% solo a los que sean
mayores a 10.
entrada: n,i(leer),IVA(asignar),descuento(asignar),precios(leer),precioIVA(calcular),pD(calcular)
proceso: mientras i<n
leer precios
if precios>10 
descuento=precios*0.05
pD=precios-descuento
IVA=pD*0.15
precioIVA=pD+IVA
salida:escribir precioIVA
sino 
IVA=precios*0.15
precioIVA=precios+IVA
escribir preciosIVA
i=i+1
*/
function precioconIVA (){
let n=0,i=0,I=0,d=0,precios=0,precioI=0,preciosD=0
n=parseInt(prompt("Ingrese cuantos precios va a ingresar"))
while (i<n) {
    precios=parseInt(prompt("Ingrese un precio"))
    if (precios>10) {
        d=precios*0.05
        preciosD=precios-d
        I=preciosD*0.15
        precioI=preciosD+I
        console.log(`El precio es mayor a 10 se aplica IVA y descuento:${precioI}`)
    }else{
        I=precios*0.15
        precioI=precios+I
        console.log(`El precio es menor a 10 solo aplica IVA: ${precioI}`)
    } i=i+1
}
}
precioconIVA()