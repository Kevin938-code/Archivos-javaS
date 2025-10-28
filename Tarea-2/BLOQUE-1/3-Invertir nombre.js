/* Invertir el nombre de un producto 
Entrada: leer(nombre),leer(invertir),leer(i)
Proceso:escribir nombre
leer nombre
para i=nombre-1 hasta i>=0 con paso i-- hacer
invertir+=palabra[i]
FinPara
Salida:escribir invertir
*/
function invnombre(){
    let palabra = "Hipopotamo", i = 0, invertir = ""
    //palabra=prompt('Ingrese una palabra')
    for(i=palabra.length-1;i>=0;i--){
        invertir+=palabra[i]
    }
    console.log(`La palabra invertida es: ${invertir}`)
}
invnombre()