// For especifico para objeto iteraveis, como string ou arrays
// Que tem indices e a gente pode interar sobre eles

const nome = "Kawhan Laurindo";
const nomes = ["Kawhan", "Otavio", "Henrique"];

// Se quiser usar um contador além do seu indice
// for (let i = 0; i < nome.length; i++) {
//     console.log(nome[i]);
// }

// console.log("===============================");

// for (let letra in nome) {
//     console.log(nome[letra]);
// }

// Pegar o valor de uma vez em vez de indices colocados
// No for in caso você precise do indice pode ser facilmente acessado
for (let letra of nome) {
    console.log(letra);
}

console.log("\n===============================\n");

// Posso colocar para interar arrays também dessa forma
// Of pega os valores em vez de indices pode ser usado quando queremos uma verificação mais clara
// Se quise o valor
for (let nome of nomes) {
    console.log(nome);
}

console.log("\n===============================\n");

// Disponibilizada dentro de um array
// Função callback
// Pode somente mostra o valor como também pode ser tratado como indice;
// Pode ter o array completo também

nomes.forEach((nome, indice, array) => {
    console.log(`${indice} = ${nome} ${[array]}`);
});

// Não faz a minima diferença qual você vai utilizar
// Vai fazer diferença para quer você vai utilizar

// Para arrays os 3 vão funcionar
// Como objeto não é iteravel logos não conseguimos usar o for of

// For classico - Geralmente com iteráveis (arrays, strings)
// for in - retorna o indice ou chave (string, array, objeto)
// for of - Retrona o valor em si (iteraveis, array, string)
