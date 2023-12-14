// 1 es piedra, 2 es papel, 3 es tijera
let jugador 
let num
let pc = 2


function jug(pers){

    pers = prompt("Elige: 1 para piedra, 2 para papel, 3 para tijera, 4  PARA SALIR")
    return pers;
}

jugador=jug(num)

//CICLO
while(jugador==1 || jugador==2 || jugador==3)
{

if(jugador == 1) {
    alert("Elegiste piedra")
} else if(jugador == 2) {
    alert("Elegiste papel")
} else if(jugador == 3) {
    alert("Elegiste tijera")
} else {
    alert("Elegiste PERDER")
}
if(pc == 1) {
    alert("pc elije piedra")
} else if(pc == 2) {
    alert("pc elije papel")
} else if(pc == 3) {
    alert("pc elije tijera")
} 
// COMBATE

if(pc == jugador){
    alert("EMPATE") 
    
    break
    
} else if(jugador == 1 && pc == 3) {
    alert("GANASTE")
    
    break

} else if(jugador == 2 && pc == 1) {
    alert("GANASTE")
    
    break

} else if(jugador == 3 && pc == 2) {
    alert("GANASTE")
    
    break

} else {
    alert("PERDISTE")
    
    break

}

}

alert("Fin")