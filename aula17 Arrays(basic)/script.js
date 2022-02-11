// Você pode imaginar os Arrays como sendo listas ou coleções de coisas.
// 

//                0        1        2
const alunos = ["Luiz", "Maria", "João"]; // Criando uma lista com nomes de alunos, para relacionar de maneira organizada colocar somente um tipo de dado dentro do nosso array. Lembrando que ele não restringe quais tipos de dados vai ter dentro do nosso componente de arrays, porém não é uma boa pratica de programação fazer isso.

// Arrays são indexados pelos elementos

console.log(alunos);
console.log(alunos[0][1]); // Pegando primeiro elemento e o indice de número 1 dele

// Editando possições no nosso array

alunos[0] = 'Eduardo'; // Editando nosso array de elementos em questão

console.log(alunos);

// Adicionando valores aos indices

alunos[3] =  "Luiza"; // Adicionando no indice 3 que não existe o nome Luiza

console.log(alunos);

// Saber o tamanho do nosso array

alunos[alunos.length] = "Pablo"; // Adicionando apartir do nosso length, dessa forma ele sempre coloca no último elemento
alunos[alunos.length] = "Fábio";
alunos[alunos.length] = "Luana";

console.log(alunos);
console.log(alunos.length);

// Colocando elementos no final do nosso array usando a função push

alunos.push("Otavio");

console.log(alunos);

// Colocando elementos no inicio do nosso array usando a função unshift

alunos.unshift('Marta');

console.log(alunos);

// Removendo elementos do final do meu array usando pop

const aluno_retirado = alunos.pop();

console.log(aluno_retirado);
console.log(alunos);

// Removendo elemenso do começo do meu array usando shift

const aluno_retirado2 = alunos.shift();

console.log(aluno_retirado2);
console.log(alunos);

// Tudo isso que for mudado altera os indices dos nossos elementos.


// Remover os elementos do meu array e não mecher nos indices


delete alunos[1]; // No indice que selecionamos no indice fica vazio
console.log(alunos);

// QUando selecionamos um indice que não se tem no nosso array a saida padrão é o undefined

console.log(alunos[50]);

// Usando o slice para recortar valores do nossos elementos

console.log(alunos.slice(0, 3)); // Dessa forma ele vai pegar os 3 primeiros elementos porque o elemento de indice 3 não é selecionado, ou seja o ultimo elemento quando acontece isso não é selecionado

console.log(alunos.slice(0, -1)); // Ele começa do final dessa forma ele vai eliminar do final um elemento

// Quando você utiliza arrays e usa o tipe of no javascript arrays são considerados objetos

console.log(typeof alunos);

// Vendo se o nosso elemento é um array

console.log(alunos instanceof Array); 

// Quando você tiver adicionando elementos no array de certa forma é melhor você ir adicionando no final para que possa melhorar a performace do programa