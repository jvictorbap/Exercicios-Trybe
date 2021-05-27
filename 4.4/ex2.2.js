var array = [2, 3, 6, 7, 10, 1];

function test(array){
  var maior = 0;
  for (var i = 0; i < array.length; i++){
    if (array[i] > maior){
      maior = array[i];
    }
  }
  console.log(maior)
  console.log(array.indexOf(maior))
}
test(array);