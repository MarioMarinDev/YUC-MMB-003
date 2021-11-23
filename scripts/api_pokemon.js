
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const id = urlParams.get("id");

let url = "https://raw.githubusercontent.com/MarioMarinDev/YUC-MMB-003/master/data/pokemon.json";
fetch(url).then(function(response) {
  return response.json();
}).then(function(data) {
  console.log(data);
  let info = data["pokemon"][id];
  let name = document.getElementById("name");
  let image = document.getElementById("image");
  name.innerHTML = info["name"];
  image.src = info["image"];
}).catch(function(error) {
  console.log("Error: ", error);
});