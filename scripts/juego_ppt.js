let j1 = prompt("PPT: "); // "Piedra" "Papel" "Tijera"
let j2 = prompt("PPT: "); // "Piedra" "Papel" "Tijera"
let jugable = false;

if((j1 == "piedra" || j1 == "tijera" || j1 == "papel") && (j2 == "piedra" || j2 == "tijera" || j2 == "papel")) {
  jugable = true;
}

if(jugable) {
  if(j1 == j2) {
    // Empate
    console.log("Es un empate");
  } else if((j1 == "papel" && j2 == "piedra") || (j1 == "tijera" && j2 == "papel") || (j1 == "piedra" && j2 == "tijera")) {
    // Cuando gana el J1
    console.log("Ganó el J1");
  } else {
    // Cuando gana el J2
    console.log("Ganó el J2");  
  }
} else {
  console.log("No se seleccionaron opciones correctas.");
}

/*
  // Cuando gana el J1
  j1 = "papel"    j2 = "piedra"
  (j1 == "piedra" && j2 == "tijera") || (j1 == "papel" && j2 == "piedra")
  ("papel" == "piedra" && "pidra" == "tijera") || ("papel" == "papel" && "piedra" == "piedra")
  (false && false) || (true && true)
  false || true
  true 
  // Cuando es empate
  j1 == j2
  "papel" == "piedra"
  false
*/

