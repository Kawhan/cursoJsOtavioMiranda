/** 
*!  Aritmeticos 
        *? + (Adição | Concatenação)
        *? - (Subtração)
        *? / (Divisão)
        *? * (Multiplicação)
        *? ** (Potenciação)
        *? % (resto da divisão)

*!  Precedência
        *? () 
        *? ** 
        *? * , / , %
        *? +. -

*!  Operadores de Incremento e Decremento
        *? ++ (Incremento)
        *? -- (Decremento)

*!  Operadores de atribuição
        *? += 
        *? -= 
        *? *= 
        *? **=
        *? /=

*!  Conversão de valores
        *? parseInt (Inteiro)
        *? parseFloat (decimais)
        *? Number (se adequa ao número)
*/

const num1 = 5;
const num2 = 10;
const num3 = '15';

console.log(num1 + num2); // Adição
console.log(num1 + num3); // Concatenação
console.log(num1 * num2); // Multiplicação
console.log(num2 - num1); // Subtração
console.log(num2 % num1); // Resto da divisão

const passo = 50;
let contador = 0;

contador += passo; // contador = contador + 50
console.log(contador);

contador += passo; // contador = contador + 50
console.log(contador);

contador += passo; // contador = contador + 50
console.log(contador);

const numeroVerdadeiro = parseInt('5');
const numeroVerdadeiro2 = parseFloat('2.2');
console.log(typeof numeroVerdadeiro);
console.log(typeof numeroVerdadeiro2);