/* Leer el sueldo de un empleado, calcular el aporte al IESS (9.45%) y asignar subsidio
según reglas:
 <450 → $50
 ≥450 → $30
 ≥700 y < 1000 → $20
 caso contrario → 0
Entrada:sueldo(leer),aporte(asignar),subsidio(asignar),aporteI(calcular)
Proceso:leer sueldo
aporteI=sueldo*aporte
si sueldo < 450
Salida:subsidio=50
sino si sueldo ≥ 450
subsidio=30
sino si sueldo ≥ 700,sueldo < 1000
subsidio=20
sino 
subsidio=0
finsi
escribir subsidio 
*/
function aporteSubsidio() {
    let sueldo=0,aporte=0.0945,subsidio=0,aporteI=0
    sueldo=parseInt(prompt("Ingrese su sueldo"))
    aporteI=sueldo*aporte
    if (sueldo<450){
        subsidio=50
    }else{ if(sueldo>=450){
        subsidio=30
    } else{ if (sueldo >= 700,sueldo < 1000){
        subsidio=20
    }else{
        subsidio=0
    }
    }
   }
   console.log(`Su aporte:${aporteI}, subsidio:${subsidio}`) }
aporteSubsidio()