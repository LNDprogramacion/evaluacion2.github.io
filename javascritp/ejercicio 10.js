function esPalindromo(cadena) {
    cadena = cadena.toLowerCase().replace(/\s/g, '');
    
    var invertida = cadena.split('').reverse().join('');
    
    if (cadena === invertida) {
      return true;
    } else {
      return false;
    }
  }