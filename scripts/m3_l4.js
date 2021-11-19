
/*
  Programa para verificar si una variable es:
   - Positiva
   - Negativa
   - Neutra (0)

   Tipos de datos
   Entero:  -5 0 5   3.1416
   Texto:   "Este es mi texto" 'Este es mi otro texto'
   Bool:    true | false
   Arreglo: [5, 6, 7, 8, 9]
   Arreglo: ["A", "B", "C"]
   Arreglo: [true, false, true, true]
   Arreglo: [5, "A", true]
   Arreglo: [[], [], []]
*/

let numero = 0;
let texto = "El número " + numero;

// Lógica

if(numero > 0) {
  texto += " es positivo";
} else if(numero < 0) {
  texto += " es negativo";
} else {
  texto += " es neutro";
}

console.log(texto);