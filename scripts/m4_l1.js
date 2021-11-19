
/*
  document.getElementById("id");
  document.getElementsByTagName("etiqueta");
  document.getElementsByClassName("clase");
  document.querySelector("selector de CSS");
  document.querySelectorAll("selector de CSS");
  varHTML.innerHTML; // El contenido del elemento
  varHTML.innerHTML = "nuevo contenido"; // Modificar el contenido
*/

let elemento = document.querySelector("#logo");
elemento.innerHTML = "Adios mundo";
// ¿Cómo agrego/quito una clase nueva a un elemento de HTML?
elemento.classList.replace("seleccionado", "rojo"); // add, remove, replace y toggle

// Cambiar el innerHTML de un elemento por su ID
let cuatro = document.getElementById("cuarto");
cuatro.innerHTML = "Elemento cuatro";

/* 
Obtener el innerHTML de todos los
elementos con clase "verde"
*/
// Almacenar en una variable (arreglo) todos
// Los elementos con clase "verde"
let verde = document.getElementsByClassName("verde");
let size = verde.length;
// Iterar por el arreglo y obtener su innerHTML
for(let indice = 0; indice < size; indice+=1) {
  // console.log(verde[indice].innerHTML);
}

/*
Obtener el innerHTML de todos los elementos
<li> con clase "verde"
*/
function cambiarARojo() {
  let verde2 = document.querySelectorAll("li.verde");
  for(let i = 0; i < verde2.length; i++) {
    verde2[i].classList.remove("verde");
    verde2[i].classList.add("rojo");
  }
}

// Cambia el source de la imagen
let imagen = document.getElementById("logo");
imagen.src = "../assets/webdesign.jpg";

// Agregar un evento de dar click a un boton
let btn = document.querySelector("button.verde");
btn.addEventListener("click", cambiarARojo);
