/* Si el precio de un producto es mayor a 50, aplicar IVA del 15% y descuento del 10%. 
En caso contrario, aplicar solo IVA del 15%.
Entrada: precio(leer),IVA(asignar),descuento(asignar),pd(calcular),pI(calcular),td(calcular),preciototal(calcular)
Proceso:leer precio
si precio>50
pd=precio*descuento
td=precio-pd
pI=td*IVA
precitotal=td+pI
Salida:escribir precitotal
sino 
pI=precio*IVA
total=precio+pI
escribir precio
*/
function preciodescuentoIVA () {
let pre=0,IVA=0.15,desc=0.1,pd=0,pI=0,td=0,preciot=0,total=0
pre=parseInt(prompt("Ingrese el valor del producto"))
if (pre>50) {
    pd=pre*desc
    td=pre-pd
    pI=td*IVA
    preciot=td+pI
    console.log("El valor con IVA y descuento es: ",preciot)
   } else{
    pI=pre*IVA
    total=pre+pI
    console.log("El valor solo  con el IVA es: ",total)
   }
}
preciodescuentoIVA()