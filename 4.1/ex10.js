var produto = 200
var venda = produto * 1.2

if (produto < 0 || venda < 0){
  console.log("valor não pode ser menor que 0")
}

var lucro = venda - produto

var quantidade = 1000

console.log("Seu lucro sera de " + quantidade * lucro + " reais")

