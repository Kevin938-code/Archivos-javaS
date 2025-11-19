/* Contar: .,;:!?¿¡"
Ejemplo entrada: "Hola, ¿cómo estás?"
Salida: "Signos de puntuación: 3"
*/
function contarSignos () {
let texto = 'hola, ¿cómo estás?', acum = 0, i = 0
//frase=prompt("Ingrese una frase")
for (i = 0; i < texto.length; i++) {
    if(texto[i]=='.'||texto[i] ==','||texto[i]==';'||texto[i]==':'||texto[i]=='!'||texto[i]=='?'||texto[i]=='¡'||texto[i]=='¿'||texto[i]=='"') {
        acum = acum + 1
    }
}
console.log ('Hay', acum, 'signos de puntuacion')
}
contarSignos ()