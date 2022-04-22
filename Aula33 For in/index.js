// Vetor = Array de uma única dimensão
//                 0         1      2         3
const frutas = ["Maçã", "goiaba", "Banana", "Pera"];

const nomes = [
    {
        nome: "Kawhan",
    },
    {
        nome: "Laurindo",
    },
    {
        nome: "Lima",
    },
];

const nomes_unicos = {
    nome: "Kawhan",
    sobrenome: "Laurindo",
    ultimo_nome: "Lima",
};

// iterar com esse array

// Maneira classica
for (let i = 0; i < frutas.length; i++) {
    console.log(frutas[i]);
}

// for in - Ler os indices ou chaves do objeto
// Basicamente ele não funciona como um contador aqui ele lê os indices
// Quando for um objeto ele vai ler as chaves
// Ou seja ele pega cada objeto em sí e vai lendo apartir dos indices desse obj

console.log("===============================================");
for (let indice in frutas) {
    console.log(frutas[indice]);
}

console.log("===============================================");
for (let indice in nomes) {
    console.log(nomes[indice].nome);
}

console.log("===============================================");
for (let indice in nomes_unicos) {
    console.log(nomes_unicos[indice]);
}

console.log("==================================================");
// Dessa forma ele pega os elementos de nosso objeto
for (let chave in nomes_unicos) {
    console.log(chave, nomes_unicos[chave]);
}

// Esse metodo de utilização é bom quando chegarmos em objetos
// Objetos são coisas do mundo real que podemos colocar atributos
// e também determinar ações

// Posso colcoar chaves e chamar meu atributo também

console.log("=================================================");

console.log(nomes_unicos["nome"]);

// Poderia colocar um chave para funcionar de maneira dinamica

console.log("=================================================");
const nome = "nome";
console.log(nomes_unicos[nome]);
