
/*
                0,      1,      2
  let nums = ["uno", "dos", "tres"];
  nums.length; => La cantidad de valores de un arreglo
  nums[índice]; => Obtener un dato en específico
  nums[índice] = "cuatro"; => Cambiar un valor por otro nuevo
  nums.push("cuatro"); => Agregar un nuevo valor al final
  nums.unshift("cero"); => Agrega un nuevo valor al inicio
  nums.pop(); => Elimina el último valor de mi arreglo
  nums.shift(); => Elimina el primer valor de mi arreglo
*/
            //   0        1           2       3       4         5
var colores = ["verde", "amarillo", "rojo", "rosa", "morado", "negro"];
colores.push("blanco");


for(i = 0; i < colores.length; i += 1) {
  console.log(colores[i]);
}

console.log("Fin del programa.");
