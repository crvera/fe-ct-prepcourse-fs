function esArrayNoVacio(arr) {
  // La función recibe un argumento "arr".
  // Comprueba si este argumento es un array y si tiene al menos un elemento.
  // Si es así, retorna true, de lo contrario, retorna false.
  // Tu código:

  if (Array.isArray(arr) && arr.length > 0) {
    return true;
  } else {
    return false;
  }
}
// Abajo vemos unos ejemplosde utilizacion del js
var x;
var resultado= typeof(x);
console.log (resultado);
let myvar = (5 > 3) && (3 < 4) || (4 < 3);
console.log (myvar);
module.exports = esArrayNoVacio;