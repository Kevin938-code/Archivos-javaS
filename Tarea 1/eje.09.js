/*escribir un programa que lea el precio de un producto y calcule el valor final aplicando un IVA del 12%.
Ent:precio(Leer)=0
preciofinal(Calcular)=0
IVA(Asignar)=0.12
ValorIVA(Calcular)=0
Pro:leer precio
ValorIVA=precio*IVA/100
Preciofinal=Precio+ValorIVA
Sal:Escribir Preciofinal
*/
function precioIVA(){
let precio=0, preciofinal=0,IVA=12, ValorIVA=0
precio=parseInt(prompt("Ingrese el valor del producto"))
ValorIVA=precio*IVA/100
preciofinal=precio+ValorIVA
console.log("El valor final incluyendo el IVA es:",preciofinal)
}
precioIVA()