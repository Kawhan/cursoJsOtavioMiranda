/* 
Faça um programa que leia um nome de usuário e a sua senha  
não aceite a senha igual ao nome do usuário 
mostrando uma mensagem de erro e voltando a pedir as informações.

*/

let nome = prompt("Digite um nome: ");
let senha = prompt("Digite sua senha: ");

while (nome === senha) {
    nome = prompt("Digite um nome: ");
    senha = prompt("Digite sua senha: ");
}
