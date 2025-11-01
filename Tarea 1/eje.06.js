
/* desarrollar un programa que lea el nombre de un estudiante y lo muestre en pantalla 
acompañado de un mensaje de bienvenida .
*/
function Nombre() {
    let nom=""
    nom=prompt("Ingrese su nombre",)
    console.log("Bienvenido ",nom)
}
Nombre() 

//function Mensaje () {
let nombre=""
// prompt: manda un mensaje y permite leer un dato y guardarlo en una variable
nombre=prompt("ingrese su nombre: ")
document.write("bienvenido "+ nombre )//presenta en la pagina web
alert("bienvenido "+ nombre)// muestra en una ventana emergente con el mensaje
console.log("bienvenido " + nombre)//muestra en la consola del navegador
//}