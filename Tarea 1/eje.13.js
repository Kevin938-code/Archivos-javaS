/*Escribir un programa que lea el radio de un círculo y muestre su área y perímetro.
Ent:area(calcular),perimetro(calcular),radio(leer),pi(asignar)
Pro:leer radio
area=pi*radio^2
perimetro=2*pi*radio
Sal: escribir area,perimetro
pi=3,14
*/
function perimetro(){
    let ar=0,pe=0,ra=3,pi=3.141592
    r=parseInt(prompt("Ingrese el radio del circulo"))
    ar=pi*ra^2
    pe=2*pi*ra
    console.log("El area del circulo es: ",ar)
    console.log("El perimetro del circulo es: ",pe)
}
perimetro()