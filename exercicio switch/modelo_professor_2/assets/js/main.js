// const h1 = document.querySelector('.container h1');
// const data = new Date();
// h1.innerHTML = data.toString();


// function getDiaSemanaTexto (diaSemana) {
//     let diaSemanaTexto_2;

//     switch (diaSemana) {
//         case 0:
//             diaSemanaTexto_2 = "domingo";
//             return diaSemanaTexto_2;
//         case 1:
//             diaSemanaTexto_2 = "segunda-feira";
//             return diaSemanaTexto_2;
//         case 2:
//             diaSemanaTexto_2 = "terça-feira";
//             return diaSemanaTexto_2;
//         case 3:
//             diaSemanaTexto_2 = "quarta-feira";
//             return diaSemanaTexto_2;
//         case 4:
//             diaSemanaTexto_2 = "quinta-feira";
//             return diaSemanaTexto_2;
//         case 5:
//             diaSemanaTexto_2 = "sexta-feira";
//             return diaSemanaTexto_2;
//         case 6:
//             diaSemanaTexto_2 = "sabado";
//             return diaSemanaTexto_2;
//         default:
//             diaSemanaTexto_2 = "Valor invalido";
//             return diaSemanaTexto_2;
//     }
// }

// function getNomeMes (numeroMes) {
//     let nomeMes;

//     switch (numeroMes) {
//         case 0:
//             nomeMes = "janeiro";
//             return nomeMes;
//         case 1:
//             nomeMes = "fevereiro";
//             return nomeMes;
//         case 2:
//             nomeMes = "março";
//             return nomeMes;
//         case 3:
//             nomeMes = "abril";
//             return nomeMes;
//         case 4:
//             nomeMes = "maio";
//             return nomeMes;
//         case 5:
//             nomeMes = "junho";
//             return nomeMes;
//         case 6:
//             nomeMes = "julho";
//             return nomeMes;
//         case 7:
//             nomeMes = "agosto";
//             return nomeMes;
//         case 8:
//             nomeMes = "setembro";
//             return nomeMes;
//         case 9:
//             nomeMes = "outubro";
//             return nomeMes;
//         case 10:
//             nomeMes = "novembro";
//             return nomeMes;
//         case 11:
//             nomeMes = "dezembro";
//             return nomeMes;
//         default:
//             nomeMes = "Valor invalido";
//             return nomeMes;
//     }
// }

// function criaData(data) {
//     const diaSemana = data.getDay();
//     const numeroMes = data.getMonth();

//     const nomeDia = getDiaSemanaTexto(diaSemana);
//     const nomeMes = getNomeMes(numeroMes);

//     return (`
//         ${nomeDia},
//         ${data.getDate()}
//         de ${nomeMes}
//         de ${data.getFullYear()}
//         ${zeroAEsquerda(data.getHours())}`
//         + `:${zeroAEsquerda(data.getMinutes())}`
//     );
// }

// function zeroAEsquerda (num) {
//     return num>=10 ? num : `0${num}`;
// }

// h1.innerHTML = criaData(data);

const h1 = document.querySelector('.container h1');
const data = new Date();

// const opcoes = {
//     dateStyle: 'full',
//     timeStyle: 'short',
// };

// h1.innerHTML = data.toLocaleString('pt-BR', opcoes);

h1.innerHTML = data.toLocaleString('pt-BR', {dateStyle: 'full', timeStyle: 'short'});