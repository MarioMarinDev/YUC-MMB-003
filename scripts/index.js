/// [ FUNCTIONES ]
function buscar() {
  let url = "https://pokeapi.co/api/v2/pokemon/" + pokemon_id;
  fetch(url).then(function(response) {
    return response.json();
  }).then(function(data) {
    numero.innerHTML = "#" + data["id"];
    nombre.innerHTML = data["name"];
    imagen.src = data["sprites"]["front_default"];
    bloquearBotones();
  }).catch(function(error) {
    console.log("Error: ", error);
  });
}

function bloquearBotones() {
  if(pokemon_id <= 1) {
    btn_up.classList.add("blocked");
  } else {
    btn_up.classList.remove("blocked");
  }

  if(pokemon_id >= 150) {
    btn_down.classList.add("blocked");
  } else {
    btn_down.classList.remove("blocked");
  }
}

function siguiente() {
  if(!btn_down.classList.contains("blocked")) {
    console.log("Next");
    pokemon_id += 1;
    buscar();
  }
}

function anterior() {
  if(!btn_up.classList.contains("blocked")) {
    console.log("Prev");
    pokemon_id -= 1;
    buscar();
  }
}

/// [ CÓDIGO PRINCIPAL ]
var pokemon_id = 1;
var numero = document.getElementById("numero");
var nombre = document.getElementById("nombre");
var imagen = document.getElementById("imagen");
var btn_up = document.getElementById("boton-arriba");
var btn_down = document.getElementById("boton-abajo");
btn_up.addEventListener("click", anterior);
btn_down.addEventListener("click", siguiente);

buscar();