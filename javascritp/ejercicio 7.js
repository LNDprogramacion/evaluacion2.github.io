var inputNumber = prompt('Por favor, ingrese un número entero');
var total = 1;

for (i = 1; i <= inputNumber; i++) {
    total = total * i;
}

console.log(inputNumber + '! = ' + total);
