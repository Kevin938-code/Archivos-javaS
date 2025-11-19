/* Vocales: a, e, i, o, u (mayúsculas y minúsculas).
Ejemplo entrada: "Educación"
Salida: "Cantidad de vocales: 5"
*/
function contarVocales (){
    let texto = "EducaciOn", vocales = 0, i = 0
    //texto=prompt("Ingrese una frase")
for (i = 0; i < texto.length; i++) {
    if (texto[i] == 'a' ||texto[i] == 'e' ||texto[i] == 'i' ||texto[i] == 'o' ||texto[i] == 'u') {
        vocales = vocales + 1
    } else if (texto[i] == 'A' ||texto[i] == 'E' ||texto[i] == 'I' ||texto[i] == 'O' ||texto[i] == 'U') {
        vocales = vocales + 1
    }
}
    console.log('Hay', vocales, 'vocales')
}
contarVocales ()