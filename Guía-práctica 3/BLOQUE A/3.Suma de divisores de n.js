/* Suma de los divisores de un número
Descripción:
Calcular la suma total de los divisores positivos de un número.
Proceso:
1. Encontrar los divisores (como en el ejercicio anterior).
2. Acumularlos en una variable suma.
Ejemplo:
Divisores de 12 = 1 + 2 + 3 + 4 + 6 + 12 = 28
Salida:
Suma de divisores: 28
*/
function sumaDivisores(){
    let suma=0,n=6, i =0
    for (i = 1; i <= n; i++){
        if (n % i == 0) {
            suma += i
        }
    }
    console.log('La suma de los divisores de', n, 'es', suma)
}
sumaDivisores()
