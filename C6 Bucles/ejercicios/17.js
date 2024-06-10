
  // La función recibe un color. Retorna el string correspondiente:
  // En caso que el color recibido sea "blue"   --> "This is blue".
  // En caso que el color recibido sea "red"    --> "This is red".
  // En caso que el color recibido sea "green"  --> "This is green".
  // En caso que el color recibido sea "orange" --> "This is orange".
  // Si no es ninguno de esos colores           --> "Color not found".
  // PISTA: utilizar el statement SWITCH.
  // Tu código:
  function colors(color) {
    switch (color) {
      case "blue":
        return "Este es azul.";
      case "red":
        return "Este es rojo.";
      case "green":
        return "Este es verde.";
      case "orange":
        return "Este es naranja.";
      default:
        return "Color no encontrado.";
    }
  }
  

module.exports = colors;
