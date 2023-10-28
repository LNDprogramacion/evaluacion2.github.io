function tamanoVentanaNavegador() {
    var w = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    var h = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
    return {width:w, height:h};
  }
  
  document.addEventListener("click", function(event) {
    var x = event.clientX;
    var y = event.clientY;
    var width = tamanoVentanaNavegador().width;
    var height = tamanoVentanaNavegador().height;
  
    if (x < width/2 && y < height/2) {
      alert("Has hecho clic en la zona izquierda arriba.");
    } else if (x < width/2 && y > height/2) {
      alert("Has hecho clic en la zona izquierda abajo.");
    } else if (x > width/2 && y < height/2) {
      alert("Has hecho clic en la zona derecha arriba.");
    } else {
      alert("Has hecho clic en la zona derecha abajo.");
    }
  });
  
  var campoEntrada = document.getElementById("campo-entrada");
  var contadorCaracteres = document.getElementById("contador-caracteres");
  var maxCaracteres = 50;
  
  campoEntrada.addEventListener("input", function(event) {
    var longitudTexto = campoEntrada.value.length;
    contadorCaracteres.innerHTML = "Caracteres restantes: " + (maxCaracteres - longitudTexto);
  
    if (longitudTexto >= maxCaracteres) {
      if (event.keyCode == 8 || event.keyCode == 46 || event.keyCode == 37 || event.keyCode == 39) {
        return true;
      } else {
        return false;
      }
    }
  });
  