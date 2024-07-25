function map(array, cb) {
  // Itera sobre el arreglo y por cada elemento, pasárselo como argumento al callback.
  // Tiene que guardar el resultado devuelto por el callback en cada elemento dentro de un nuevo arreglo.
  // Retorna el nuevo arreglo.
  // Tu código:
  // Crea un nuevo arreglo vacío para almacenar los resultados de la transformación
var newArray = [];
 // Itera sobre el arreglo y aplica la función de transformación a cada elemento
for (var i = 0; i < array.length; i++) {
 // Llama al callback pasándole el elemento actual y guarda el resultado en el nuevo arreglo
newArray.push(cb(array[i]));
}
// Retorna el nuevo arreglo con los resultados de la transformación
return newArray;
}

module.exports = map;
