let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

var impar = [];

for (let i of numbers){
  if (i % 2 == 1){
    impar.push(i);
    console.log(impar)
  }
}