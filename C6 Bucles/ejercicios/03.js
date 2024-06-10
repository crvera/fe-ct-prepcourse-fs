function obtenerMayor(x, y) {
  // "x" e "y" son números enteros.
  // Retorna el número más grande.
  // Si son iguales, retornar cualquiera de los dos.
  // Tu código:

  function obtenerMayor(x, y) {
    if (Number.isInteger(x) && Number.isInteger(y)) {
      if (x > y) {
        return x;
      } else {
        return y;
      }
    } else {
      return "Por favor, asegúrate de que los valores de x e y sean números enteros.";
    }
  }
  
}

module.exports = obtenerMayor;
