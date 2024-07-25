// "x" e "y" son números enteros.
// Retorna el número más grande.
// Si son iguales, retornar cualquiera de los dos.
// Tu código:
function obtenerMayor(x, y) {
  if (typeof x === 'number' && typeof y === 'number') {
    if (x > y) {
      return x;
      //console.log ("La variable X es mayou que Y: ", x);
    } else if (y > x) {
      return y;
      //console.log ("La variable Y es mayou que X: ", y);
    } else if (x === y) {
      return x;
      //console.log ("Ambas  variables X e Y son IGUALES: ", x);
    }
  } else {
    return 'ambos valores tienen que ser números';
    //console.log ("ambos valores tienen que ser números: ");
  }
}
//obtenerMayor(6, 9);
module.exports = obtenerMayor;
