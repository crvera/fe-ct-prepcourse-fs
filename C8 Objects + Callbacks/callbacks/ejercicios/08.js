const buscarElemento = (array, callback) => {
  // Busca un elemento en el array y retornalo.
  // Si el elemento no se encuentra, devuelve el mensje "No se encontró el elemento".
  // La función de callback es la encargada de evaluar si el elemento fue encontrado.
  // Tu código:
   
// Utiliza el método find para buscar el elemento en el arreglo

 const elementoEncontrado = array.find(callback);
  
// Si el elemento fue encontrado, se retorna el elemento
if (elementoEncontrado) {
 return elementoEncontrado;
}
  
// Si el elemento no fue encontrado, se devuelve el mensaje "No se encontró el elemento"
return "No se encontró el elemento";
};

module.exports = buscarElemento;
