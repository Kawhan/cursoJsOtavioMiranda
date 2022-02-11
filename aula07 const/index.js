// Não podemos criar constantes com palavras reservadas
// Constantes precisam ter nomes significativos
// Não podemos começar um nome de uma constante com um número
// Não pode conter espaços ou traços
// Utilizamos CamelCase
// Case-sensitive
// Não pode modificiar o valor de uma constante
// Não utilize var utilize const
// Temos de inicializar uma constante, não podemos associar novamente o valor dela a outra coisa

const nome = "João";

console.log(nome);

const primeiroNumero = 5;
const segundoNumero = 10;

const resultado = primeiroNumero * segundoNumero;
const resultadoDuplicado = resultado * 2;
let resultadoTriplicado = resultado * 3;
resultadoTriplicado = resultadoDuplicado * 2;

console.log(resultado);
console.log(resultadoDuplicado);
console.log(resultadoTriplicado);
console.log(typeof(resultado));