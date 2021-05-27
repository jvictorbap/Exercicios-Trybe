let array = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let newArray = [];

let ultimo = array.length - 1;

for (let i = 0; i < array.length; i += 1) {
    if (i === ultimo) {
      newArray.push(array[i]*2);
    } else {
      newArray.push(array[i]*array[i+1]);
    }
}

console.log(newArray);