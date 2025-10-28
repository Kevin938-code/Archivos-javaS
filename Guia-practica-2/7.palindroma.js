/* determine si la palabra es palindroma 
e:leer(palabra),leer(i),leer(palabracomparar)
p:escribir palabra
leer palabra
para i=0 hasta i<palabra.length con paso i++ hacer
si palabra[i]!=palabra[palabra.length-1-i] entonces
escribir es palindroma
romper ciclo
finsi
s:escribir es palindroma
*/
function palabrapalindroma(){
    let i=0,palabra=""
    palabra=prompt("Ingrese una palabra")//.toLowerCase()
    for(i=0;i<palabra.length/2;i++){
        if (palabra[i]!==palabra[palabra.length-1-i]){
            alert(`La palabra "${palabra}" no es palíndroma`)
            break
      } else {
        alert(`La palabra "${palabra}" es palíndroma`)
        break
      }
    }
}
debugger
palabrapalindroma()