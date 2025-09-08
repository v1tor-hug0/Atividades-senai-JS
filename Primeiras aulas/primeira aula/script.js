// let nome = "vitor";
// let idade = 18;

// console.log("Oi, meu nome e " + nome + ", tenho " + idade + " anos" );

// let mensagem = `Ola meu nome e ${nome}`;
// alert(mensagem);

// let temperatura = 12 

// if (temperatura > 25) {
//     console.log("calor")
// }
// else {
//     console.log ("frio")
// }

// let nomeUser = prompt("digite seu nome")
// alert( nomeUser + " bobao")

// let nota = parseInt(prompt("Digite a nota: "))

// if (nota >= 6) {
//     alert("Passou")
// } 
// else {
//     alert("Reprovou")
// }



// let saldo = 90 

// let podeComprar = saldo >= 100 ? "Compra aprovada" : "Saldo insuficiente"


// let hora = 8
// let diaSemana = "terca"

// if (hora >= 6 && hora <= 12) {
//     if (diaSemana == "segunda") {
//         console.log("Boa segunda")
//     }
//     else {
//         console.log("Boa tarde")
//     }
// } else {
//     console.log("Boa noite")
// }


let dia = 2

switch (dia) {
    case 1:
        console.log("Domingo");
        break;

    case 2:
        console.log("Segunda");
        break;
    case 3:
        console.log("terca");
        break;
    case 4:
        console.log("quarta");
        break;
    case 5:
        console.log("quinta");
        break;
    case 6:
        console.log("sexta");
        break;
    case 7:
        console.log("sabado");
        break;

    default:
        console.log("dia invalido")
        break;
}