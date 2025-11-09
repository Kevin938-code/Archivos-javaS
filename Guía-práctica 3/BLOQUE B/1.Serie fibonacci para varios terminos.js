/* 
Para cada numero, generar la serie.
 Usar un ciclo que sume los dos anteriores
n_valores = [5, 8, 10]
Fibonacci(5): 0, 1, 1, 2, 3
Fibonacci(8): 0, 1, 1, 2, 3, 5, 8, 13
Fibonacci(10): 0, 1, 1, 2, 3, 5, 8, 13, 21, 34
 */
function Fibonacciserie () {
    let valores = [6,7,9], valor = 0 
    let a = 0, b = 1, c = 0, i = 0, n = 0
    for (i = 0; i < valores.length; i++){
        valor = valores[i]
       console.log(`serie ${valor}:`)
        a = 0
        b = 1
        c = 0
         console.log(a)
         console.log(b)
        for (n = 3; n <= valor; n++) {
            c = a + b
            console.log(c)
            a = b
            b = c
        }
    }
}
Fibonacciserie ()