function esPalindromo(string) {
  // La función recibe un argumento "string".
  // Verifica si este string es palíndromo o no.
  // Retorna true si lo es, caso contrario, retorna false.
  // IMPORTANTE: Un palíndromo es una palabra o frase
  // que se lee igual hacia adelante que hacia atrás.
  // Tu código:

  var stringInvertido = string.split('').reverse().join('');

  if (string === stringInvertido) {
    return true;
    //console.log (true);
  } else {
    return false;
    //console.log (false);
  }
}
//esPalindromo("ANILINA");
module.exports = esPalindromo;