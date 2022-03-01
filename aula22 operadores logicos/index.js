/* 
Operadores Lógicos
&& -> AND -> E => Todas as expressões precisam ser verdadeiras para retornar true
|| -> OR -> OU
! -> NOT -> Não (inverte os valores)
*/

// && só retorna true se ambos os valores forem verdadeiros
// || só retorna true se algum dos valores for verdadeiro
// ! nega um valor (inverte uma expressão)

const exemploExpAnd = true && true && true && true;
const exemploExpOr = false || true || true || true;


console.log(exemploExpAnd);
console.log(exemploExpOr);


const usuario = 'Luiz';
const senha = '123456';

const vaiLogar = usuario === 'Luiz' && senha === '12345';
console.log(vaiLogar);


