function esAnagrama(str1, str2) {
   // La función recibe dos argumentos "str1" y "str2" que son strings.
   // Determina si los dos strings son anagramas.
   // Devuelve true de ser así, sino retorna false.
   // IMPORTANTE: Un anagrama es una palabra que se forma
   // con las mismas letras que otra, pero en orden diferente.
   // Tu código:
   // Convierte los strings en arreglos de caracteres
var arr1 = str1.split("");
  
var arr2 = str2.split("");
  
// Ordena los arreglos de caracteres
  arr1.sort();
  arr2.sort();
  
// Convierte los arreglos de caracteres en strings

var sortedStr1 = arr1.join("");
  
var sortedStr2 = arr2.join("");
  
// Compara los strings ordenados para determinar si son anagramas

return sortedStr1 === sortedStr2;
}

module.exports = esAnagrama;
