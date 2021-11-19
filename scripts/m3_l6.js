
/*
  Hola mi nombre es Mario, tengo 26 años y soy de Veracruz
*/

function saludar(nombre="Humano", edad, estado) {
  let mensaje = "Hola mi nombre es " + nombre;
  mensaje += ", tengo " + edad + " años "
  mensaje += "y soy de " + estado
  return mensaje;
}

console.log("Código principal");
let resultado = saludar("Mario", 26, "Veracruz");
console.log(resultado);
