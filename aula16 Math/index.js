let num1 = 9.54578;

// Aredondado o valor para baixo
let num2 = Math.floor(num1);
console.log(num2);

// Aredondado o valor para cima
let num3 = Math.ceil(num1);
console.log(num3);

// Aredondado o valor para o mais proximo
let num4 = Math.round(num1);
console.log(num4);

// Encontrando o maior número de uma sequencia
console.log(Math.max(1, 2, 3, 4, 5, -10, -50, 5000, 9, 8, 6));

// Encontrando o menor valor de uma sequencia
console.log(Math.min(1, 2, 3, 4, 5, -10, -50, 5000, 9, 8, 6));

// Gerar números aleatorios, se não especificar dentro dos parentes o range ele coloca entre 0 e 1
let aleatorio = Math.random() * (10 - 5) + 5; // Colocando meu número aleatorio entre 10 e 5, (numeroMax - numeroMin) + numeroMin

aleatorio = Math.round(Math.random() * (10 - 5) + 5); // Aredondado os valores para os mais proximos

console.log(aleatorio);// console.log(Math.random());

// Valor de PI
console.log(Math.PI);

// Fazendo potenciação dos números
console.log(Math.pow(2, 3));

// Pegando a raiz quadrada sem função
let num5 = 9;
console.log(num5 ** (1/2));
console.log(num5 ** 0.5);

// Em Javascript podemos dividir um número por 0, mas a resposta que vai vim é relacionado a saida "Infinity" e ainda retorna verdadeiro como resposta booleana para a conta, quanto mais perto do valor de 0 absoluto ele retorna infinity que é quando o valor não pode ser alocado na memoria
