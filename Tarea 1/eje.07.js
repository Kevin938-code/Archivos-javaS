//Elaborar un programa que lea dos números enteros e imprima su suma, resta, multiplicación y división.
//ENT:num1(leer)=0
    //num2(leer)=0
    //sum(calcular)=0
    //res(calcular)=0
    //mul(calcular)=0
    //div(calcular)=0
//Pro:leer num1
    //leer num2
    //sum=num1+num2
    //res=num1-num2
    //mul=num1*num2
    //div=num1/num2
//Sal:escribir sum,res,mul,div
function Operaciones(){
    let num1=0, num2=0, sum=0, res=0, mul=0, div=0
    num1=prompt("Ingrese el primer número")
    num2=prompt("Ingrese el segundo número")
    num1=parseInt(num1)
    num2=parseInt(num2)
    sum=num1+num2
    res=num1-num2
    mul=num1*num2
    div=num1/num2
    console.log(`${num1}+${num2}=${sum}`)
    console.log(`${num1}-${num2}=${res}`)
    console.log(`${num1}*${num2}=${mul}`)
    console.log(`${num1}/${num2}=${div}`)
}
Operaciones()