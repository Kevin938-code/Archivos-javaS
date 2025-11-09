/* Sumas sucesivas
Descripción:
Realizar sumas sucesivas de un número.
Proceso:
1. Repetir una suma tantas veces como indique el usuario.
2. Acumular el resultado.
Ejemplo:
Número = 3, Veces = 4
3 + 3 + 3 + 3 = 12
Salida:
Resultado = 12
*/
function sumasSucesivas() {
    let numero = 4, i = 0, suma = 0, c = 3
    //numero =parseInt(prompt('Ingrese un numero'))
    //c = parseInt(prompt('Ingrese cuantas veces desea sumar'))
    for (i = 0; i < c; i++) {
        suma += numero 
    }
    console.log('sumar el numero', numero,'un total de', c,'veces')
    console.log('la suma es', suma)
}
sumasSucesivas ()