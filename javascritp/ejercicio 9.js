function cadenaInfo(cadenaTexto) {
    if (cadenaTexto === cadenaTexto.toUpperCase()) {
      console.log("La cadena está formada sólo por mayúsculas.");
    } else if (cadenaTexto === cadenaTexto.toLowerCase()) {
      console.log("La cadena está formada sólo por minúsculas.");
    } else {
      console.log("La cadena está formada por una mezcla de mayúsculas y minúsculas.");
    }
  }
  