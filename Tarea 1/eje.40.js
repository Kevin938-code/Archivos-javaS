/*Leer n precios y aplicar descuento del 10% a los que cuesten ≥100.
entrada: n,i(leer),precio(leer),descuento(asignar),precioDescuentos(calcular)
Proceso: leer n
mientras i<n 
leer precio
si precio≥100
descuento=precio*0.1
precioDescuentos=precio-descuento
Salida: escribir precioDescuentos
sino 
escribir precio menor a 100 
i=i+1
*/
function precioDescuento(){
    let n=0,i=0,pre=0,des=0,preD=0 
        n=parseInt(prompt("Ingrese cuantos precios va a ingresar"))
    while (i<n){ 
        pre=parseInt(prompt("Ingrese un precio"))
        if (pre>=100){
        des=pre*0.1
        preD=pre-des
        console.log(`Se aplica descuento: ${preD}`)
        }else{
            console.log(`Precio menor a 100 no se aplica descuento: ${preD}`)
        }
        i=i+1
    }
}
precioDescuento()