var palavra = "pinto";

function palindromo(palavra) {

  const string = palavra.split("").reverse().join("")

  if (string === palavra) {
    return (true)
  } else return (false)
}
console.log(palindromo(palavra))