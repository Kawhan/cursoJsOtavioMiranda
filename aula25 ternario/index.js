// (condição ) ? 'Valor para verdadeiro' : 'Valor para falso'
// Pode ajudar a encurtar o codigo em lugares que você precise somente de um if e um else
// Dependendo do tamanho de minha condição eu posso utilizar o parênteses
const potuacao = 1000;



//                     (condição)         (true)          (false) 
const nivelUsuario = potuacao >= 1000 ? 'Usuaria VIP' : 'Usuario comum';


// Podemos setar um valor padrão para nossa váriavel também chamado de valor padrão, fallback
const corUsuario = null; // Como aqui esta sendo null ele vai escolher o primeiro valor verdadeiro que vai ser a outra cor que você digitar, caso você coloque uma cor por aqui ele vai meio que selecionar ela primeira porque é dado como true
const corPadrão = corUsuario || 'Preta';

console.log(nivelUsuario, corPadrão);

// if (potuacao >= 1000) {
//     console.log('Usuário Vip');
// } else {
//     console.log('Usuário Normal')
// }

