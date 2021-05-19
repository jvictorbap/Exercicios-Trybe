var salarioBruto = 8900.00
var aliquotaINSS;
var salarioMenosAliquota;
var salarioAposAliquota;
var contaINSS;


// ALIQUOTA INSS
if (salarioBruto < 1556.94){
  aliquotaINSS = 0.08
  contaINSS = salarioBruto * aliquotaINSS
  salarioAposAliquota = salarioBruto - contaINSS
} else if (salarioBruto > 1556.95 && salarioBruto < 2594.92){
  aliquotaINSS = 0.09
  contaINSS = salarioBruto * aliquotaINSS
  salarioAposAliquota = salarioBruto - contaINSS
} else if (salarioBruto > 2594.93 && salarioBruto < 5189.82){
  aliquotaINSS = 0.11
  contaINSS = salarioBruto * aliquotaINSS
  salarioAposAliquota = salarioBruto - contaINSS
} else {
  salarioAposAliquota = salarioBruto - 570.88
}

console.log(salarioAposAliquota)

var aliquotaIR;
var contaIR;
var contaIR2;
var salarioAposAliquotaIR;
// ALIQUOTA IR
// console.log(salarioAposAliquota)
if (salarioAposAliquota < 1903.98){
  return
} else if (salarioAposAliquota > 1903.99 &&  salarioAposAliquota < 2826.65){
  var ir1 = 142.80
  aliquotaIR = 0.075
  contaIR = salarioAposAliquota * aliquotaIR
  contaIR2 = contaIR - ir1
  salarioAposAliquotaIR = salarioAposAliquota - contaIR2
} else if (salarioAposAliquota > 2826.66 &&  salarioAposAliquota < 3751.05){
  var ir1 = 354.80
  aliquotaIR = 0.15
  contaIR = salarioAposAliquota * aliquotaIR
  contaIR2 = contaIR - ir1
  salarioAposAliquotaIR = salarioAposAliquota - contaIR2
} else if (salarioAposAliquota > 3751.06 && salarioAposAliquota < 4664.68){
  var ir1 = 636.13
  aliquotaIR = 0.225
  contaIR = salarioAposAliquota * aliquotaIR
  contaIR2 = contaIR - ir1
  salarioAposAliquotaIR = salarioAposAliquota - contaIR2
} else if (salarioAposAliquota > 4464.68){
  var ir1 = 869.36
  aliquotaIR = 0.275
  contaIR = salarioAposAliquota * aliquotaIR
  contaIR2 = contaIR - ir1
  salarioAposAliquotaIR = salarioAposAliquota - contaIR2
}

console.log(salarioAposAliquotaIR)