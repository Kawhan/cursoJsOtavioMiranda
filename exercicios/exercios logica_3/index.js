// Escreva uma função que recebe um número
// retorne o seguite:
// Numero é divisivel por 3 = Fizz
// Numero é divisivel por 5 = Buzz
// Numero é divisivel por 3 e 5 = FizzBuzz
// Numero não é divisivel por 3 e 5 = Retorna o proprio numero
// Checar se o número é realmente um número
// Use a função com números de 0 a 100

function fizzBuzz(numero) {
    if (typeof numero === "number" && 0 <= numero && numero <= 100) {
        if (numero % 3 === 0 && numero % 5 === 0) return "FizzBuzz";
        if (numero % 3 === 0) return "Fizz";
        if (numero % 5 === 0) return "Buzz";
        if (numero % 3 !== 0 && numero % 5 !== 0) return numero;
    }

    return 0;
}

console.log(fizzBuzz(3)); // Fizz
console.log(fizzBuzz(5)); // Buzz
console.log(fizzBuzz(15)); // FizzBuzz
console.log(fizzBuzz(30)); // FizzBuzz
console.log(fizzBuzz(-10)); // Invalid 0
console.log(fizzBuzz(104)); // Invalid 0
console.log(fizzBuzz(7)); // 7

// professor resolução
function FizzBuZZ(numero) {
    if (typeof numero !== "number") return numero;
    if (numero % 5 === 0 && numero % 5 === 0) return "FizzBuzz";
    if (numero % 3 === 0) return "Fizz";
    if (numero % 5 === 0) return "Buzz";
    return numero;
}

for (let i = 0; i <= 100; i++) {
    console.log(i, FizzBuZZ(i));
}
