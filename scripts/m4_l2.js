
var pokemon = document.getElementById("pokemon");
var btn_buscar = document.getElementById("btn-buscar");

btn_buscar.addEventListener("click", function() {
  var url = "https://pokeapi.co/api/v2/pokemon/";
  var texto = pokemon.value;
  url += texto;
  buscar(url);
});

function buscar(url) {
  fetch(url).then(function(response) {
    return response.json();
  }).then(function(data) {
    let titulo = document.getElementById("texto");
    let imagen = document.getElementsByTagName("img");
    titulo.innerHTML = data["name"];
    imagen[0].src = data["sprites"]["front_default"];
  }).catch(function(error) {
    console.log("Error: ", error);
  });
}