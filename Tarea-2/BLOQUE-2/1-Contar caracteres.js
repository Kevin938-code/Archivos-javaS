/* Dado un arreglo con frases publicitarias contar cunatos caracteres tiene cada una.
E:Leer(frases),leer(caracteres),leer(i),leer(c),leer(frase),leer(n)
P:para i=0 hasta i<frases con paso i++ hacer 
frase=frases[i]
para n=0 hasta n<frase con paso n++ hacer
si frase [n]<>"" & frase[n]<>" " entonces
c=c+1
S:escribir caracteres
*/
function contarreglocar(){
    let textos=["La","tienda","mola"],i=0,c=0,frase="",n=0
    //texto=prompt('ingrese una frase o texto')
    for (i = 0;i < textos.length;i ++){
        frase = textos[i]
        c = 0
        for (n = 0;n < frase.length;n ++){
            if(textos[i][n] != "" && textos[i][n] != " "){
                c=c+1
            }
        }
         console.log(`"${textos[i]}" tiene ${c} caracteres`)
    }
   
}
debugger
contarreglocar()