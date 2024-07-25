function contarElementosMayoresA10(array) {
  // Cuenta y devuelve la cantidad de elementos mayores a 10 en el array de números.
  // Tu código:
  var contador = 0;
  
for (var i = 0; i < array.length; i++) {
    
  if (array[i] > 10) {
      contador++;
      //contador+3; es otra forma de usar el ++ donde voy incrementando de 3 en 3 el ++ incrementa de uno
    }
  }
  
return contador;
}

module.exports = contarElementosMayoresA10;
