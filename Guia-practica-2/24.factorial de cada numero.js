/* factorial de cada numero del arreglo 
e:leer(numeros),leer(i),calcular(factorial)
p:escribir numeros
leer numeros
Si factorial <- 1 entonces
Si i = 0 Entonces
Sino
Para i <- 1 Hasta n Con Paso 1 Hacer
factorial <- factorial * i
FinPara
s:escribir factorial
*/function factorial (){
    let numeros=[4,6],numero=0,factorial=0,i=0,j=0
    for(i = 0;i < numeros.length; i++){
        numero=numeros[i]
        factorial=1
        for(j = 1;j <= numero; j++){
            factorial *= j
        }
        alert(`el factorial de ${numero} es: ${factorial}`)
        factorial=0
    }
}
debugger
factorial()
