let body = document.querySelector('body');

let h1 = document.createElement('h1');

body.appendChild(h1)

h1.innerHTML = 'Exercício 5.2 - JavaScript DOM';

let divMain = document.createElement('div');

body.appendChild(divMain);

divMain.classList.add("main-content");
// console.log(divMain.classList)

let centerContent = document.createElement('div');

centerContent.classList.add("center-content");

divMain.appendChild(centerContent);

let p = document.createElement('p');
p.innerHTML = "Somos Lindos";
centerContent.appendChild(p);

let divLeft = document.createElement('div');

divLeft.classList.add("left-content");

divMain.appendChild(divLeft);

let imagem = document.createElement('img');
imagem.src = "https://picsum.photos/200";
divLeft.appendChild(imagem);

let divRight = document.createElement('div');
divRight.classList.add("right-content");
divMain.appendChild(divRight);

let numbers = [
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    '10',
]

let numbersList = document.createElement('ul');

divRight.appendChild(numbersList);

for (let index of numbers) {
    let item = index;
    let number = document.createElement('li');
    number.innerText = item;
    numbersList.appendChild(number);
}

let hs3 = ['h31','h32','h33'];

for (var i of hs3){
  i = document.createElement('h3')
  i.classList.add('description')
  divMain.appendChild(i)
}

h1.classList.add("title")

divMain.removeChild(divLeft);

divMain.style.backgroundColor = "green";

divRight.style.margin = "0px auto";

while (numbers.length > 8){
numbersList.removeChild(numbersList.childNodes[8])
}

