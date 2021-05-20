//Escreva um programa que pergunte a quantidade de km percorridos por um carro alugado pelo usuário, assim como a quantidade de dias pelos quais o carro foi alugado. Calcule o preço a pagar, sabendo que o carro custa 60,00 reais por dia e 0,15 centavos por km rodado.

let kmPercorridos = 200
let quantidadeDeDias = 2

custoKm = parseFloat (kmPercorridos * 0.15)
custoDia = parseFloat (quantidadeDeDias * 60)

precoPagar = custoKm + custoDia

console.log("O valor a pagar :" +" R$"+precoPagar+",00"  )




