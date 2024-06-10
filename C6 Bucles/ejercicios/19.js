
  // La función recibe un número "n" por argumento.
  // Devuelve la suma de todos los números desde 1 hasta n.
  // Tu código:
  function sumarHastaN(n) {
    let suma = 0;
    for (let i = 1; i <= n; i++) {
      suma += i;
    }
    return suma;
  }
  

module.exports = sumarHastaN;
