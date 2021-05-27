var array = ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']

function contadorDeLetras(array) {
  let maior = array[0].length;
  let maiorNome = array[0];
  for (var i = 0; i < array.length; i++) {
    if (array[i].length > maior) {
      maior = array[i].length
      maiorNome = array[i]
    }
  }
  console.log(maior);
  console.log(maiorNome);
}

contadorDeLetras(array)