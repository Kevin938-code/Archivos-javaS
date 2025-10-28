/* Contar apariciones de una vocal en un titulo
Entrada: leer(titulo),leer(vocal),calcular(apariciones)
Proceso:escribir titulo
leer titulo
escribir vocal
leer vocal
para i=0 hasta i<titulo con paso i++ hacer
si vocal=titulo[i] entonces
apariciones=apariciones+1
FinSi
FinPara
Salida:escribir apariciones   
*/
function contvocales(){
    let texto="Programacion avanzada",i=0,c=0, vocal="a"
    //texto=prompt('Ingrese una frase o un texto')
    //vocal=prompt('Ingrese una vocal a buscar')
    for (i = 0;i < texto.length;i ++) {
        if (texto[i]==vocal){
            c=c+1
        } 
    }
    console.log(`La vocal aparece ${c} veces`)
}
contvocales()