//Crie um algoritmo que receba três notas de um aluno, calcule sua média e mostre as seguintes mensagens de acordo com cada situação:

    //- Se a media for igual ou maior que 7 - Aprovado
    // - Se a media for maior e igual a cinco e menor que 7 - Recuperação
    //- Se a media for menor que 5 - Reprovado

    let primeiraNota = 6
    let segundaNota = 7
    let terceiraNota = 2

    Soma = primeiraNota + segundaNota + terceiraNota 
let media = Soma/3

    if (media >= 7){
        console.log("Aluno Aprovado Parabens")
    }else if(media >=5 && media < 7){
        console.log("Aluno em Recuperação")
    }else {
        console.log("Aluno Reprovado")
    }