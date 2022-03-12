// let a = "A"; // B
// let b = "B"; // C
// let c = "C"; // A

// Isso nada mais é que a atribuição por desestruturação
// O que esta do lado esquerdo do = é a  desestruturação
// Como essas variaveis já existem eu estou reatribuindo os valores delas
// Do lado direito é um array
// [a,b, c] = [1,2,3];

// console.log(a, b, c);

// Podemos também redeclarar dessa forma, passando um array que possui valores do lado direito
// const numeros = [3,4,5];

// [a,b,c] = numeros;

// console.log(a, b, c);


// Invertendo os valores
// [a,b, c] = [b, c, a];

// console.log(a, b, c);

// Explicando sobre: Com

//               0  1  2  3  4  5  6  7  8 
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// const primeiroNumero = numeros[0];

// console.log(primeiroNumero);


// Podemos de maneira mais facil arancar coisas do array e jogar dentro de valores usando nossa sintexe
// se vocÊ criar a atribuição com let todas vão ter de ser lets e se você criar com const todas terão de ser const

// const [primeiroNumero, segundoNumero] = numeros;
// console.log(primeiroNumero, segundoNumero);

// Pegar o resto do nosso array
// const [primeiroNumero, segundoNumero, ...resto] = numeros;
// console.log(primeiroNumero, segundoNumero);
// console.log(resto);

// Quando utilizamos o "..." para pegar o resto das coisas ele se chama rest operator, quando usamos para espalhar alguma coisa chamamos ele spread 

// Podemos também pular valores colocando vazio em meios
const [valor_1, ,valor_3, ,valor_5] = numeros;
console.log(valor_1, valor_3, valor_5);

// Professor disse que não gostava de usar isso ou seja tente evitar, porém conheça

const valores = [
//      0
//   0  1  2
    [1, 2, 3],
//      1
//   0  1  2
    [4, 5, 6],
//      2
//   0  1  2
    [7, 8, 9]
];
console.log(valores[1][2]);

// Maneira complexa
const [, [,,seis] ] = valores;
console.log(seis);

// Maneira simples
const [lista1, lista2, lista3] = valores;
const [,,numero_seis] = lista2;
console.log(numero_seis);