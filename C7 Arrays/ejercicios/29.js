function encontrarNumeroFaltante(numeros) {
  // La función recibe un argumento "numeros" correspondiente a un array de números.
  // Encuentra el número faltante en una secuencia de números enteros consecutivos
  // y retórnalo.
  // Devuelve null si el array es vacío o si no hay números faltantes.
  // Tu código:

  if (numeros.length === 0) {
    return null;
  }

  var n = numeros.length + 1;
  var sumaTotal = (n * (n + 1)) / 2;
  var sumaActual = 0;

  for (var i = 0; i < numeros.length; i++) {
    sumaActual += numeros[i];
  }

  var numeroFaltante = sumaTotal - sumaActual;

  if (numeroFaltante === 0) {
    return null;
  } else {
    return numeroFaltante;
  }

}

module.exports = encontrarNumeroFaltante;