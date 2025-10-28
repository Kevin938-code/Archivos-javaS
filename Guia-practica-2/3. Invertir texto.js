/*Invertir un texto
 Entrada:leer(texto),leer(i),leer(palabrainvertida)
 Proceso: escribir ingrese texto
 leer texto
 para i=texto.length-1 hasta i>=0 con paso -1
 palabrainvertida+=texto
 Salida: escribir palabrainvertida
*/
function Invertirtexto (){
    let texto="",i=0,palabrainvertida=""
    texto=prompt("Ingrese una cadena de texto")
    for(i=texto.length-1;i>=0;i--){
        palabrainvertida+=texto[i]
    }
    alert(`La palabra invertida es: ${palabrainvertida}`)
}
debugger
Invertirtexto()