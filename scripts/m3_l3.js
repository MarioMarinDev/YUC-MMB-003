let j1 = prompt("PPT: "); // "Piedra" "Papel" "Tijera"
let j2 = prompt("PPT: "); // "Piedra" "Papel" "Tijera"
// Empate
if(j1 == j2) {
  console.log("Es un empate");
}
// Cuando gana el J1
if((j1 == "papel" && j2 == "piedra") || (j1 == "tijera" && j2 == "papel") || (j1 == "piedra" && j2 == "tijera")) {
  console.log("Ganó el J1");
}
// Cuando gana el J2
if((j2 == "papel" && j1 == "piedra") || (j2 == "tijera" && j1 == "papel") || (j2 == "piedra" && j1 == "tijera")) {
  console.log("Ganó el J2");  
}