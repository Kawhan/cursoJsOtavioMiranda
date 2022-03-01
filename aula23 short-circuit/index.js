/*

&& --> todas as expressões precisam ser verdadeiras para retornar verdadeiro
        false && true --> false (Apartir do momento que eu encontrei uma expressão falsa usando o nosso operador && ela já vai retornar falso, então não precisa checkar mais nada que vinher depois do and, então quando eu paro temos o que chamamos de avaliação curto circuito eu paro de checar), vai retornar o "valor mesmo"


|| --> Todas as expressões precisam ser falsas para retornar o falso
        true || true --> vai retornar o "valor mesmo" verdaeiro
        Precisa apenas de um valor verdadeiro para que todos retornem verdadeiro



* false (valor literal)
! FALSY (Fingem ser valores falsos)
    * 0
    * '' "" ``
    * null / undefined
    * NaN
*/


console.log('Luiz Otavio' && 0 && 'Maria'); // Apartir do momento que que o javascript encontra uma expressão que avalia em falso ele retorna de cara o "valor" falso, se não encontra nada falso dentro da nossa condicional ele checa todas as expressões e retorna a ultima


console.log('Kawhan' && '' && 'UFPB');
console.log('Kawhan' && null && 'UFPB');
console.log('Kawhan' && NaN && 'UFPB');

//* EM JAVASCRIPT TUDO PODE SER AVALIADO OU EM VERDADEIRO OU EM FALSO


// Em vez de eu simplesmente utilizar uma condicional posso usar o curto circuito para que ele possa selecionar e executar quando ambos os valores forem true
function falaOi () {
    return 'Oi';
}

const vaiExecutar = true;

console.log(vaiExecutar && falaOi());


// ? TRUE

console.log(0 || false || null || 'Kawhan' || true);

// Em vez de usar toda uma condicional para mecher nessa parte, posso usar simplesmente o curto circuito e ai ele mostra o primeiro valor true


const corUsuario = null;
const corPadrao = corUsuario || 'preto';

console.log(corPadrao);


const a = 0;
const b = null;
const c = 'false';
const d = false;
const e = NaN;

console.log(a || b || c || d || e);