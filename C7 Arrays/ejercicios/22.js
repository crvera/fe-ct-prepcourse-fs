function tablaDelSeis() {
  // Devuelve un arreglo con los resultados de la tabla de multiplicar del 6 en orden creciente.
  // Desde 0 al 60.
  // Tu código:

  var tabla = [];
  for (var i = 0; i <= 10; i++) {
    var resultado = 6 * i;
    tabla.push(resultado);
    console.log(tabla[i]);
    
  }
  //return tabla;
  console.log(tabla);
}
tablaDelSeis();

function mostrarMesesDelAño() {
  var meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
  
  for (var i = 0; i < meses.length; i++) {
    console.log(meses[i]);
  }
}
mostrarMesesDelAño();
module.exports = tablaDelSeis;
