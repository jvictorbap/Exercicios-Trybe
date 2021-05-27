var ast = 4
if (ast > 1) {
  for (var i = 0; i < ast; i++) {
    var coluna = "";
    for (var j = 0; j < ast; j++) {
      coluna += "*"
    }
    console.log(coluna)
  }
} else {
  console.log("o Numero de asterisco deve ser maior que 1")
}