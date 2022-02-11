// IEEE 754-2008

let num1 = 1500.222; // number
let num2 = 2.5; // number

console.log(num1.toString() + num2); 
// quando eu uso o toString minha variavel continua sendo um number, porém no output vai se mostrar um comportamento de string.

// Se qualquer um dos números for uma string é realizado a concatenação

console.log(num1.toString(2)); // Representação binaria de nosso número

console.log(num2.toFixed(2));// COlocando para aparecer um número com apenas 2 casas decimais, no parenteses vai o número de casas decimais

console.log(Number.isInteger(num1)); //Retorna um verdadeiro ou falso ou seja um boolean, caso o número seja inteiro = True, caso o número seja não inteiro = falso


// Outra parte

let temp = num1 * 'Ola';

console.log(Number.isNaN(temp)); // Se a variavel tiver como NaN(Not a Number) ele vai retorna verdadeiro, caso contrario falso

// Lembrar que o javascript as vezes não tem a precisão de valores muito grande o que acaba gerando um número sem tanta proximidade com resultado, algumas vezes,usar ou Number ou parseFloat para mudar ou fazer com que os calculos sejam mais pertos do previsto

let num3 = 0.7;
let num4 = 0.1;

num3 += num4; //0.8

num3 += num4; //0.9

num3 += num4; //1.0

num3 += num4; //1.1

num3 += num4; //1.2

num3 += num4; //1.3

num3 += num4; //1.4

num3 += num4; //1.5

num3 = Number(num3.toFixed(2));

console.log(num3)

// COlocando exatamento o valor que queremos para questão do arredondamento

// num3 = ((num3 * 100) + (num4 *100)) / 100; //0.8

// console.log(num3);