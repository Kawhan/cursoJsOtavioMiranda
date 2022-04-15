/* 
Luiz Otávio Miranda tem 30 anos, pesa 84kg
tem 1.8 de altura e seu IMC é de 25.92...
Luiz Otávio nasceu em 1980
*/

const nome = 'Kawhan';
const sobrenome = 'Laurindo';
const alturaEmM = 1.73;
const idade = 22;
const peso = 65;

let imc; // peso / (altura * altura)
imc = peso / (alturaEmM * alturaEmM); 
let anoNascimento;
anoNascimento = (2022 - idade) - 1;


//Template Strings
console.log(`${nome} ${sobrenome} tem ${idade} anos, pesa ${peso}, tem ${alturaEmM} de altura e seu IMC é de ${imc}. \n${nome} ${sobrenome} nasceu em ${anoNascimento}.`);

