// Escreva uma função que receba 2 numeros e retorna o maior deles

// Minha resposta
function maiorNumero(num1, num2) {
    if (num1 >= num2) {
        return num1;
    }

    if (num1 <= num2) {
        return num2;
    }
}

console.log(maiorNumero(1, 2));
console.log(maiorNumero(3, 1));
console.log(maiorNumero(5, 5));

console.log(
    "\n================================================================\n"
);
// Refatorando com professor
function maiorNumero2(num1, num2) {
    if (num1 >= num2) return num1;
    return num2;
}

console.log(maiorNumero2(1, 2));
console.log(maiorNumero2(3, 1));
console.log(maiorNumero2(5, 5));

console.log(
    "\n================================================================\n"
);

// Refatorando com professor
function maiorNumero3(num1, num2) {
    return (numeroMaior = num1 >= num2 ? num1 : num2);
}

console.log(maiorNumero3(1, 2));
console.log(maiorNumero3(3, 1));
console.log(maiorNumero3(5, 5));

console.log(
    "\n================================================================\n"
);

// Refatorando com professor
// se eu colocar a arrow function só com uma linha
// eu posso simplesmente retirnar o return
// que já deixa implicito que aquilo vai ser retornado

const max = (num1, num2) => (numeroMaior = num1 >= num2 ? num1 : num2);

console.log(max(1, 2));
console.log(max(3, 1));
console.log(max(5, 5));
