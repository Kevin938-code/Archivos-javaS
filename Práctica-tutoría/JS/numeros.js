/* 
1) Verificar si un número es Par o Impar
Bosquejo:
-Un número es PAR si al dividirlo entre 2 el residuo es 0.
-Si no, es IMPAR.
Variables: numero, residuo
caso de prueba: 7 - impar, 8 - par
*/
function VerificarParImpar() {
    //let numero = parseInt(prompt("Ingrese un número"))
    let numero=6
    if (numero % 2 === 0) {
        console.log (numero + ' es par')
    } else {
        console.log (numero + ' es Impar')
    }
}
VerificarParImpar()
console.log()
/* 
2) Mostrar un número N veces
Bosquejo: 
-Fijar el número y la cantidad de repeticiones.
-Usar un for desde 1 hasta N para imprimirlo.
Variables: numero, veces, i
*/
function repetirNumero () {
    let numero = 5
    let veces = 4
    console.log(`Mostrar el numero ${numero} un total de ${veces} veces`)
    for (let i = 1; i <= veces; i++) {
        console.log (numero)
    }
}
repetirNumero ()
console.log()
/*
3) Mostrar los primeros N numeros naturales
Bosquejo:
-Imprimir los números del 1 al N  
*/
function numerosNaturales (){
    let n = 5
    console.log(`Mostrar los primeros ${n}`)
    for (let i = 1; i <= n; i++){
        console.log (i)
    }
}
numerosNaturales();
console.log ();
/* 
4) Serie de Fibonacci
Bosquejo: 
-Los dos primeros numeros son 0 y 1.
-Cada termino es la suma de los dos anteriores.
>
*/  
function serieFibonacci () {
    let n = 8 ;  //0 1 1 2 3 5 8 13
    let a = 0, b = 1, c;
    console.log('Serie Fibonacci de '+ n)
    console.log (a);
    console.log (b);
    for (let i = 3; i <= n; i++){
        c = a + b;
        console.log(c);
        a = b;
        b = c;
    }
}
serieFibonacci ();
console.log ()
/* 
5) Divisores de un número
Bosquejo:
-Un divisor es un numero que divide exacto
-Recorrer de 1 hasta N y verificar residuo 0
numero = 6
divisores: 1 2 3 4 5// 6%1=0, 6%2=0, 6%3=0, 6%4=2,6%5=1
*/
function divisoresNumero () {
    let numero = 6;
    console.log ('Divisores de', numero + ':');
    for (let i = 1; i < numero; i++) {
        if (numero % i === 0){
            console.log (i);
        }
    }
}
divisoresNumero ()
console.log()
/* 
6) Sumar divisores

-Recorrer de 1 hasta N-1
-Sumar los que dividen exacto
*/
function sumaDivisores (){
    let numero = 6, cd =0;
    let suma = 1;
    console.log(`Mostrar la suma de los divisores de ${numero}`)
    for (let i = 1; i < numero ; i++) {
        if (numero % i === 0) {
         cd++
        } else {
            suma *= i;
        }
    }
    console.log('La suma de los no divisores de', numero, 'es:', suma)
    console.log('La cantidad de los divisores de:', numero,'es',cd)
}
sumaDivisores ()
console.log()
/* 
7) Numero perfecto
Bosquejo:
-Un numero es perfecto si la suma de sus divisores propios
(sin incluir el mismo numero) es igual al numero original.
numero = 6 1+2+3=6
*/
function numerosPerfectos (){
    let numero = 6;
    let suma = 0;
    console.log(`Mostrar si ${numero} es un numero perfecto`)
    for (let i = 1; i < numero ; i++) {
        if (numero % i === 0) {
            suma += i;
        }
    }
    if (suma === numero){
        console.log(numero + ' Es perfecto')
    } else {
        console.log(numero + ' no es perfecto')
    }
}
numerosPerfectos ()
console.log()
/* 
8) Numeros Primos
Bosquejo:
-Un numero es primo si solo tiene dos divisores: 1 y él mismo.
- Contar cuantos divisores exactos tiene.
*/
function numerosPrimos () {
    let numero = 5;
    let contador = 0;
    for (let i = 2; i <= numero; i++){
        if (numero % i === 0){
            contador ++
        }
    }
    if (contador === 0 ){
        console.log (numero + ' es primo')
    } else {
        console.log (numero + ' no es primo')
    }
}
numerosPrimos ()
console.log()
/* 
9) Invertir numero
Bosquejo:
-repetir mientras el numero sea > 0.
-extraer el ultimo digito con %10.
-agregar al resultado miltuplicando por 10
-eliminar el ultimo digito con math.floor(numero/10)
><
*/
function InvertirNumero () {
    let numero = 123;
    let Invertir = 0;
    while (numero > 0){
        let digito = numero % 10;
        Invertir = Invertir * 10 + digito;
        numero = Math.floor (numero / 10);
    }
    console.log('Numero invertido:', Invertir)
}
InvertirNumero ()
console.log()
/* 
10) Numero Factorial
Bosquejo:
-Factorial = 1 x 2 x 3 x ... x N
-Usar for con multiplicacion acumalada
*/
function factorialNumero () {
    let n= 5; // 5*4*3*2*1=120
    let Factorial = 1;
    for (let i = n; i > 1; i --){
        Factorial *= i;
    }
    console.log('El factorial de ', n,'es ',Factorial)
}
factorialNumero ();
console.log()
//con parametro
function factorialNumero (n) {
   // let n= 5; // 5*4*3*2*1=120
    let Factorial = 1;
    for (let i = n; i > 1; i --){
        Factorial *= i;
    }
    //console.log('El factorial de ', n,'es ',Factorial)
    return Factorial
}
factorialNumero (5);
console.log()
//Dado un arreglo de numeros presente el factorial de cada numero
function factorialArreglo (arr) {
    let factorial
    for (let i = 0;i< arr.length;i++){
         factorial=factorialNumero(arr[i]);
        console.log('el factorial de', arr[i], 'es:', factorial);
   }
}
let numeros=[3,4,5]
factorialArreglo (numeros)