//Elabore um algoritmo que receba um número (1-7) e devolva o dia da semana correspondente.

let numero = '3'
switch (numero) {
    case '1':
        console.log("Dia da Semana: " + 'Domingo')
        break
    case '2':
        console.log("Dia da Semana: " + 'Segunda')
        break
    case '3':
        console.log("Dia da Semana: " + 'Terça')
        break
    case '4':
        console.log("Dia da Semana: " + 'Quarta')
        break
    case '5':
        console.log("Dia da Semana: " + 'Quinta')
        break
    case '6':
        console.log("Dia da Semana: " + 'Sexta')
        break
    case '7':
        console.log("Dia da Semana: " + 'Sabado')
        break
 
    default: 
        console.log (`${numero} não é um numero valido somente numeros (1 ate 7).`)
}