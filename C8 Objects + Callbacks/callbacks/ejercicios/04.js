function sumarArray(arrayOfNumbers, cb) {
   // Recibes un arreglo de números y un callback.
   // Suma todos los números del arreglo.
   // Este resultado debes pasárselo como argumento al callback recibido.
   // NOTA: no debes retornar nada.
   // Tu código:
   // Suma todos los números del arreglo.

var suma = arrayOfNumbers.reduce(function(acumulador, numero) {
     
return acumulador + numero;
}, 0 );
  
// Pasa el resultado como argumento al callback recibido.

  cb(suma);
}

module.exports = sumarArray;
