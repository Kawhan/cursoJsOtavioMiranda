const pessoa = {
    nome: 'Kawhan',
    sobrenome: 'Laurindo',
    idade: 30,
    endereco: {
        rua: 'rua secreta',
        numero: 320
    }
};

// Atribuição normal
// const nome = pessoa.nome;
// console.log(nome);

// Atribuição via desestruturação
// o nome da variavel tem que equivaler ao nome do atributo
// const { nome, sobrenome, idade } = pessoa;
// console.log(nome, sobrenome, idade);

// Suponhamos que não temos o valor, podemos setar um valor padrão para aquele objeto

// const pessoa_teste = {
//     nome: 'Kawhan',
//     sobrenome: 'Laurindo',
//     idade: 30,
//     endreco: {
//         rua: 'rua secreta',
//         numero: 320
//     }
// };

// const { nome = '', sobrenome, idade } = pessoa_teste;
// console.log(nome, sobrenome, idade);

// Podemos modificar o nome da variavel da seguinte forma colocando o valor do nosso objeto, : e o nome da variavel

// const { nome: n, sobrenome, idade } = pessoa;
// console.log(n, sobrenome, idade);

// Fazendo agora usando um o endereço que é um objeto dentro de outro objeto

// const { nome, sobrenome, endereco } = pessoa;
// console.log(nome, sobrenome, endereco);

// Podemos selecionar atributos dentro desse nosso objeto endereco, quando definimos dessa forma teremos as variaveis dentro das {} apos os :

// const { 
//     endereco: 
//         {
//             rua, 
//             numero
//         }, 
//     endereco } = pessoa;


// console.log(rua, numero, endereco);

// POdemos atribuir também os valores a outros nomes de variaveis e também delcarar um valor padrão caso ela n for encontrada

// const { 
//     endereco: 
//         {
//             rua: r, 
//             numero: n = 123456
//         }, 
//     endereco } = pessoa;


// console.log(r, n, endereco);

// Podemos também pegar o resto da variavel usando ...(nome da variavel)

const { nome, ...resto} = pessoa;
console.log(nome, resto);