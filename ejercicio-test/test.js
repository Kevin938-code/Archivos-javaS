/* Caso de Estudio: Transformación de Frases a “Capital Case”
Enunciado:
Dada una lista de frases en minúsculas, se requiere transformar cada palabra de cada frase para que empiece con letra mayúscula (Capital Case).
La lista resultante debe mantener la misma cantidad de frases, pero con la capitalización aplicada a cada palabra.

Ejemplo:
Entrada:

frases = ["hola que tal", "buenos dias mundo", "python es genial"]

Salida esperada:

frases = ["Hola Que Tal", "Buenos Dias Mundo", "Python Es Genial"]

Nota: Asuma un espacio simple entre palabras.
*/
function test (){
let lista=["hola","buenos días","que tal"], mayus=[""],i=0,frase="",n=0
    //frase=prompt("Ingrese una frase")
    for (i=0;i<lista.length;i++){
        frase = lista[i]
        for (n=0;n<frase.length;n++){
             if (i==0 || lista[i-1]==" "){
                mayus.push(frase)
            }
                mayus[i].toUpperCase
                mayus+=frase[n]
        }
    }
    console.log(`${mayus}`)
}
debugger
test()