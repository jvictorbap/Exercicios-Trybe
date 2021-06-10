window.onload =  function () {
  var estados = ["AC", "AL", "AM", "AP", "BA", "CE", "DF", "ES", "GO", "MA", "MT", "MS", "MG", "PA", "PB", "PR", "PE", "PI", "RJ", "RN", "RO", "RS", "RR", "SC", "SE", "SP", "TO"]

  var inputEstados = document.getElementById("estado")

  for (var i = 0; i < estados.length; i++){
    const estado = document.createElement("option")
    estado.innerHTML = estados[i]
    inputEstados.appendChild(estado)
  }

}

function resetButton () {
  
}

function preventDefault(event) {
  event.preventDefault();
}

function checkoutOff() {
  document.getElementById("enviar").addEventListener("click", preventDefault, false);
}

function checkoutOn() {
  document.getElementById("enviar2").addEventListener("click", preventDefault, false);
}

checkoutOff();