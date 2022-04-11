//                 01234567
let stringTeste = "Um teste"; // String são indexadas, ou seja, possuem indices para cada elemento começando do 0, pegando um número que não aponte para nada vai da undefined

let stringFrase = "o rato roeu a roupa do rei de roma.";

console.log(stringTeste[4]);

console.log(stringTeste.charAt(4)); // Pegar a letra relativo ao número que esta sendo passado

console.log(stringTeste.concat(" para ajudar a entender strings")); // Mesma coisa da concatenação com +

console.log(stringTeste.indexOf("texto")); // Para encontrar o indice inicial de onde está começando o que você procura, se não for encontrado o que você deseja ele retorna -1

console.log(stringTeste.indexOf("e", 5)); // Posso passar o número relativo por onde quero começar, por exemplo quero começar apartir da letra de indice 5

console.log(stringTeste.lastIndexOf("e")); // A diferença desse e do index of é que esse começa de tras para frente, também posso passar valor por onde deseja começar

console.log(stringTeste.replace("Um", "Outra")); // Substituir palavras no nosso texto

console.log(stringFrase.replace(/r/g, "BB")); // Posso também usar expressões regulares, nesse caso vai substituir todos os r minusculos por BB

console.log(stringFrase.length); //  Tamanho da nossa String

console.log(stringFrase.slice(2, 6)); // Para cortar nossa String selecionando palavras ou coisas do tipo

console.log(stringFrase.split(" ")); // Para quebrar nossa String em um array, se eu quiser quebrar ela apartir do espaço, eu só coloco o espaço, posso passa o parametro também de quantas vezes eu quero que isso seja feito por exemplo: split(' ', 2)

console.log(stringFrase.toUpperCase()); // Colocar toda a string em maiusculo

console.log(stringFrase.toLowerCase()); // Colocar toda a string em minusculo

let umaString = 'Um "texto"'; // Usar " \ " para escapar o caraceter

console.log(umaString);
