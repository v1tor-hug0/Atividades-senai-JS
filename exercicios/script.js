// //!Exercicio 1
// let idade = prompt("Digite sua idade: ");

// if (idade > 18) {
//     console.log("maior de idade");
// } else {
//     console.log("menor de idade");
// }


// //!Exercicio 2
// let numero = prompt("Digite um numero")

// if (numero > 0) {
//     console.log("Positivo");
// } else {
//     console.log("negativo");
// }


// //!Exercicio 3
// let nota = prompt("Digite uma nota")

// if (nota > 60) {
//     console.log("Aprovado");
// } else {
//     console.log("reprovado");
// }


// //!Exercicio 4
// let numero2 = prompt("Digite um numero")

// if (numero2 > 0) {
//     console.log("Positivo");
// } else if( numero2 < 0) {
//     console.log("negativo");
// } else {
//     console.log("Zero")
// }



// //!Exercicio 5

// let idade2 = prompt("Digite uma idade");

// if (idade2 <= 12) {
//     console.log("crianca")
// }
//  else if (idade2 > 12 && idade2 <= 17) {
//     console.log("adolescente")
// }
//  else {
//     console.log("adulto")
// }

// //!Exercicio 6

// let numero3 = prompt("Digite um numero")

// if(numero3 % 2) {
//    alert("impar")
// } 
// else {
//    alert("par")
// }



//!!INTERMEDIARIO

//!Exercicio 1


// let numero4 = prompt("Digite o primeiro numero") ;
// let numero4Int = parseInt(numero4)
// let operador = prompt("Digite o operador:");
// let numero5 = parseInt(prompt("Digite o segundo numero"));
// let numero5Int = parseInt(numero5)
// let resultado = 0;

// if(operador == "+") {
//     resultado = numero4Int + numero5Int;
//     console.log(resultado)
// } 
// else if (operador == "-") {
//    resultado = numero4Int - numero5Int;
//    console.log(resultado)
// }
// else if (operador == "*") {
//    resultado = numero4Int * numero5Int;
//    console.log(resultado)
// }
// else if (operador == "/") {
//    resultado = numero4Int / numero5Int;
//    console.log(resultado)
// }



//!Exercicio 2

// let maior1 = parseInt(prompt("Digite o primeiro numero"));
// let maior2 = parseInt(prompt("Digite o segundo numero"));
// let maior3 = parseInt(prompt("Digite o terceiro numero"));

// if(maior1 > maior2 && maior1 > maior3) {
//     alert("Primieiro numero eh maior")
// }
// else if ( maior2 > maior1 && maior2 > maior3) {
//     alert("Segundo numero eh maior")
// }
// else if ( maior3 > maior1 && maior3 > maior2) {
//     alert("Terceiro numero eh maior")
// }

//!Exercicio 3

// let valor = parseInt(prompt("Digite o valor:"))
// if(valor > 100) {
//    novoValor = valor - valor * 0.1;
//    alert("Novo valor descontado:" + novoValor);  
// } else {
//     alert("Nao recebera desconto");
// } 


//!exercicio 4 

// let user = prompt("Digie o usuario");
// let senha = prompt("Digite a senha");

// if ( user == "admin" && senha == "1234")
// {
//     alert("Bem vindo");
// } 
// else {
//     alert("negado");
// }


//!Avancado 

// let lado1 = parseInt(prompt("Digite o lado 1"))
// let lado2 = parseInt(prompt("Digite o lado 2"))
// let lado3 = parseInt(prompt("Digite o lado 3"))

// if (lado1 == lado2 && lado2 == lado3 && lado1 == lado3)
// {
//     alert("Equilatero")
// } 
// else if (lado1 == lado2 && lado2 == lado3 && lado1 != lado3 ) {
//     alert("Isoceles")
// }
// else if (lado1 == lado2 && lado2 != lado3 && lado1 == lado3)
// {
//     alert("Isoceles")
// }
// else if (lado1 != lado2 && lado2 == lado3 && lado1 == lado3)
// {
//     alert("Isoceles")
// }
// else if (lado1 != lado2 && lado2 != lado3 && lado1 != lado3)
// {
//     alert("Escaleno")
// }


//!Exercicio 2

// let nota = parseInt(prompt("Digite uma nota de 0-100: "))

// if(nota >= 90) {
//     alert("Conceito A")
// }
// if(nota >= 80 && nota <= 89) {
//     alert("Conceito B")
// }
// if(nota >= 70 && nota <= 79) {
//     alert("Conceito C")
// }
// if(nota >= 60 && nota <= 69) {
//     alert("Conceito D")
// }
// if(nota < 60) {
//     alert("Conceito F")
// }


// //!Exercicio 3

// let altura = parseFloat(prompt("Digite sua altura"));
// let peso = parseFloat(prompt("Digite seu peso"));
// let imc = parseFloat(peso / (altura * altura))

// if (imc < 18) {
//     alert("Abaixo do peso " + imc )
// } else if (imc >= 19 && imc <= 25) {
//     alert("Normal " + imc)
// } else if (imc >= 26 && imc <= 30) {
//     alert("sobrepeso " +imc)
// } else if (imc > 30) {
//     alert("Obeso " +imc)
// }

let ano = parseFloat(prompt("Digite o Ano"))
let bissexto = false

 if(ano % 400 == 0){
  bissexto = true}
 else if(ano % 100 == 0){
  bissexto = false}
 else if(ano % 4 == 0){
  bissexto = true}

  if(bissexto == true){
    alert("Ano Bissexto")
  }
  else{
    alert("Ano normal")
  }