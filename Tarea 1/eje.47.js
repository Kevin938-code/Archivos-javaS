/*Leer un arreglo con n precios y aplicar 20% de descuento a los que superen 200.
entrada:listaprecios(leer),precios(leer),n(leer),i(leer),descuento(asignar),valordescuento(calcular)
proceso:leer n
mientras i<n
leer precios
listaprecios=precios
si precios>200
descuento=precios*0.2
valordescuento=precios-descuento
salida:escribir valord
sino escribir precio
i=i+1
*/
function desuentoPreciosmayores () {
    let listaprecios=[""]
    let n=0,precios=0,i=0,des=0,valord=0
    n=parseInt(prompt("Ingrese cuantos precios son los precios"))
    while (i<n){
        precios=parseInt(prompt("Ingrese un precio"))
        listaprecios.push(precios)
        if (precios>200){
            des=precios*0.2
            valord=precios-des
            console.log(`al precio ${i+1} se aplica descuento ${valord}`)
        }else{
            console.log(`El valor del precio ${i+1} es: ${precios}`)
        }
        i=i+1
    }
}
desuentoPreciosmayores ()