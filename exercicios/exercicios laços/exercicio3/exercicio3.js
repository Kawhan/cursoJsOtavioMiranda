/* 
Faça um programa que leia e valide as seguintes informações:
Nome: maior que 3 caracteres;
Idade: entre 0 e 150;
Salário: maior que zero;
Sexo: 'f' ou 'm';
Estado Civil: 's', 'c', 'v', 'd';
Dica: se sua variável é texto, o tamanho dela está armazenado em: texto.length.

*/

let Nome = prompt("Digite um nome maior que 3 caracteres: ");
let Idade = Number(prompt("Digite uma idade entre 0 e 150: "));
let Salario = Number(prompt("Digite um salário maior que 0: "));
let Sexo = prompt("Digite um sexo entre 'f' ou 'm': ");
let Estado_Civil = prompt("Digite um estado civil entre 's', 'c', 'v', 'd': ");

while (
    Nome.length < 3 ||
    Idade < 0 ||
    Idade > 150 ||
    Sexo !== "m" ||
    Sexo !== "f" ||
    Salario < 0 ||
    Estado_Civil !== "s" ||
    Estado_Civil !== "c" ||
    Estado_Civil !== "v" ||
    Estado_Civil !== "d"
) {
    Nome = prompt("Digite um nome maior que 3 caracteres: ");
    Idade = prompt("Digite uma idade entre 0 e 150: ");
    Salario = prompt("Digite um salário maior que 0: ");
    Sexo = prompt("Digite um sexo entre 'f' ou 'm': ");
    Estado_Civil = prompt("Digite um estado civil entre 's', 'c', 'v', 'd': ");
}
