function invertirTexto(texto) {
  // La función recibe un argumento "texto" que es un string.
  // Tu objetivo es invertir el string y devolver el string invertido.
  // Tu código:

  var textoInvertido = "";

  for (var i = texto.length - 1; i >= 0; i--) {
    textoInvertido += texto.charAt(i);
  }

  return textoInvertido;
  //console.log (textoInvertido);
}

//var texto = "CESAR RAIMUNDO VERA";
//invertirTexto(texto);
module.exports = invertirTexto;
