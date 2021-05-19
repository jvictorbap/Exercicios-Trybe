const nomePeca = "CAVALO"

switch (nomePeca.toLowerCase()) {
  case "bispo":
    console.log("diagonais")
    break
  case "torre":
    console.log("retas")
    break
  case "rainha":
    console.log("retas e diagonais")
    break
  case "cavalo":
    console.log("movimento em L")
    break

  default:
    console.log("essa peça não existe")  
}