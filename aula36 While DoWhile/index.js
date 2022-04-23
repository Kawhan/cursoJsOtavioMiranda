// No for utilizamos quando temos um conceito relacionado a tamanho daquele laço
// Quando usamos while não sabemos quanto ao certo vamos utilizar de vezes aquele laço
// Posso também varrer um array
// Não sabe exatamente quando ele vai terminar é usado o while

// Se a condição for verdadeira o while vai ser executado
let controle = 0;

while (controle <= 10) {
    console.log(controle);
    controle++; //  atualizar a variavel de controle aqui
}

function aleatorio(min, max) {
    const random = Math.random() * (max - min) + min;
    return Math.round(random);
}

let rand = aleatorio(0, 50);

while (rand !== 10) {
    rand = aleatorio(0, 50);
    console.log(rand);
}

// A unica diferença entre while e do while é que o while primeiro verifica depois executa
// e o do while faz a execução dps verifica

// Do while sempre execulta pelo menos uma vez e depois testa
console.log("================================================");
rand = 10;
do {
    rand = aleatorio(0, 50); // Primeiro ele atualiza o valor imprimi e depois check a condição
    console.log(rand);
} while (rand !== 10);
