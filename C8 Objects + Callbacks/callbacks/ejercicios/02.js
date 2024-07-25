function cambiarCadena(string, callback) {
   // Aplica la función de callback al string y devuelve el resultado.
   // La función de callback se encargará de recibir el string y devolverlo con los cambios.
   // Si no se recibe una función callback entonces se debe retornar el string original.
   // Tu código:
   
// Verifica si se recibió una función de devolución de llamada
if (typeof callback === 'function') {
// Aplica la función de devolución de llamada al string
return callback(string); } 
else {
 // Si no se recibe una función de devolución de llamada, retorna el string original
return string;  }
}

module.exports = cambiarCadena;
