const verdadeira = true;

// let nome = 'Kawhan'; // criando
// var nome2 = 'Kawhan';

// Não podemos redeclarar o let, porém se fosse var podemos

// Let tem escopo de bloco { ... }
// Var só tem escopo de função
// A engine de javascript sempre vai procurar a variavel let dentro do bloco se ele não encontrar ele passa para o de cima e por ai vai
// Se no bloco colocamos a declaração de let depois da executar um comando ela vai apontar um erro, porque ela esta dentro do bloco porém não pode ser usada

// var nome2 = 'Lima'; // redeclarada
// console.log(nome2);
// Var quando colocada dentro de um escopo não vai criar outra e sim redeclarar a variavel novamente


// if (verdadeira) {
//     mesmo tendo nomes iguais estamos criando 2 variaveis
//     let nome = 'Lima'; // criando
//     console.log(nome, nome2);

//     if (verdadeira) {
//         cada variavel vai ser diferente e cada uma vai representar um bloco
//         let nome = 'Laurindo';
//         console.log(nome, nome2);
//     }
// }


// Se fora da função eu colocar um console.log com nome da variavel definida dentro dela vai da um erro
// Bloco da função é especial




function falaOi () {
    var nome2 = "Laurindo";
    console.log(nome2);
}

// Nossa variavel pode ser criada fora e chamada dentro da função porém não pode aconter ao contrario
// As mesmas coisas que acontecem no if normal no escopo global, também acontecem com nossos ifs dentro do escopo da função
// let sobrenome = 'Miranda';

// function falaSobrenome () {
//     console.log(sobrenome);
// }

// Testando

// function falaTeste() {
//     var nome = "K";
// }

// if (verdadeira) {
//     var nome = "Kawhan"
// }

// console.log(nome);

// falaOi();
// falaSobrenome();
// falaTeste();



//                                      Hoisting

// Todas as funções criadas com var e as funções criadas com function, são elevados para cima no topo do arquivo, variaveis com var são lidar e elevadas para cima
// Porém isso não acontece com let, quando declaro depois do nosso console ou executado um comando ele vai da um erro dizendo que a variavel ainda não foi declarada
// Somente declarações regulares de função sofrem o hosting

console.log(sobrenome);

var sobrenome = "Kawhan";

console.log(nome);

let nome = "Lima";