/* Entrada: texto del textarea + un nuevo fragmento.
o Salida: mostrar el texto original con el fragmento agregado al inicio y también
al final.
o Ejemplo:
1. Texto: "Aprender programación"
2. Fragmento: "Hoy"
3. Salida:
1. Al inicio: "Hoy Aprender programación"
2. Al final: "Aprender programación Hoy"
*/
function agregarTexto () {
    let texto = "Voy al parque", i = 0, agregar = "hoy", inicio = "", final = ""
    // texto = prompt ("Ingrese un texto")
    // agregado = prompt ("Ingrese un texto a añadir")
    for (i = 0; i < texto.length; i++) {
        if (texto[i] == 0 || texto[i] == texto.length-1) {
             inicio = agregar + " " + texto  
             final = texto + " " + agregar
        }
    }
     console.log ('Al inicio:', inicio, '\nAl final:', final)
}
agregarTexto ()