/// Definicion de variables
let numero = document.getElementById("numero");
let enviar = document.getElementById("enviar");
let texto = document.getElementById("texto");
let tries = document.getElementById("tries");
let numeroMeta = generaNumero(100);
let intentos = 0;

/// Definicion de funciones
function generaNumero(max) {
  return Math.floor(Math.random() * max);
}

/// Programa principal
enviar.addEventListener("click", function() {
  let numeroUsuario = numero.value;
  if(numeroUsuario == numeroMeta) { // Adivinaste
    texto.innerHTML = "¡Adivinaste!";
  } else if(numeroUsuario < numeroMeta) { // El usuario tiene un número más bajo
    texto.innerHTML = "Más alto";
  } else { // El usuario tiene un número más alto
    texto.innerHTML = "Más bajo";
  }
  if(numeroUsuario != numeroMeta) {
    intentos++;
    tries.innerHTML = "Intentos: " + intentos;
  }
});