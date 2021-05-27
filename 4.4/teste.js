let string = 'arara';
tamanho = string.length;

function verificaPalindrome(string) {
  let contrario = [null];
  
  for(let index=tamanho; index >=0; index -=1){
    contrario.push += string[index];
  }
  if(contrario === string){
    return true;
  } else return false;
}

console.log(verificaPalindrome(string));