/* Contar todos los signos de puntuación de un texto
-Contar: .,;:!?¿¡"
E:calcular(acum),leer(palabra),leer(i)
P: escribir palabra
leer palabra
para i=0 hasta i<palabra con paso i++ hacer
si palabra[i]=".,;:!?¿¡"" entonces
acum=acum+1
FinSi
S:escribir acum
*/
function contarsignos(){
let palabra="¡hola a todos! mucho gusto, ¿cómo estan?"
let acum=0,i=0
//palabra=prompt("Ingrese un texto")
for(i = 0;i < palabra.length;i++){
if(palabra[i]=='¡'||palabra[i]=='!'||palabra[i]=='¿'||palabra[i]=='?' ||palabra[i]=='.'||palabra[i]==','||palabra[i]==':'||palabra[i]==';'||palabra[i]=='""'){
acum = acum + 1
}
}
console.log("Signos de puntuación:" + acum )
}
debugger
contarsignos()