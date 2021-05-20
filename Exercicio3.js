//Crie um algoritmo que leia o valor de um jantar, calcule e informe o valor da taxa do garçom (10%) e o valor total a ser pago.

let valorDoJantar = 100
const taxaDoGarcom = 10/100

valorDoGarcom = valorDoJantar * taxaDoGarcom
valorParaPagar = valorDoJantar + valorDoGarcom



console.log( " O Valor da taxa do garçom é: " +"R$"+valorDoGarcom+",00" + " " + "Preço a pagar" +" R$"+valorParaPagar+",00"+ " ")