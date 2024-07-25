function forEach(array, cb) {
  // Recibes un arreglo y un callback.
  // Itera sobre el arreglo y por cada elemento iterado, ejecuta el callback con este valor.
  // Tu código:
// Itera sobre el arreglo y por cada elemento iterado, ejecuta el callback con este valor.

array.forEach( function (elemento, indice) {
        cb(elemento, indice, array);
     });
}

module.exports = forEach;
