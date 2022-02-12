const array_real = [1, 2, 3]; // EU posso trocar os valores porque são valores por referencia, a unica coisa que eu não posso fazer é reatribuir esse valor

array_real.push(4);
array_real[0] = 'Luiz';

console.log(array_real);

// Para facilitar o armazenamento de varias variaveis ou valores podemos criar um objeto, desde que as variaveis possam ter relação entre si

// const nome01 = 'Luiz';
// const sobrenome01 = 'Miranda';
// const idade = 25;

// const nome02 = 'Maria';
// const sobrenome02 = 'Oliveira';
// const idade = 55;

// Poderia criar um objeto para armazenar todos esses valores de modo que ficasse mais organizado

// Para criar um objeto utilizamos as chaves, dentro desse objeto podemos criar atributos que vão funcionar do mesmo jeito de variaveis só que elas estão dentro da pessoa1

// const pessoa1 = {
//     nome: 'Luiz',
//     sobrenome: 'Miranda',
//     idade: 25
// };

// const pessoa2 = {
//     nome: 'Maria',
//     sobrenome: 'Oliveira',
//     idade: 55
// };

// Para acessar os valores dentro desse objeto podemos utilizar o ".";

// console.log(pessoa1.nome);
// console.log(pessoa1.sobrenome);


// Podemos criar uma função que crie esse objeto para mim

//                  Parametros
function criaPessoa(nome, sobrenome, idade) {
    return {
        nome: nome,
        sobrenome: sobrenome,
        idade: idade
    };
}

const pessoa1 = criaPessoa('Luiz', 'Otavio', 25); // Quando envio valores para minha função esses valores aqui dentro são chamados de argumentos


const pessoa2 = criaPessoa('Kawhan', 'Lima', 25);
const pessoa3 = criaPessoa('Matheus', 'Lima', 25);
const pessoa4 = criaPessoa('Ronellyson', 'Nicarrasio', 25);
const pessoa5 = criaPessoa('Rian', 'Manoel', 25);

console.log(pessoa1.nome);

// Podemos simplificar nossos valores dentro das funções colocando eles sem atribuição porque o proprio javascript já faz isso de maneira automatica

// function criaPessoa(nome, sobrenome, idade) {
//     return { nome, sobrenome, idade };
// }

// QUando uma função esta dentro de um objeto ela é chamado de metodo

const pessoa6 = {
    nome: "Kawhan",
    sobrenome: 'Laurindo',
    idade: 22,

    // Podemos criar uma função aqui dentro
    // Podemos referenciar qualquer atributo desse objeto usando this, this significa esse objeto nesse contexto
    
//  METODO
    fala() {
        console.log(`${this.nome} ${this.sobrenome} ${this.idade} está falando oi...`);
        console.log(`Minha idade atual é ${this.idade}`);
    },
//  METODO
    incrementaIdade () { 
        ++this.idade;
    }
};

pessoa6.fala();
pessoa6.incrementaIdade();
pessoa6.fala();