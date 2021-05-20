let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35];
var soma = 0;
var divMedia = numbers.length;
var total;

console.log(divMedia);

for (var number of numbers) {
  soma += number

  total = soma / divMedia;
}

console.log("Soma de Todos: " + soma)
console.log("Media: " + total)