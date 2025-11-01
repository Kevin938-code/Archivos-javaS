//Presenta un nombre o mensaje en la consola o pantalla
//Entrada: nombre(leer)= ""  //declarar variables
//Proceso: leer nombre       //trabajar con variables
//Salida: escribir nombre    //mostrar el resultado de esas variables mediante el proceso
//funcion: nombre de la tarea o problema
//{} indica el inicio y el fin de la funcion o bloque de sentencia
function Mensaje () {
let nombre=""
// prompt: manda un mensaje y permite leer un dato y guardarlo en una variable
nombre=prompt("ingrese su nombre: ")
document.write("bienvenido "+ nombre )//presenta en la pagina web
alert("bienvenido "+ nombre)// muestra en una ventana emergente con el mensaje
console.log("bienvenido " + nombre)//muestra en la consola del navegador
}
//ciclo: proceso repetitivo que se ejecuta mientras la condicion se cumpla(verdadera)
//presentar un nombre siempre y cuando no este vacio n veces 
function mensajecondicionadociclo(){
let nombre="",n=0,c=1
n=parent(prompt("ingrese la cantidad de veces a repetir"))
nombre=prompt("ingrese un nombre: ")
while (c <= n){
 nombre=prompt("ingrese un nombre: ")

if (nombre !="") {
    alert("bienvenido " + nombre)
    console.log("bienvenido " + nombre)
} else {
    alert("no se ha ingresado ningun nombre")
    console.log("no se ha ingresasdo ningun nombre")
}
c=c+1
}
}

debugger;
//Mensaje() // llamada o invocacion a la funcion
mensajecondicionadociclo()

