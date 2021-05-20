//Elabore um algoritmo que receba dois números e determine qual é o maior entre eles, se os números forem iguais, mostre uma mensagem no console "Os números são iguais".

let numero1 = "a"
let numero2 = 3

if (numero1 > numero2){

    console.log(numero1 + " é maior que " + numero2);
}

else if(numero2 > numero1){
    console.log(numero2 + " é maior que " + numero1);
}
   
else if(numero1 === numero2){
    console.log(numero1 + " é igual a " + numero2);
}

else {
    console.log("Esse valor não é valido"); 
}
