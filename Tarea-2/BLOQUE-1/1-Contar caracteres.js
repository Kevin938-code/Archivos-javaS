/* Contar caracteres de una frase publicitaria.
Entrada:leer(texto),leer(i),calcular(caracteres)
Proceso:escribir texto
leer texto
para i=0 hasta i<texto con paso i++ hacer
si texto<>"" & texto<>" "
caracteres=caracteres+1
FinSi
Finpara
Salida:escribir caracteres
*/
function contcaracteres(){
    let texto="hola a todos",i=0,c=0
    //texto=prompt('ingrese una frase o texto')
    for (i = 0;i < texto.length;i ++){
        if(texto[i]!= "" && texto[i]!=" "){
            c=c+1
        }
    }
    console.log(`tiene ${c} caracteres`)
}
debugger
contcaracteres()