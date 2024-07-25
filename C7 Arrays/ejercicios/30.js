function encontrarElementoRepetido(numeros) {
  // La función recibe un argumento "numeros" que es un array de números.
  // Retorna el primer elemento repetido que se encuentre en el array.
  // Tu código:

  var elementosRepetidos = {};

  for (var i = 0; i < numeros.length; i++) {
    if (elementosRepetidos[numeros[i]]) {
      return numeros[i];
    } else {
      elementosRepetidos[numeros[i]] = true;
    }
  }

  return null;
}

module.exports = encontrarElementoRepetido;