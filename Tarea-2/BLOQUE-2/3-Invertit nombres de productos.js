/*  Dado un arreglo con nombres de productos, mostrar cada uno invertido.
Entrada:leer(palabras),leer(palabra),leer(i),leer(invertir),leer(n)
Proceso:escribir palabras
para i=0 hasta i>=0 con paso i++ hacer
palabra=palabras[i]
invertir=""
para n=palabra hasta n>=0 con paso n-- hacer
invertir+=palabras[i][n] 
Salida:invertir
*/
function invarreglonombre(){
    let palabras = ["Hipopotamo","Adrian","dias"], i = 0, invertir = "", n = 0, palabra=""
    //palabra=prompt('Ingrese una palabra')
    for(i = 0;i < palabras.length;i ++){
        palabra = palabras[i]
        invertir=""
        for(n = palabra.length -1;n >= 0;n --){
            invertir += palabras[i][n]
        }
    console.log(`"${palabras[i]}" --> "${invertir}"`)
    }
}
invarreglonombre()