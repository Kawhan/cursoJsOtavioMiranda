/* 
Operadores de commparação
> maior que
>= maior que ou igual a
< menor que
<= menor que ou igual a
== igualdade (valor)
=== igualdade estrita (valor + tipo)
!= diferente (valor)
!== diferente estrito (valor e tipo)
*/

const num1 = 10;
const num2 = 10;

console.log(num1 >= num2);

const num3 = 10;
const num4 = '10';

console.log(num3 == num4); // Compara somente o valor
console.log(num3 === num4); // Compara o valor e o tipo

const comp = 10 > 5;
console.log(comp);