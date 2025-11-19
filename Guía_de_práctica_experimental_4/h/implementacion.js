function contarPalabras (texto) {
    let palabras = 1, i = 0
    for (i = 0; i < texto.length - 1; i++) {
        if (texto[i] === " " && texto[i + 1] !== " " && texto[i] !== "") {
            palabras++
        } else if (texto[i] == '') {
            palabras = 0
        }
    }
    return palabras
}
//contarPalabras ()
function contarSignos (texto) {
let acum = 0, i = 0
for (i = 0; i < texto.length; i++) {
    if(texto[i]=='.'||texto[i] ==','||texto[i]==';'||texto[i]==':'||texto[i]=='!'||texto[i]=='?'||texto[i]=='¡'||texto[i]=='¿'||texto[i]=='"') {
        acum++
    }
}
return acum;
}
// contarSignos ()
function contarVocales (texto){
    let vocales = 0, i = 0
for (i = 0; i < texto.length; i++) {
    if (texto[i] == 'a' ||texto[i] == 'e' ||texto[i] == 'i' ||texto[i] == 'o' ||texto[i] == 'u') {
        vocales = vocales + 1
    } else if (texto[i] == 'A' ||texto[i] == 'E' ||texto[i] == 'I' ||texto[i] == 'O' ||texto[i] == 'U') {
        vocales = vocales + 1
    }
}
  return vocales
}
// contarVocales ()
function contarConsonantes (texto) {
    let i = 0, consonantes = 0, c = ""
    for (i = 0; i < texto.length; i++) {
        c = texto[i]
        if ((c >= 'a' && c <= 'z') && !(c == 'a' || c == 'e' || c== 'i' || c == 'o' || c == 'u')) {
            consonantes = consonantes + 1
        } else if ((c >= 'A' && c <= 'Z') && !(c == 'A' || c == 'E' || c== 'I' || c == 'O' || c == 'U')) {
            consonantes = consonantes + 1
        }
    }
  return consonantes
}
// contarConsonantes ()
function contarDigitos(texto) {
    let i = 0, digitos = 0
    for (i = 0; i < texto.length; i++) {
        if (texto[i] >= "0" && texto[i] <= "9") {
            digitos = digitos + 1
        }
    }
   return digitos
}
// contarDigitos ()
function contarMayusculas (texto) {
    let i = 0, c = 0
    for (i = 0; i < texto.length; i++) {
        if ((i == 0 || texto[i-1] == " " ) && (texto[i] >= 'A' && texto[i] <= 'Z')) {
            c = c + 1
        }
    }
    return c
}
// contarMayusculas ()
function contarMinusculas (texto) {
    let i = 0, c = 0
    for (i = 0; i < texto.length; i++) {
        if ((i == 0 || texto[i-1] == " ") && (texto[i] >= 'a' && texto[i] <= 'z')) {
            c = c + 1
        }
    }
    return c
}
// contarMinusculas ()
function contarParrafos (texto) {
    let i = 0, c = 0
    for (i = 0; i < texto.length; i++) {
        if (texto[i] ==='\n') {
            c = c + 1
        }
    }
     return c  
}
// contarParrafos ()
function invertirTexto (texto) {
    let i = 0, invertir = ""
    for (i = texto.length - 1; i >= 0; i--) {
        invertir += texto[i]
    }
    return invertir
}
// invertirTexto ()
function contarCaracteres (texto) {
return texto.length
}
// contarCaracteres ()
function buscarPalabra (texto, palabra) {
    let palabras = [], palabrasactual="",i=0
    for (i=0; i < texto.length; i++) {
        if (texto[i]!==" " && texto[i]!=='\n' ){
            palabrasactual+=texto[i]
        }else{
            palabras.push(palabrasactual)
            palabrasactual=''
        }
    }
    palabras.push(palabrasactual)
    for (i = 0; i < palabras.length; i++){
        if (palabras[i]===palabra){
            return true 
        }
    }
    return false
}
function contarCaracter (texto,caracter) {
    let i = 0, c = 0
    for (i = 0; i < texto.length; i++) {
        if (texto[i] == caracter) {
            c++
        }
    }
    return c
}
// contarCaracterestexto ()
function contarPares (texto) {
    let i = 0, pares = 0
    for (i = 0; i < texto.length; i += 2) {
        pares++
    }
    return pares
}
// contarPares ()
function contarImpar (texto) {
    let i = 0, imp = 0
    for (i = 1 ; i < texto.length; i+=2) {
            imp++
    }
    return imp
}
// contarImpar ()
function agregarTexto (texto,agregar) {
    let i = 0, inicio = "", fin = ""
    inicio = agregar + " " + texto  
    fin = texto + " " + agregar
    return {
        inicio: inicio,
        fin : fin
    }
}

