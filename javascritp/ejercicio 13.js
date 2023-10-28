var cadena_html = "<html><head><title>Prueba</title></head><body><h1>Prueba</h1><p>Este es un ejemplo <script>alert('Hola');</script>de código HTML.</p></body></html>";
var expresion_regular = /\<script\b[^>]*\>(.*?)\<\/script\>/gi;
var resultado = cadena_html.replace(expresion_regular, "");
console.log(resultado); 
