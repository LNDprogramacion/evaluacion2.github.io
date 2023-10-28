var dni = prompt("Introduce tu número de DNI (sin letra)");
var letra = prompt("Introduce la letra de tu DNI (en mayúsculas)");

if (dni >= 0 && dni <= 99999999) {
    var resto = dni % 23;
    if (letra == letras[resto]) {
        alert("El número y la letra del DNI son correctos.");
    } else {
        alert("La letra indicada no es correcta.");
    }
} else {
    alert("El número proporcionado no es válido.");
}
