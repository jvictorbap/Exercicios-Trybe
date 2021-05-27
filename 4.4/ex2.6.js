var total = 0;
var numeroMaximo = 51;

function somaDeGaus(numeroMaximo) {

  for (var i = 0; i <= numeroMaximo; i++) {
    total += i;
  }
  console.log(total);
}

somaDeGaus(numeroMaximo)