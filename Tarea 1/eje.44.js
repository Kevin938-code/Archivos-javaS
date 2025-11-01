/*Leer n sueldos, calcular aporte IESS (9.45%) y añadir subsidio: $50 si sueldo <450, $20
si entre 700 y 999.
entrada:i,n(leer),sueldo(leer),aporte(calcular),subsidio(asignar)
proceso:leer n
mientras i<n
leer sueldo
aporte=sueldo*0.0945
si sueldo<450
subsidio=50
salida:escribir aporte,subsidio
sino si sueldo >= 700,sueldo < 999
escribir aporte,subsidio
i=i+1
*/
function Sueldosconsubsidio (){
    let i=0,n=2,sueldo=550,aporte=0,subsidio=0
    n=parseInt(prompt("Ingrese cuantos sueldos se van a calcular"))
    while (i<n){
        sueldo=parseInt(prompt("Ingrese su sueldo"))
        aporte=sueldo*0.0945
        if (sueldo<450){
            subsidio=50
        }else if (sueldo>=700,sueldo<999){
            subsidio=20
        }
        console.log(`Del sueldo ${i+1} el aporte es:${aporte}, con subsidio:${subsidio}`)
        i=i+1
    }
}
Sueldosconsubsidio()