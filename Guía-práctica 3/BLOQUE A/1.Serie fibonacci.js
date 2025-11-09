/* Generar los primeros n términos de la serie de Fibonacci, donde cada término se obtiene
sumando los dos anteriores.
Proceso:
1. Comenzar con 0 y 1.
2. Cada nuevo valor se calcula: nuevo = anterior + actual.
3. Repetir hasta obtener n términos.
Ejemplo paso a paso:
0, 1 → 1
1, 1 → 2
1, 2 → 3
2, 3 → 5
3, 5 → 8
Entrada:
n = 8
Salida:
Serie: 0, 1, 1, 2, 3, 5, 8, 13
*/
function seriefibonacci() {
    let a=0,b=1,c=0,n=8,i=3
    //n=parseInt(prompt('Ingrese hasta que número desea generar'))
    console.log(a)
    console.log(b)
    for (i = 3; i <= n; i++){
        c = a + b
        console.log(c)
        a = b
        b = c
    }
}
seriefibonacci()