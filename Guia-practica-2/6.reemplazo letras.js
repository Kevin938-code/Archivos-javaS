/*reemplazar letras en una palabra
e:leer(palabra),leer(reemplazo),leer(i)
p:escribir palabra
leer palabra
escribir reemplazo
para i=0 hasta i<palabra.lenght con paso i++ hacer 
reemplazo=palabra[i]
s:escribir reemplazo
*/
function reemplazar(){
    let texto="",reemplazo="",palabra="",textonuevo="",i=0
    texto=prompt("Ingrese una palabra")
    palabra=prompt("Ingrese que palabra desea reemplazar")
    reemplazo=prompt("Ingrese que letra desea mostrar")
    for(i=0;i<texto.length;i++){
        if (texto[i]==palabra){
           textonuevo+=reemplazo
        }else{
            textonuevo+=texto[i]
        }
    }
    alert(textonuevo) 
}
debugger
reemplazar()