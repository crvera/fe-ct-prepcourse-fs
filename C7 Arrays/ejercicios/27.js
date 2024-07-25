function dePalabrasAFrase(palabras) {
  // El argumento "palabras" es un arreglo de strings.
  // Retorna un string donde todas las palabras estén concatenadas,
  // con un espacio entre cada palabra.
  // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'.
  // Tu código:

  var frase = palabras.join('');
  return frase;
  //console.log (frase);
  
}
//var palabras = ['HOLA', 'PLANETA', "TIERRA", " SOY CESAR RAIMUNDO"];
//dePalabrasAFrase(palabras);
module.exports = dePalabrasAFrase;
