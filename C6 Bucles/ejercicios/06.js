function tieneTresDigitos(num) {
  // Si el número recibido tiene tres dígitos, retorna true.
  // Caso contrario, retorna false.
  // Tu código:
  function tieneTresDigitos(num) {
    if (num >= 100 && num <= 999) {
      return true;
    } else {
      return false;
    }
  }
  
}

module.exports = tieneTresDigitos;
