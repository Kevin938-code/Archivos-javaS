/* Restas sucesivas JavaScript
Descripción:
Restar un número de manera repetitiva hasta llegar a 0 o menor.
Proceso:
1. Restar el valor dado en cada ciclo.
2. Contar el número de restas necesarias.
Ejemplo:
Número = 15, Valor = 4
15 − 4 − 4 − 4 = 3
Salida:
Resultado final: 3
><
*/
function restasSucesivas () {
    let numero = 11, r = 3, c = 0
    //numero=parseInt(prompt('Ingrese un numero'))
    //r = parseInt(prompt('Ingrese un valor a restar'))
    console.log('número', numero, 'valor', r)
    while ( numero >= r) {
    numero -= r
    c = c + 1
    } 
    console.log('el resultado final:', numero, 'restas necesarias:', c)
}
restasSucesivas ()