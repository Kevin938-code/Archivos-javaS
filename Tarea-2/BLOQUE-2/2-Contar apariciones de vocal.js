/* Dado un arreglo de títulos y una vocal específica, contar cuántas veces aparece esa vocal en cada título.
E:Leer(frases),leer(frase),leer(vocal),leer(i),leer(n),leer(apariciones)
P:escribir frases
para i=0 hasta i< frases con paso i++ hacer
frase=frases[i] 
para n=0 hasta n<frase con paso i++ hacer
si frase[n]=vocal entonces
apariciones=apariciones+1
S:escribir apariciones
*/
function contarreglov(){
    let textos=["Programacion avanzada","manzana","elefante"],i=0,c=0, vocal="a",n=0,frase=""
    //texto=prompt('Ingrese una frase o un texto')
    //vocal=prompt('Ingrese una vocal a buscar')
    for (i = 0;i < textos.length;i ++) {
        frase=textos[i]
        c=0
        for (n = 0;n<frase.length;n++){
            if (textos[i][n]==vocal){
                c=c+1
            } 
        }
        console.log(`"${textos[i]}" aparece ${c} veces la vocal:${vocal}`)
    }
}
contarreglov()