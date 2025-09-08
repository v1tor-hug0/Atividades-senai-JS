// let n = parseInt(prompt("Digite um numero"))

// for (let i = 1; i <= n; ++i) {
//     console.log(i)
// }


// let soma = 0 
// let i = 1 

// while(i <= 10) {
//     soma += i
//     console.log("O resultado atual e:" +soma)
//     i++
// }


// let numero = 1

// do {
//     console.log("Numero: " +numero)
//     numero++
// } while (numero <= 5)


//!foreach

let numeros = [1, 2, 3, 4, 5]

// numeros.forEach( function(numero) {
//     console.log("Numero: " +numero)
// }) 

// let frutas = ["Maca", "banana", "uva", "pera"]
// frutas.forEach( function(fruta) {
//     console.log("frutas " +fruta)
// })

for( let i = 0; i < numeros.length; i++) {
    console.log("Numero: " +numeros[i])
}