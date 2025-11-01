/*Leer n precios. Si el precio>50 aplicar IVA del 15% y descuento del 20%. Caso
contrario aplicar solo IVA del 15%. 
entrada:n,i(leer),precio(leer),IVA(asignar),descuento(asignar),precioIVA(calcular),precioDescuento(calcular)
proceso:leer n
mientras i<n
leer precio
si precio>50
descuento=precio*0,2
preciodescuento=precio-descuento
IVA=precioDescuento*0.15
precioIVA=precioDescuento+IVA
salida: escribir precioIVA
sino
IVA=precio*0,15
precioIVA=precio+IVA
escribir precioIVA
i=i+1
*/
function Ivadescuentoprecio () {
let n=2,i=0,pre=0,IVA=0,des=0,preI=0,preD=0
n=parseInt(prompt("Ingrese cuantos precios agregará"))
while (i<n){
    pre=parseInt(prompt("Ingrese el precio"))
    if (pre>50){
        des=pre*0.2
        preD=pre-des
        IVA=preD*0.15
        preI=preD+IVA
        console.log(`Precio aplica descuento e IVA :${preI}`)
    }else{
        IVA=pre*0.15
        preI=pre+IVA
        console.log(`Precio no aplica descuento :${preI}`)
    }
    i=i+1
}
} Ivadescuentoprecio ()