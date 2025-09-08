//!Primeiro
// for (let i = 1; i <= 10; ++i) {
//     console.log(i)
// }


//!Segundo
// let n = parseInt(prompt("digite um numero"))
// let resultado = 0

// for( let i = 0; i <= 10; ) {
//     resultado = n * i
//     console.log(resultado)
//     i++
// }

//!Terceiro

// let n = parseInt(prompt("Digite um numero"))
// let soma = 0

// for(let i = 0; i <= n;) {
//     soma += i
//     i++
// }
// console.log(soma)

//!Primeiro intermediario

// for( let i = 0; i <= 50; i++) {
//     if( i % 2 == 0) {
//         console.log(i)
//     }
// }


//!Segundo


// //! Exercicio 2


// let numero = Math.floor(Math.random() * 100) + 1;
// chute = parseInt(prompt("Adivinhe o número sorteado entre 1 e 100:"));

// while (chute != numero) {
    
//      if (chute > numero) {
//     chute = parseInt(prompt("Numero Menor tente novamente"));
// } 
// else if (chute < numero) {
//     chute = parseInt(prompt("Numero maior tente novamente"));
// } 
// }       
//  alert("Boa man se ganhou o numero certo era: " + numero);


//!Terceiro
// let n = parseInt(prompt("Digite um numero"))

// console.log(n)

// while( n >= 0)
// {
//     n--
//     console.log(n)
// }


//!Primeiro avancado

// let numero = parseInt(prompt("Digite um número inteiro positivo:"));

// let soma = 0;

// while (numero > 0) {
//   soma += numero % 10;            
//   numero = Math.floor(numero / 10); 
// }

// console.log("A soma dos dígitos é: " + soma);
// alert("A soma dos dígitos é: " + soma);


//!Segundo avancado

let n = parseInt(prompt("Digite um número inteiro positivo:"));
numero = n

for(let i = 0; i <= numero;) {
    numero * (n - 1)
}