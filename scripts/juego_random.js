function generaNumero(max) {
  return Math.floor(Math.random() * max);
}
var numeroMeta = generaNumero(100);
var gane = false;
while(gane == false) {
  miNumero = prompt("Selecciona un número: ");
  if(miNumero == numeroMeta) {
    gane = true;
  } else {
    if(miNumero > numeroMeta) {
      console.log("Más bajo");
    } else {
      console.log("Más alto");
    }
  }
}
console.log("¡¡Ganaste!!");