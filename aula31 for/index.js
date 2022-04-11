// Bloco do for não tem ponto e virgula no final
//   Variavel condição incremento
// i vem de indice
for (let i = 0; i <= 5; i++) {
    console.log(`Linha ${i}`);
}

console.log("------- END --------");
//Para dividir colocamos ;
// O loop vai executar as funções até que elas sejam passadas como verdadeira

// Posso definir passos de salto também mudando o incremento no final do for
// Posso também começar de valores negativos e por ai vai
for (let i = 0; i <= 100; i += 10) {
    console.log(`Linha ${i}`);
}

// Checar se o número é par ou impar
for (let i = 0; i <= 10; i++) {
    const par =
        i % 2 == 0 ? console.log(`${i} é par`) : console.log(`${i} Não é par`);
}

// Varrendo uma lista
const frutas = ["Maçâ", "Pera", "Uva"];

// Colocar menor para que o valor de parada seja exatamente o tamanho da list
for (let i = 0; i < frutas.length; i++) {
    console.log(frutas[i]);
}
