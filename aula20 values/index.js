/* 
Primitivos (valores imutáveis) - string, number, boolean, undefined, null, (bigint, symbol) =  Valores copiados, ou seja, se tiver 20 valores todos eles vão ser independentes

Quando falamos de imutáveis queremos dizer que não podemos modificar nada neles

Referência (mutável) - array, object, function = Passados por referência, ou seja, quando declaramos 20 valores e associamos eles, todos apontam para o mesmo lugar
*/

// Nesse caso não estamos trocando diratamento o dado primitivo estamos no caso trocando o valor da variavel
let nome = 'Luiz';
nome = 'Otavio';
console.log(nome);


// Quando tratamos de valores primitivos quando associamos dessa forma estamos nos referindo a copia, ou seja, a não depende de b e nem b depende de a
let a = 'A';
let b = a; // Cópia
console.log(a, b);

a = 'Outra coisa';
console.log(a, b);

// QUando falamos por dados passados por referencia queremos dizer que esses dados apontam para o mesmo lugar de memoria
let array_a = [1, 2, 3];
let array_b = array_a;
console.log(array_a, array_b);

array_a.push(4); //  Adicionando um valor em um, como ambos apontam para o mesmo lugar na memoria os 2 vão ser mudados
console.log(array_a, array_b);

array_b.pop(); // Retirando um valor de um, como ambos apontam para o mesmo lugar na memoria os 2 vão ser mudados
console.log(array_a, array_b);

// [...a] colocando dessa forma evidenciamos que o valor de a foi copiado para um valor que for atribuido


const pessoa_a = {
    nome: "Kawhan",
    sobrenome: "Laurindo"
};

const pessoa_b = pessoa_a;


pessoa_a.nome = 'Luiz';
console.log(pessoa_b);

// Podemos também copiar o valor de a, dessa maneira quando mudarmos algo em a ele não vai mudar nada em b {...pessoa_a} , tornando assim valores independentes