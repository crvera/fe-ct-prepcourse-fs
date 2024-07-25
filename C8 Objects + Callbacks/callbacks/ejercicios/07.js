function filter(arrayOfStrings) {
   // Debes identificar todos los elementos el arreglo que comiencen con la letra "a".
   // Luego retorna un nuevo arreglo con estos elementos.
   // Tu código:
    
// Utiliza el método filter para filtrar los elementos del arreglo que comiencen con la letra "a"

var newArray = arrayOfStrings.filter(function(elemento) {
     
return elemento.startsWith("a");
  });
  
// Retorna el nuevo arreglo con los elementos filtrados
return newArray;

}

module.exports = filter;
