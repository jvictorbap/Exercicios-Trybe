const nota = -1

const multiplicacao = nota * 10

if (multiplicacao > 100 || multiplicacao < 0) {
  console.log("erro")
} else if(multiplicacao >= 90){
  console.log("A")
} else if (multiplicacao < 90 && multiplicacao >= 80){
  console.log("B")
} else if (multiplicacao < 80 && multiplicacao >= 70){
  console.log("C")
} else if (multiplicacao < 70 && multiplicacao >= 60){
  console.log("D")
} else if (multiplicacao < 60 && multiplicacao >= 50){
  console.log("E")
} else if (multiplicacao < 50){
  console.log("F")
}