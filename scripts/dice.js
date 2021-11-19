// Definir variables
let dado = document.querySelector("img");
let boton = document.querySelector(".boton");
let caras = [
  "../assets/dice/1.png", // 0
  "../assets/dice/2.png", // 1
  "../assets/dice/3.png", // 2
  "../assets/dice/4.png", // 3
  "../assets/dice/5.png", // 4
  "../assets/dice/6.png"  // 5
];
// Definir funciones
function cambiarResultado() {
  let numeroAzar = generaNumero(6);
  dado.src = caras[numeroAzar];
}
function generaNumero(max) {
  return Math.floor(Math.random() * max);
}
// Código principal
// Agregar el evento de click al boton
boton.addEventListener("mouseleave", cambiarResultado);