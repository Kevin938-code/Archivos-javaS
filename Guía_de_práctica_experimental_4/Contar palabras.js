/*Contar el número total de palabras 
Regla:una palabra termina cuando hay un espacio " " o un salto de línea
E:leer(palabra),leer(i),calcular(acum)
P: escribir palabra
leer palabra
para i=0 hasta i<palabra con paso i++ hacer
si palabra[i]=" " entonces
acum=acum+1
Finsi
S:escribir acum
*/
function palabras(){
    let palabra = "hola como estas",acum = 0,i = 0
    //palabra=prompt("Ingrese una palabra")
    for (i = 1;i < palabra.length; i++){
        if (palabra[i - 1] == " "){
            acum = acum + 1
        }
    }
    console.log("Número de palabras:",acum + 1)
}
debugger
palabras()