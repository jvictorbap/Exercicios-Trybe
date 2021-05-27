document.getElementById("header-container").style.backgroundColor = "green";

document.getElementById()

let salmon = document.querySelectorAll(".emergency-tasks div");

let salmonH3 = document.querySelectorAll(".emergency-tasks div h3");

for (let i = 0; i < salmon.length; i++){
  salmon[i].style.backgroundColor = "salmon"
}

for (let i = 0; i < salmonH3.length; i++){
  salmonH3[i].style.backgroundColor = "#9036E3"
}

let yellow = document.querySelectorAll(".no-emergency-tasks div");

for (let i = 0; i < yellow.length; i++){
  yellow[i].style.backgroundColor = "yellow"
}

let yellowH3 = document.querySelectorAll(".no-emergency-tasks div h3");

for (let i = 0; i < yellowH3.length; i++){
  yellowH3[i].style.backgroundColor = "black"
}

let footer = document.getElementsByTagName("footer")[0]

footer.style.backgroundColor = "black"